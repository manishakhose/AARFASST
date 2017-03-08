package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_TangibleFixedAssets_Depriciation extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_IntangibleFixedAssetsAssetDepriciation_body ;

    public String getHeaderText_BSA_TangibleFixedAssets_Depriciation (){
        String text = getFormHeaderTextByParentElement(BSA_IntangibleFixedAssetsAssetDepriciation_body );
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_IntangibleFixedAssetsDepriciation {
        OriginalPrioryearClosingBalance , AdjustmentMadeInrelationToFRS102Adoption , OtherAdjustmentMadeToOpeningBalance , ChargedInPeriod , EliminatedOnDisposal , TransferredOutOnExistngAcademiesleavingtheTrust ,
        TransferredInOnExistingAcademiesjoiningeTrust , Revaluations , Reclassifications , AtCloseOfPeriod
    }

    public enum ColumnNames_IntangibleFixedAssetsDepriciation {
        FreeholdLandAndBuilding , LeaseholdlandAndBuilding , LeaseholdImprovements , PlantAndMachinery , FurnitureAndEquipment , ComputerEquipment , MotorVehicle , Total
    }

    public void setValueInTableByRowNameAndColumnName_BSA_TangibleFixedAssets_Depriciation (RowNames_IntangibleFixedAssetsDepriciation rowName , ColumnNames_IntangibleFixedAssetsDepriciation columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case OriginalPrioryearClosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102Adoption:
                rowNumber = 3 ; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 4 ; break;
            case ChargedInPeriod:
                rowNumber = 5 ; break;
            case EliminatedOnDisposal:
                rowNumber = 6 ; break;
            case TransferredOutOnExistngAcademiesleavingtheTrust:
                rowNumber = 7 ; break;
            case TransferredInOnExistingAcademiesjoiningeTrust:
                rowNumber = 8 ; break;
            case Revaluations:
                rowNumber = 9 ; break;
            case Reclassifications:
                rowNumber = 10 ; break;
            case AtCloseOfPeriod:
                break;
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
            case Total:
                columnNumber = 10 ; break;
        }

        try {
            WebElement element = BSA_IntangibleFixedAssetsAssetDepriciation_body .findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_TangibleFixedAssets_Depriciation (RowNames_IntangibleFixedAssetsDepriciation rowName , ColumnNames_IntangibleFixedAssetsDepriciation columnName ){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case OriginalPrioryearClosingBalance:
                rowNumber = 2; break;
            case AdjustmentMadeInrelationToFRS102Adoption:
                rowNumber = 3 ; break;
            case OtherAdjustmentMadeToOpeningBalance:
                rowNumber = 4 ; break;
            case ChargedInPeriod:
                rowNumber = 5 ; break;
            case EliminatedOnDisposal:
                rowNumber = 6 ; break;
            case TransferredOutOnExistngAcademiesleavingtheTrust:
                rowNumber = 7 ; break;
            case TransferredInOnExistingAcademiesjoiningeTrust:
                rowNumber = 8 ; break;
            case Revaluations:
                rowNumber = 9 ; break;
            case Reclassifications:
                rowNumber = 10 ; break;
            case AtCloseOfPeriod:
                break;
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
            case Total:
                columnNumber = 10 ; break;
        }

        try {
            WebElement element = BSA_IntangibleFixedAssetsAssetDepriciation_body .findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}




