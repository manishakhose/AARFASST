package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_IntangibleFixedAssets_Amortisation extends BSA_baseClass {


    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_IntangibleFixedAssetsAmortisation_body ;

    public String getHeaderText_BSA_IntangibleFixedAssets_Amortisation(){
        String text = getFormHeaderTextByParentElement(BSA_IntangibleFixedAssetsAmortisation_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_IntangibleFixedAssets_Amortisation {
        OriginalPriorYearCosingBalance , AdjustmentMadeInrelationToFRS102 , OtherAdjustmentMadeToOpeningBalalnce , ChanrgedInPeriod , EliminatedOnDisposal , TransferredOutOnExistingAcademiesleavingTheTrust,
        TransferredInOnExixstingAcademiesJoiningTheTrust , Revaluations , Reclassifications , AtCloseOfPeriod ,

    }

    public enum ColumnNames_RowNames_BSA_IntangibleFixedAssets_Amortisation{
        Software , Other  , Total
    }

    public void setValueInTableByRowNameAndColumnNameInBSA_IntangibleFixedAssets_Amortisation(RowNames_BSA_IntangibleFixedAssets_Amortisation rowName , ColumnNames_RowNames_BSA_IntangibleFixedAssets_Amortisation columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102:
                rowNumber = 3; break;
            case OtherAdjustmentMadeToOpeningBalalnce:
                rowNumber = 4; break;
            case ChanrgedInPeriod:
                rowNumber = 5; break;
            case EliminatedOnDisposal:
                rowNumber = 6; break;
            case TransferredOutOnExistingAcademiesleavingTheTrust:
                rowNumber = 7; break;
            case TransferredInOnExixstingAcademiesJoiningTheTrust:
                rowNumber = 8; break;
            case Revaluations:
                rowNumber = 9; break;
            case Reclassifications:
                rowNumber = 10; break;
            case AtCloseOfPeriod:
                rowNumber = 11; break;
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
            WebElement element = BSA_IntangibleFixedAssetsAmortisation_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnNameInBSA_IntangibleFixedAssets_Amortisation(RowNames_BSA_IntangibleFixedAssets_Amortisation rowName , ColumnNames_RowNames_BSA_IntangibleFixedAssets_Amortisation columnName){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102:
                rowNumber = 3; break;
            case OtherAdjustmentMadeToOpeningBalalnce:
                rowNumber = 4; break;
            case ChanrgedInPeriod:
                rowNumber = 5; break;
            case EliminatedOnDisposal:
                rowNumber = 6; break;
            case TransferredOutOnExistingAcademiesleavingTheTrust:
                rowNumber = 7; break;
            case TransferredInOnExixstingAcademiesJoiningTheTrust:
                rowNumber = 8; break;
            case Revaluations:
                rowNumber = 9; break;
            case Reclassifications:
                rowNumber = 10; break;
            case AtCloseOfPeriod:
                rowNumber = 11; break;
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
            WebElement element = BSA_IntangibleFixedAssetsAmortisation_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}


