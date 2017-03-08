package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_LossOfOfficePayments extends SoFA_BaseClass {

    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement lossOfOfficePayments_body;

    private String pageName= "Loss Of Office Payments";

    public void clickedNextButtonInLossOfOfficePaymentsPage(){
        clickOnNextButtonByParentElement(lossOfOfficePayments_body);
        logger.info("Next Button is now clicked in "+pageName);
    }
    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(lossOfOfficePayments_body);
    }

    public enum RowNames{LossOfOfficePayments_ServingAtYearEnd , LossOfOfficePayments_LeftDuringTheYear}

    public enum ColumnNames{AccountingOfficer  , OtherTrustees}

    public void setValueInTableByRowNameAndColumnNameInLossOfOfficePayments(RowNames rowName , ColumnNames columnName , String inputValue){

     int rowNumber = 0 ; int columnNumber = 0;

        if(rowName == RowNames.LossOfOfficePayments_ServingAtYearEnd){
            rowNumber = 1 ;
        } else if (rowName == RowNames.LossOfOfficePayments_LeftDuringTheYear){
            rowNumber = 2 ;
        }

        if (columnName == ColumnNames.AccountingOfficer){
            columnNumber = 3 ;
        } else if (columnName == ColumnNames.OtherTrustees){
            columnNumber = 4 ;
        }

        try {
            WebElement element = lossOfOfficePayments_body.findElement(By.xpath(".//div["+rowNumber+"]/div["+columnNumber+"]/div/input"));
            setValueInElementInput(element , inputValue);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Value input in row name :"+ rowName.toString()+" and column name :"+columnName.toString()+" is :"+ inputValue);
    }

    public enum SelectText{Yes , No}

    public void selectValueFromDropDownListByRowNameInLossOfOfficePayments(RowNames rowName , String selectText){
        int rowNumber = 0 ;

        if(rowName == RowNames.LossOfOfficePayments_ServingAtYearEnd){
            rowNumber = 1 ;
        } else if (rowName == RowNames.LossOfOfficePayments_LeftDuringTheYear){
            rowNumber = 2 ;
        }

        try {
            WebElement element = lossOfOfficePayments_body.findElement(By.xpath(".//div["+rowNumber+"]/div/div/div/select"));
            selectElementByVisibleText(element , selectText);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Selected drop down option :"+ selectText+" for Row "+ rowName.toString());
    }
}
