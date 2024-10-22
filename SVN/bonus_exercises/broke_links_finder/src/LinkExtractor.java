import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LinkExtractor {

    static Pattern patternTag;
    static Pattern patternLink;
    static Matcher matcherTag, matcherLink;


    private static final String A_TAG_PATTERN = "(?i)<a([^>]+)>(.+?)</a>";
    private static final String HREF_TAG_PATTERN = "\\s*(?i)href\\s*=\\s*(\"([^\"]*\")|'[^']*'|([^'\">\\s]+))";

    //constructor, compile regular expressions
    public LinkExtractor(){
        patternTag = Pattern.compile(A_TAG_PATTERN);
        patternLink = Pattern.compile(HREF_TAG_PATTERN);
    }

    public static ArrayList<String> grabLink (final String html){

        ArrayList<String> listOfLinks = new ArrayList<String>();

        matcherTag = patternTag.matcher(html);
        while (matcherTag.find()){

            String href = matcherTag.group(1);
            String linkText = matcherTag.group(2);

            matcherLink = patternLink.matcher(href);

            while (matcherLink.find()){
                    if(href.charAt(0) == ' '){
                        href = href.substring(0);
                    }
                    listOfLinks.add(href);

            }
        }
        return listOfLinks;
    }


}
