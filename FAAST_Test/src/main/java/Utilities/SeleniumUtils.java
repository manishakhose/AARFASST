package Utilities;


import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;

public class SeleniumUtils {



    public static WebDriver driver ;

    SeleniumUtils(){
        PageFactory.initElements(driver,this);
    }

    public static void takeScreenshot() {

//        File sourceFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//        try {
//            FileUtils.copyFile(sourceFile,new File("/Users/PoonamAniket/IdeaProjects/FAAST_Test/src/Screenshots",(driver.getClass().getName()+".png")));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    //        System.out.println(" Screenshot taken for Class :"+ driver.getWindowHandle().toString());
    }
}
