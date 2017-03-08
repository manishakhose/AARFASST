package com.FAAST.Test.balalnceSheetAssets_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_AmortisationPeriods extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_AmortisationPeriods_body ;

    public String getHeaderText_BSAAmortisationPeriod(){
        String text = getFormHeaderTextByParentElement(BSA_AmortisationPeriods_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_AmortisationPeriods {
       SinglePeriodOrMinimumOfRange , MaximumOfRange , ReducingBalanceRate
    }

    public enum ColumnNames_AmortisationPeriods {
        Software , Other
    }

    public void setValueInTableByRowNameAndColumnName_BSAAmortisationPeriod(RowNames_AmortisationPeriods rowName , ColumnNames_AmortisationPeriods columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case SinglePeriodOrMinimumOfRange:
                rowNumber = 3; break;
            case MaximumOfRange:
                rowNumber = 4; break;
            case ReducingBalanceRate:
                rowNumber = 6; break;

        }

        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4; break;

        }

        try {
            WebElement element = BSA_AmortisationPeriods_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSAAmortisationPeriod(RowNames_AmortisationPeriods rowName , ColumnNames_AmortisationPeriods columnName){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case SinglePeriodOrMinimumOfRange:
                rowNumber = 3; break;
            case MaximumOfRange:
                rowNumber = 4; break;
            case ReducingBalanceRate:
                rowNumber = 6; break;

        }
        switch (columnName){
            case Software:
                columnNumber = 3; break;
            case Other:
                columnNumber = 4; break;

        }
        try {
            WebElement element = BSA_AmortisationPeriods_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}



