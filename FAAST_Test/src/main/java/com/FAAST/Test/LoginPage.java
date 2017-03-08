package com.FAAST.Test;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class LoginPage extends Page {

    @FindBy (how = How.XPATH , using = "//input[@type='text']")
    WebElement username_LoginPage ;


    @FindBy (how=How.XPATH , using = "//input[@type='password']")
    WebElement password_LoginPage;

    @FindBy(how=How.XPATH , using = "//input[@type='submit']")
    WebElement submitButton_LoginPage ;

    @FindBy (how=How.XPATH , using = "//button[@id='normal_button']")
    WebElement startButtonOnLoginSuccess ;

    @FindBy (how=How.XPATH , using = "//button[@id='submit']")
    WebElement continueButtonOnLoginSuccess ;

    private static  String userName = "" ;
    private static String password = "";

    public static void getUserName() throws IOException {
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir")+"/src/config.properties");
        properties.load(fileInputStream);
        userName = properties.getProperty("username");
        password=properties.getProperty("password");

    }

    public static void getPassword() throws IOException {
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir")+"/src/config.properties");
        properties.load(fileInputStream);
        password=properties.getProperty("password");

    }
    public void setUsernameValueInLoginPage(){
        String username = "isp\\HoneyA";
        waitForElementToBeVisible(username_LoginPage);
        setValueInElementInput(username_LoginPage , username);
        logger.info("The Username entered is "+ username);
    }

    public void setPasswordValueInLoginPage(){

        String password = "Windmill1";
        setValueInElementInput(password_LoginPage,password);
        logger.info("The password enetered is "+ password);
    }

    public void clickSubmitButtonInLoginPage(){
        clickElementWithRetry(submitButton_LoginPage);
    }

    public void clickStartButtonOnLoginSuccess(){
        clickElementWithRetry(startButtonOnLoginSuccess);
    }

    public void clickContinueButtonOnLoginSuccess(){
        clickElementWithRetry(continueButtonOnLoginSuccess);
    }





}
