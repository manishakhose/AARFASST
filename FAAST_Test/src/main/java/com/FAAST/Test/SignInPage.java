package com.FAAST.Test;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SignInPage extends AR_ApplicationNavigation {


    @FindBy(how = How.XPATH , using = "//form[@id='hrd']")
    WebElement formBody_signInPage;


    public void clickOnSignInAccountByAccountName(String accountName){
        try {
            WebElement element = formBody_signInPage.findElement(By.xpath(".//div/span[contains(text(),'" + accountName + "')]"));
            waitForElementToBeVisible(element);
            clickElementWithRetry(element);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Account Named "+ accountName+ "is now clicked");
    }
}
