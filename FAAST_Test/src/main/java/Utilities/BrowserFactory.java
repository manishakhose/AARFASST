package Utilities;


import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.NetworkMode;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BrowserFactory extends LoggingFactory{

    public static String url ;
    public static String browser;
    public static String testName;
    static Logger logger = LoggingFactory.getLogger();

    public static void openBrowser() throws IOException {

        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir") + "/src/config.properties");
        properties.load(fileInputStream);

        url=properties.getProperty("url");
        browser = properties.getProperty("browser");
        testName = properties.getProperty("testName");

        if(browser.equalsIgnoreCase("Firefox")){
            driver= new FirefoxDriver();
            LoggingFactory.logger.info("Opening Firefox Browser");
        }
        else if(browser.equalsIgnoreCase("headless")){
            driver = new HtmlUnitDriver();
            logger.info(" Operating on Headless Browser");
        }
        else if (browser.equalsIgnoreCase("Chrome")){
            System.setProperty("webdriver.chrome.driver" , "C:\\manisha\\SFA\\FAAST_Test\\FAAST_Test\\src\\test\\drivers\\chromedriver.exe");
            //(System.getProperty("user.dir")+"//src//test//drivers//chromedriver"))
     //       ChromeOptions chromeOptions = new ChromeOptions();
    //        chromeOptions.addArguments("--kiosk");
            driver = new ChromeDriver();
            logger.info(" \nOpening Chrome Browser");
        }
        else if(browser.equalsIgnoreCase("safari")){
            System.getProperty("webdriver.safari.driver","/Users/poonamwadkar/Downloads/selenium-safari-driver-2.43.1");
            driver= new SafariDriver();
            logger.info(" \nOpening Safari Browser !");
        }
        driver.get(url);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10 , TimeUnit.SECONDS);
        //driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
    }

    public static void closeBrowser(){
        try {
            driver.wait(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.close();
        driver.quit();
    }

    public WebDriver getDriver(){
        return driver ;
    }
}
