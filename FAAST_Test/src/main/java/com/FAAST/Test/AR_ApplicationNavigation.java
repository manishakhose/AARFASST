package com.FAAST.Test;


import Utilities.BrowserFactory;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class AR_ApplicationNavigation extends Page{


    @FindBy(how=How.XPATH , using = "//div[@class='opm-progress-stages']")
    WebElement mainNavigationMenu_body ;

    @FindBy(how=How.XPATH , using = "//div[@class='opm-progress-screens']")
    WebElement subNavigationMenu_body;

    @FindBy (how=How.XPATH , using = "//div[@id='timeout-warning']")
    WebElement timeOutWarning_donationsPage ;



    public boolean subMenuCompletionStatusBySubMenuOptionName(String subMenuOptionName){
        boolean completedStatus = false ;

        WebElement element = subNavigationMenu_body.findElement(By.xpath(".//ul/li/a[contains(text(),'"+subMenuOptionName+"')]/..//img"));
        completedStatus = element.getAttribute("alt").toString().equals("This screen has been completed");
        getLogger().info("The current completed status of "+subMenuOptionName+ " is :"+completedStatus+ " .");
        return completedStatus;

    }


    public boolean mainMenuCompletionStatusByMainMenuOptionName(String mainMenuOptionName){
        boolean completedStatus = false ;

        WebElement element = mainNavigationMenu_body.findElement(By.xpath(".//ul/li/a[contains(text(),'"+mainMenuOptionName+"')]/..//img"));
        completedStatus = element.getAttribute("alt").toString().equals("This screen has been completed");
        getLogger().info("The current completed status of "+mainMenuOptionName+ " is :"+completedStatus+ " .");
        return completedStatus;

    }

    public List<Boolean> mainMenuCompletionStatusOfForm(){
        List<Boolean> completedList = null ;
        boolean statusMessage = false ;
        List<WebElement> element  = mainNavigationMenu_body.findElements(By.xpath(".//li/img"));
        for (WebElement newElement :element) {
            if(newElement.getAttribute("alt")=="This screen has been completed") {
                statusMessage = true;
                completedList.add(statusMessage);
            }
            else {completedList.add(false);
            }
        }
        getLogger().info("The size of List is expected to be 10 and actual is "+ completedList.size());
        return completedList;
    }

    public List<Boolean> subMenuCompletionStatusOfForm(){
        List<Boolean> completedList = null ;
        boolean statusMessage = false ;
        List<WebElement> element  = subNavigationMenu_body.findElements(By.xpath(".//li/img"));
        for (WebElement newElement :element) {
            if(newElement.getAttribute("alt")=="This screen has been completed") {
                statusMessage = true;
                completedList.add(statusMessage);
            }
            else {completedList.add(false);
            }
        }
        getLogger().info("The size of List is expected to be 10 and actual is "+ completedList.size());
        return completedList;
    }


    public enum MainMenuNavigationOptions{
        StandingData ("Standing Data")  ,  SoFA("SoFA") , BalanceSheetAssets ("Balance Sheet Assets") , BalanceSheetLiabilities ("Balance Sheet Liabilities") ,
        BalanceSheetFundsAndOtherDisclosures ("Balance Sheet Funds and Other Disclosures") , CounterpartyData ("Counterparty Data") , Summary ("Summary") ,
        DeclarationAndSubmission ("Declaration and Submission");

        private final String stringValue;

        private MainMenuNavigationOptions(String s) {
            this.stringValue = s;
        }
        public String toString() {
            return stringValue;
        }
    }

    public void clickOnTabOption(MainMenuNavigationOptions optionName){
        try {
            clickElementWithRetry(mainNavigationMenu_body.findElement(By.xpath(".//li/a[contains(text(),'"+optionName.toString()+"')]")));
            explicitWait(1000);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Clicked the tab option '"+ optionName.toString() + "'.");
    }

    public void clickSubMenuOptionByOptionName(String  subMenuOptionName){
        try {
            WebElement elementToClick = subNavigationMenu_body.findElement(By.xpath(".//ul/li/a[contains(text(),'" + subMenuOptionName.toString() + "')]"));

            clickElementWithRetry(elementToClick);
            if (driver.getWindowHandles().size()>1){
                driver.switchTo().alert().accept();
            }

        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Clicked the SoFA_Donations option tab named "+ subMenuOptionName);
    }

    public boolean isTimeOutWarningMessagePresentAndDisplayed(){
        boolean isPresentAndDisplayed= false ;
        isPresentAndDisplayed = isElementPresentAndDisplayed(timeOutWarning_donationsPage);
        logger.info("The Time Out Warning state is "+ isPresentAndDisplayed);
        return isPresentAndDisplayed;
    }

}
