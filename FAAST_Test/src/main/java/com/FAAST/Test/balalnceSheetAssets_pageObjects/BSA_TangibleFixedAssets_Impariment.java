package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class BSA_TangibleFixedAssets_Impariment extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_IntangibleFixedAssetsAssetImpariment_body ;

    public String getHeaderText_BSA_TangibleFixedAssets_Imapriments(){
        String text = getFormHeaderTextByParentElement(BSA_IntangibleFixedAssetsAssetImpariment_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_IntangibleFixedAssetsImpariments {
       OriginalPrioryearClosingBalance , OtherAdjustmentMadeToOpeningBalance , ChargedInPeriod , ReleasedInPeriod , TransferredInOnExistingAcademiesLeavingTheTrust , TransferredOutOnExistingAcademiesLeavingTheTrust ,
        ClosingBalance
    }

    public enum ColumnNames_IntangibleFixedAssetsImpariments {
        FreeholdLandAndBuilding , LeaseholdlandAndBuilding , LeaseholdImprovements , PlantAndMachinery , FurnitureAndEquipment , ComputerEquipment , MotorVehicle , AssetUnderConstruction , Total
    }

    public void setValueInTableByRowNameAndColumnName_BSA_TangibleFixedAssets_Impariments(RowNames_IntangibleFixedAssetsImpariments rowName , ColumnNames_IntangibleFixedAssetsImpariments columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPrioryearClosingBalance:
                rowNumber = 2; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 3 ; break;
            case ChargedInPeriod:
                rowNumber = 4 ; break;
            case ReleasedInPeriod:
                rowNumber = 5 ; break;
            case TransferredInOnExistingAcademiesLeavingTheTrust:
                rowNumber = 6 ; break;
            case TransferredOutOnExistingAcademiesLeavingTheTrust:
                rowNumber = 7 ; break;
            case ClosingBalance:
                rowNumber = 8 ; break;
        }

        switch (columnName){
            case FreeholdLandAndBuilding:
                columnNumber = 3; break;
            case LeaseholdlandAndBuilding:
                columnNumber = 4 ; break;
            case LeaseholdImprovements:
                columnNumber = 5 ; break;
            case PlantAndMachinery:
                columnNumber = 6 ; break;
            case FurnitureAndEquipment:
                columnNumber = 7 ; break;
            case ComputerEquipment:
                columnNumber = 8 ; break;
            case MotorVehicle:
                columnNumber = 9 ; break;
            case AssetUnderConstruction:
                columnNumber = 10 ;break;
            case Total:
                break;
        }

        try {
            WebElement element = BSA_IntangibleFixedAssetsAssetImpariment_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_TangibleFixedAssets_Impariments(RowNames_IntangibleFixedAssetsImpariments rowName , ColumnNames_IntangibleFixedAssetsImpariments columnName ){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPrioryearClosingBalance:
                rowNumber = 2; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 3 ; break;
            case ChargedInPeriod:
                rowNumber = 4 ; break;
            case ReleasedInPeriod:
                rowNumber = 5 ; break;
            case TransferredInOnExistingAcademiesLeavingTheTrust:
                rowNumber = 6 ; break;
            case TransferredOutOnExistingAcademiesLeavingTheTrust:
                rowNumber = 7 ; break;
            case ClosingBalance:
                rowNumber = 8 ; break;
        }

        switch (columnName){
            case FreeholdLandAndBuilding:
                columnNumber = 3; break;
            case LeaseholdlandAndBuilding:
                columnNumber = 4 ; break;
            case LeaseholdImprovements:
                columnNumber = 5 ; break;
            case PlantAndMachinery:
                columnNumber = 6 ; break;
            case FurnitureAndEquipment:
                columnNumber = 7 ; break;
            case ComputerEquipment:
                columnNumber = 8 ; break;
            case MotorVehicle:
                columnNumber = 9 ; break;
            case AssetUnderConstruction:
                columnNumber = 10 ;break;
            case Total:
                break;
        }

        try {
            WebElement element = BSA_IntangibleFixedAssetsAssetImpariment_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}




