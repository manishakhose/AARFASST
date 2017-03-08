package com.FAAST.Test.summay_pageObjects;


import com.FAAST.Test.AR_ApplicationNavigation;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Summary_BaseClass extends AR_ApplicationNavigation {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement summary_body ;

    public boolean isValidationRulePresentAndListedInSummaryPage1(String valRuleNumber){
        boolean isPresentAndListed = false ;

        try{
            Wait wait = new WebDriverWait(driver, 0).ignoring(NoSuchElementException.class).withMessage("Element Not Found");
            WebElement element = summary_body.findElement(By.xpath(".//div/b/following-sibling::text()[contains(.,'"+valRuleNumber+"')]/.."));
            wait.until(ExpectedConditions.visibilityOf(element));
            logger.info("\nThe current present and listed status of the Validation rule number :"+valRuleNumber+ " is :"+true);
            return true ;
      } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            logger.info("\nThe current present and listed status of the Validation rule number :"+valRuleNumber+ " is :"+false);
            return false ;
        }
    }

    public boolean isValidationRulePresentAndListedInSummaryPage(String valRuleNumber){
        boolean isPresentAndListed = false ;

        try{
//            driver.manage().timeouts().implicitlyWait(1,TimeUnit.SECONDS);
//            Wait wait = new WebDriverWait(driver, 0).ignoring(NoSuchElementException.class).withMessage("Element Not Found");
            WebElement element = summary_body.findElement(By.xpath(".//div/b/following-sibling::text()[contains(.,'"+valRuleNumber+"')]/.."));
            if(element.getSize()!=null){
                isPresentAndListed = true;
            } else isPresentAndListed = false;

            logger.info("\nThe current present and listed status of the Validation rule number :"+valRuleNumber+ " is :"+true);
            return isPresentAndListed ;
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            logger.info("\nThe current present and listed status of the Validation rule number :"+valRuleNumber+ " is :"+false);
            return false ;
        }
    }

}
