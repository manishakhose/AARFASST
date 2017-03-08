package com.FAAST.Test.balalnceSheetAssets_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_Debtors extends BSA_baseClass{

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_Debtors_body ;

    public String getHeaderText_BSA_Debtors(){
        String text = getFormHeaderTextByParentElement(BSA_Debtors_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_Debtors{
        OriginalPriorYearClosingBalance, AdjustmentMadeInRelationToFRS102Adoption, OtherAdjustmentMadeToOpeningBalance, Additions, TransferredInOnConversionLocalAuthority,
        TransferredOnConversionElsewhere, TransferredInOnExistingAcademiesJoiningTheTrust, Donations, Disposals, TransferredOutOnExistingAcademiesLeavingTheTrust,
        Revaluations, Reclassifications, AtCloseOfPeriod
    }


    public enum ColumnNames_BSA_Debtors{
        Software, Other , Total
    }

    public void setValueInTableByRowNameAndColumnName_BSA_Debtors(RowNames_BSA_Debtors rowName, ColumnNames_BSA_Debtors columnName, String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPriorYearClosingBalance:
                rowNumber = 3; break;
            case AdjustmentMadeInRelationToFRS102Adoption:
                rowNumber = 4 ; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 5 ; break;
            case Additions:
                rowNumber = 6 ; break;
            case TransferredInOnConversionLocalAuthority:
                rowNumber= 7 ; break;
            case TransferredOnConversionElsewhere:
                rowNumber = 8 ; break;
            case TransferredInOnExistingAcademiesJoiningTheTrust:
                rowNumber = 9 ; break;
            case Donations:
                rowNumber = 10 ; break;
            case Disposals:
                rowNumber = 11 ; break;
            case TransferredOutOnExistingAcademiesLeavingTheTrust:
                rowNumber = 12 ; break;
            case Revaluations:
                rowNumber = 13 ; break;
            case Reclassifications:
                rowNumber = 14 ; break;
            case AtCloseOfPeriod:
                rowNumber = 15 ; break;
        }

        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4 ; break;
            case Total:
                columnNumber = 5 ; break;
        }

        try {
            WebElement element = BSA_Debtors_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_Debtors(RowNames_BSA_Debtors rowName , ColumnNames_BSA_Debtors columnName){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPriorYearClosingBalance:
                rowNumber = 3; break;
            case AdjustmentMadeInRelationToFRS102Adoption:
                rowNumber = 4 ; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 5 ; break;
            case Additions:
                rowNumber = 6 ; break;
            case TransferredInOnConversionLocalAuthority:
                rowNumber= 7 ; break;
            case TransferredOnConversionElsewhere:
                rowNumber = 8 ; break;
            case TransferredInOnExistingAcademiesJoiningTheTrust:
                rowNumber = 9 ; break;
            case Donations:
                rowNumber = 10 ; break;
            case Disposals:
                rowNumber = 11 ; break;
            case TransferredOutOnExistingAcademiesLeavingTheTrust:
                rowNumber = 12 ; break;
            case Revaluations:
                rowNumber = 13 ; break;
            case Reclassifications:
                rowNumber = 14 ; break;
            case AtCloseOfPeriod:
                rowNumber = 15 ; break;
        }

        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4 ; break;
            case Total:
                columnNumber = 5 ; break;
        }

        try {
            WebElement element = BSA_Debtors_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}

