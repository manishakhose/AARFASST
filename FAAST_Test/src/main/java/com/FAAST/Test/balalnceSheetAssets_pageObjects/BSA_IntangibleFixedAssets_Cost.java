package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_IntangibleFixedAssets_Cost extends BSA_baseClass{
    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_IntangibleFixedAssetsCost_body ;


    public String getHeaderTextInBSA_IntangibleFixedAssets_Cost(){
        String text = getFormHeaderTextByParentElement(BSA_IntangibleFixedAssetsCost_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_IntangibleFixedAssets_Cost {
        OriginalPriorYearCosingBalance , AdjustmentMadeInrelationToFRS102 , OtherAdjustmentMaetoOpeningBalalnce , Auditions , TransferredInOnConversionLocalAuthority ,
        TransferredInOnConversionElsewhere , TransferredInOnExixtingAcademiesJoining , Donations , Disposals , TransferredOutOnExixtingAcademies , Revaluations,
        Reclassifications , AllCloseOfPeriod
    }


    public enum ColumnNames_BSA_IntangibleFixedAssets_Cost {
        Software, Other, Total
    }

    public void setValueInTableByRowNameAndColumnNameInBSA_IntangibleFixedAssets_Cost(RowNames_BSA_IntangibleFixedAssets_Cost rowName , ColumnNames_BSA_IntangibleFixedAssets_Cost columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102:
                rowNumber = 3; break;
            case OtherAdjustmentMaetoOpeningBalalnce:
                rowNumber = 4; break;
            case Auditions:
                rowNumber = 5; break;
            case TransferredInOnConversionLocalAuthority:
                rowNumber = 6; break;
            case TransferredInOnConversionElsewhere:
                rowNumber = 7; break;
            case TransferredInOnExixtingAcademiesJoining:
                rowNumber = 8; break;
            case Donations:
                rowNumber = 9; break;
            case Disposals:
                rowNumber =10; break;
            case TransferredOutOnExixtingAcademies:
                rowNumber = 11; break;
            case Revaluations:
                rowNumber = 12; break;
            case Reclassifications:
                rowNumber = 13; break;
            case AllCloseOfPeriod:
                rowNumber = 14; break;
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
            WebElement element = BSA_IntangibleFixedAssetsCost_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnNameInBSA_IntangibleFixedAssets_Cost(RowNames_BSA_IntangibleFixedAssets_Cost rowName , ColumnNames_BSA_IntangibleFixedAssets_Cost columnName){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPriorYearCosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102:
                rowNumber = 3; break;
            case OtherAdjustmentMaetoOpeningBalalnce:
                rowNumber = 4; break;
            case Auditions:
                rowNumber = 5; break;
            case TransferredInOnConversionLocalAuthority:
                rowNumber = 6; break;
            case TransferredInOnConversionElsewhere:
                rowNumber = 7; break;
            case TransferredInOnExixtingAcademiesJoining:
                rowNumber = 8; break;
            case Donations:
                rowNumber = 9; break;
            case Disposals:
                rowNumber =10; break;
            case TransferredOutOnExixtingAcademies:
                rowNumber = 11; break;
            case Revaluations:
                rowNumber = 12; break;
            case Reclassifications:
                rowNumber = 13; break;
            case AllCloseOfPeriod:
                rowNumber = 14; break;
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
            WebElement element = BSA_IntangibleFixedAssetsCost_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from row :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}