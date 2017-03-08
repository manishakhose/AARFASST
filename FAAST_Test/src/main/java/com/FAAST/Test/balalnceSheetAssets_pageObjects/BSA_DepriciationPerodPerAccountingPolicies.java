package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_DepriciationPerodPerAccountingPolicies extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_DepriciationPerodPerAccountingPolicies_body ;

    public String getHeaderText_BSA_DepriciationPerodPerAccountingPolicies(){
        String text = getFormHeaderTextByParentElement(BSA_DepriciationPerodPerAccountingPolicies_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_DepriciationPerodPerAccountingPolicies {
        SinglePeriodOrMinimumOfRange , MaximumOfRange , ReducingBalanceRate }

    public enum ColumnNames_BSA_DepriciationPerodPerAccountingPolicies{
        FreeholdLandAndBuilding , LeaseholdLandAndBuilding , LeaseholdImprovements , PlantAndMachinery , FurnitureAndEquipment , ComputerEquipment ,
         MotorVehicles
    }

    public void setValueInTableByRowNameAndColumnName_BSA_DepriciationPerodPerAccountingPolicies(RowNames_BSA_DepriciationPerodPerAccountingPolicies rowName, ColumnNames_BSA_DepriciationPerodPerAccountingPolicies columnName, String inputValue) {

        int rowNumber = 0;
        int columnNumber = 0;

        switch (rowName) {
              case SinglePeriodOrMinimumOfRange:
                rowNumber = 2; break;
            case MaximumOfRange:
                rowNumber = 3 ; break;
            case ReducingBalanceRate:
                rowNumber = 5 ; break;
        }
        switch (columnName) {
            case FreeholdLandAndBuilding:
                columnNumber = 3; break;
            case LeaseholdLandAndBuilding:
                columnNumber = 4; break;
            case LeaseholdImprovements:
                columnNumber = 5; break;
            case PlantAndMachinery:
                columnNumber = 6; break;
            case FurnitureAndEquipment:
                columnNumber = 7; break;
            case ComputerEquipment:
                columnNumber = 8; break;
            case MotorVehicles:
                columnNumber = 9; break;
        }
        try {
            WebElement element = BSA_DepriciationPerodPerAccountingPolicies_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_DepriciationPerodPerAccountingPolicies(RowNames_BSA_DepriciationPerodPerAccountingPolicies rowName, ColumnNames_BSA_DepriciationPerodPerAccountingPolicies columnName) {

        String text = "";
            int columnNumber = 0;
            int rowNumber = 0;

        switch (rowName) {
            case SinglePeriodOrMinimumOfRange:
                rowNumber = 2; break;
            case MaximumOfRange:
                rowNumber = 3 ; break;
            case ReducingBalanceRate:
                rowNumber = 5 ; break;
        }
        switch (columnName) {
            case FreeholdLandAndBuilding:
                columnNumber = 3; break;
            case LeaseholdLandAndBuilding:
                columnNumber = 4; break;
            case LeaseholdImprovements:
                columnNumber = 5; break;
            case PlantAndMachinery:
                columnNumber = 6; break;
            case FurnitureAndEquipment:
                columnNumber = 7; break;
            case ComputerEquipment:
                columnNumber = 8; break;
            case MotorVehicles:
                columnNumber = 9; break;
        }

        try {
            WebElement element = BSA_DepriciationPerodPerAccountingPolicies_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from row :" + rowName.toString() + " and column :" + columnName.toString() + " is :" + text);
        return text;
    }
}
