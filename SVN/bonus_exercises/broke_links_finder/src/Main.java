import java.lang.String;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.io.*;

public class Main {

    public static void main(String[] args) throws InterruptedException, IOException {
        /*
        String test =   "href='#' style='margin-right: 60px;' ";
        if(test.contains(" ")){
            if(test.indexOf(" ") != test.length()) {
                int x1 = test.indexOf(" ");
                test = test.substring(0, x1);
                System.out.print(test);
            }
        } */



        String documentPath, resultPath= " ";
        Scanner console = new Scanner(System.in);
        ArrayList<htmlLink> listOfLinks = new ArrayList<htmlLink>();
        File f1,f2;
        boolean save = true;
        File[] foundfiles = new File[0];
        String outputString = " ";
        String tempOutputString;
        String title;


        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        outputString = outputString+now+"\n";




        //Interactions________________________________________________________________________
        System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        System.out.println("Started BrokenLinksFinder:");
        System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        //Set source path for html link to check
        do {
            System.out.println(">>> Type absolute path of the folder containing the files to check:");

            documentPath=console.nextLine();
            f1 = new File(documentPath);

            System.out.println("<< Selected '"+documentPath+"' as source path. Checking if exists and is a directory..");

            if(!f1.exists()){
                System.out.println("ERROR: Directory not found. Try again");
            }else if(!f1.isDirectory()){
                System.out.println("Expected a directory, given a file.");
            }else{
                System.out.println("---------------------------------");
                System.out.println("Found the following html files:");

                fileFilter filter = new fileFilter();
                foundfiles = filter.getList("html", documentPath);
                for(int i=0; i<foundfiles.length; i++){

                    System.out.println(i+") "+foundfiles[i].getName());
                }
                System.out.println("---------------------------------");
            }

        }while (!f1.exists() || !f1.isDirectory() );
        System.out.println("<< Directory: OK.");
        //Set results path, where to put the results
        String p;
        do {
            System.out.println(">> Store  the results? [Y] / [N] ");
            p = console.next();
            if(!p.equals("N") && !p.equals("Y") && !p.equals("n") && !p.equals("y")){
                System.out.println("Wrong input; Only N, n, Y and y allowed.");
            }else if( p.equals("n") || p.equals("N")){
                save=false;

                System.out.println("Wait for the finishing confirmation before closing the program.");
            }else {
                save=true;
                System.out.println("Getting the results..");
            }
        }while (!p.equals("N") && !p.equals("Y") && !p.equals("n") && !p.equals("y"));

        if(save) {
            do {
                System.out.println(">>> Type absolute path to decide where to put the results (list of all links + status):");

                resultPath = console.next();

                System.out.println("<< Selected'" + resultPath + "' as result path. Checking if exists and is a directory..");
                f2 = new File(resultPath);
                if (!f2.exists()) {
                    System.out.println("ERROR: File not Found. Try again");
                } else if (!f2.isDirectory()) {
                    System.out.println("ERROR: Not a Directory. Try again");
                }
            } while (!f2.exists() || !f2.isDirectory());
            System.out.println("<< Directory: OK.");
        }




        //____________________________________________________________________________________


        //Read whole html file and convert it into a string___________________________________
        //problem html file too long for a single string?
        for(int i=0; i<foundfiles.length;i++) {
            String content = " ";
            try {

                content = Files.readString(Paths.get(documentPath+"/"+foundfiles[i].getName()));
                System.out.println("---------------------------------");
                title = "<< Links found in: "+foundfiles[i].getName()+"\n";
                outputString = outputString+"\n"+title+"\n";
                System.out.println(title);

            } catch (IOException e) {
                e.printStackTrace();
            }
            //Extract Links from given html file__________________________________________________
            //create new extractor
            LinkExtractor extractor = new LinkExtractor();
            //fill the list with all the hrefs found
            ArrayList<String> list = extractor.grabLink(content);

            String temp;
            String result;


            for (String e : list) {
                //System.out.println(e);
                listOfLinks.add(new htmlLink());
                int currentPos = (listOfLinks.size() - 1);
                htmlLink currentHtmlLink = listOfLinks.get(currentPos);

                temp = extractLink(e);
                currentHtmlLink.setHref(temp);


                if (isLocal(temp)) {
                    currentHtmlLink.setType(1);
                } else {
                    currentHtmlLink.setType(0);
                }

                result = verifyLinkActive(temp);
                if (currentHtmlLink.type == htmlLink.type.EXTERNAL) {
                    if (isOnline(result)) {
                        currentHtmlLink.setStatus(0);
                    } else {
                        currentHtmlLink.setStatus(1);
                    }
                } else {
                    if (isValid(temp, documentPath)) {
                        currentHtmlLink.setStatus(0);
                    } else {
                        currentHtmlLink.setStatus(1);
                    }
                }




                    tempOutputString = currentHtmlLink.href + " Type: " + currentHtmlLink.type + " Status: " + currentHtmlLink.status + "\n";
                    outputString = outputString + tempOutputString;
                    System.out.println(tempOutputString);


            }
            System.out.println("---------------------------------");
        }
        if(save) {


            BufferedWriter writer = new BufferedWriter(new FileWriter(resultPath+"/result.txt"));
            writer.write(outputString);
            writer.close();
            System.out.println("\nProgram terminated correcly. Safe to close it.\n Results are located in: " + resultPath);
        }
        System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    }


    public static String  verifyLinkActive(String linkUrl) {
        try {
            URL url = new URL(linkUrl);


            HttpURLConnection httpURLConnect = (HttpURLConnection) url.openConnection();

            httpURLConnect.setConnectTimeout(3000);

            httpURLConnect.connect();

            if (httpURLConnect.getResponseCode() == 200) {
                return linkUrl + " - " + httpURLConnect.getResponseMessage();
            }
            if (httpURLConnect.getResponseCode() == HttpURLConnection.HTTP_NOT_FOUND) {
               return linkUrl + " - " + httpURLConnect.getResponseMessage() + " - " + HttpURLConnection.HTTP_NOT_FOUND;
            }
            if(httpURLConnect.getResponseCode()== 404) {
                return linkUrl+" - "+httpURLConnect.getResponseMessage();
            }
            if(httpURLConnect.getResponseCode()== -1) {
                return linkUrl+" - "+httpURLConnect.getResponseMessage();
            }

        } catch (Exception e) {

        }
        return "other";
    }
    //Given a String of the form href="https://www.google.com"
    //returns the executable url only
    private static String extractLink(String in){

        int firstIndex = in.indexOf("href");
        int delta = ("href".length())+2;

        int endIndex = in.length();
        Scanner sc = new Scanner(in);
        for(int i=firstIndex+delta; i<in.length();i++){//after the first href found, + delta (lenght of href=" ) find the next double quote to end the string
            if(in.charAt(i) == '"'){
                endIndex=i;
                break;
            }
        }



        String out;


        out = in.substring(firstIndex+delta,endIndex);
        return out;
    }

    //returns wether a given link is local
    private static boolean isLocal(String in){
        if(in.length()<8){
            return true;
        }
        return !(in.substring(0,8).equals("https://"));
    }

    //for external links, returns if it's online
    private static boolean isOnline(String in){
        int size = in.length();

        return (in.substring(size-2,size).equals("OK"));
    }

    //for internal links returns wether the path exists
    private static boolean isValid(String Path, String documentPath){

        //case that the path is absolute
        File f1 = new File(Path);

        //case that the path is relative, add it to the absolute path where the
        //file is found

        File f2 = new File(documentPath+"/"+Path);
        //either the relative or absolute path must work
        return (f1.exists() || f2.exists());
    }


}
