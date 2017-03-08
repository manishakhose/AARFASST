package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_IntangibelFixedAssets_Imariment extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_IntangibleFixedAssetsImpariments_body ;

    public String getHeaderText_BSA_IntangibelFixedAssets_Imariment(){
        String text = getFormHeaderTextByParentElement(BSA_IntangibleFixedAssetsImpariments_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_IntangibelFixedAssets_Imariment {
        OriginalPriorYearCosingBalance , OtherAdjustmentMadeToOpeningBalalnce , ChanrgedInPeriod , ReleasedInPeriod , TransferredInOnExistingAcademiesJoiningTheTrust ,
        TransferredInOnExistingAcademiesLeavingTheTrust, ClosingBalalnce
    }

    public enum ColumnNames_IntangibleFixedAssetsImpariments {
        Software , Other  , Total
    }

    public void setValueInTableByRowNameAndColumnName_BSA_IntangibelFixedAssets_Imariment(RowNames_BSA_IntangibelFixedAssets_Imariment rowName , ColumnNames_IntangibleFixedAssetsImpariments columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case OtherAdjustmentMadeToOpeningBalalnce:
                rowNumber = 3; break;
            case ChanrgedInPeriod:
                rowNumber = 4; break;
            case ReleasedInPeriod:
                rowNumber = 5; break;
            case TransferredInOnExistingAcademiesJoiningTheTrust:
                rowNumber = 6; break;
            case TransferredInOnExistingAcademiesLeavingTheTrust:
                rowNumber = 7; break;
            case ClosingBalalnce:
                rowNumber = 8; break;
        }

        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4; break;
            case Total:
                columnNumber = 5; break;
        }

        try {
            WebElement element = BSA_IntangibleFixedAssetsImpariments_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_IntangibelFixedAssets_Imariment(RowNames_BSA_IntangibelFixedAssets_Imariment rowName , ColumnNames_IntangibleFixedAssetsImpariments columnName){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case OtherAdjustmentMadeToOpeningBalalnce:
                rowNumber = 3; break;
            case ChanrgedInPeriod:
                rowNumber = 4; break;
            case ReleasedInPeriod:
                rowNumber = 5; break;
            case TransferredInOnExistingAcademiesJoiningTheTrust:
                rowNumber = 6; break;
            case TransferredInOnExistingAcademiesLeavingTheTrust:
                rowNumber = 7; break;
            case ClosingBalalnce:
                rowNumber = 8; break;
        }
        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4; break;
            case Total:
                columnNumber = 5; break;
        }
        try {
            WebElement element = BSA_IntangibleFixedAssetsImpariments_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from row :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}



