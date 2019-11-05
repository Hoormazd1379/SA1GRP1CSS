import java.io.File;
import java.io.FilenameFilter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public class fileFilter {


    public File[] getList(String ext, String path){
        File dir = new File(path);

        File[] matches = dir.listFiles(new FilenameFilter()
        {
            public boolean accept(File dir, String name)
            {
                return name.endsWith(".html");
            }
        });

        return matches;

    }
}
