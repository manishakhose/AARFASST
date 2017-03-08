package com.FAAST.Test.sofa_pageObjects;

import com.FAAST.Test.Page;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Mailinator extends Page {


    @FindBy(how= How.XPATH , using = "//section[@class='content-block-nopad content-3-2']")
    WebElement parentElementForMailBoxGeneration;

    @FindBy(how=How.XPATH , using = "//div[@id='publicm8rguy']")
    WebElement emptyInboxMessageElement ;

    public void setValueIncheckAnyInboxInputField(String inputValue){

        try {
            WebElement element = parentElementForMailBoxGeneration.findElement(By.xpath(".//input"));
            setValueInElementInput(element, inputValue);
            logger.info("MailBox Creation SUCCESSFUL ...... Hurrrrrray !");
        }  catch (Exception e ){
            e.printStackTrace();
            logger.info("Mail Box NOT CREATED......WARNING !!");
        }
    }

    public void clickOnGoButton(){
        try {
            WebElement element = parentElementForMailBoxGeneration.findElement(By.xpath(".//button"));
            clickElementWithRetry(element);
            logger.info("The GO Button is now Clicked !!");
        } catch (Exception e){
            e.printStackTrace();
            logger.info("UNSUCCESSFUL on the GO Button....... WARNING !!!! ");
        }
    }


    public String getManlinatoHomePageHeader(){
        String text = "";
        try {
            WebElement element = parentElementForMailBoxGeneration.findElement(By.xpath(".//div[@class='panel-heading']"));
            text = getElementTextWithRetry(element);
            logger.info("The Home Page had been reached ..... SUCCESFUL");
        } catch (Exception e){
            e.printStackTrace();
            logger.info("The Home Page has not been Reached ...... WARNING !!");
        }
        return text ;
    }

    public boolean isEmptyInboxMessageIsPresnetAndDisplayed(){
        boolean isPresentAndDisplayed = false;
        try{
            isPresentAndDisplayed = isElementPresentAndDisplayed(emptyInboxMessageElement);
            logger.info("The Current Displayed staus of the EMPTY INBOX Message is : "+ isPresentAndDisplayed);
        }catch (Exception e ){
            e.printStackTrace();
            logger.info("The Mail Box is not Empty ..........WARNING!!");
        }
        return isPresentAndDisplayed;
    }
}
