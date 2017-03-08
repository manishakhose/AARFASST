package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_TangibleFixedAssets_AssetFinancing extends BSA_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    private WebElement BSA_TangibleFixedAssets_AssetFinancing_body ;

    public String getHeaderText_BSA_TangibleFixedAssets_AssetFinancing(){
        String text = getFormHeaderTextByParentElement(BSA_TangibleFixedAssets_AssetFinancing_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_TangibleFixedAssets_AssetFinancing {
        Owned , FinanceLeased , OnBalanceShetPFIContracts , ClosingNetBoksValue
    }

    public enum ColumnNames_BSA_TangibleFixedAssets_AssetFinancing {
        Software , Other  , Total
    }

    public void setValueInTableByRowNameAndColumnName_BSA_TangibleFixedAssets_AssetFinancing(RowNames_BSA_TangibleFixedAssets_AssetFinancing rowName , ColumnNames_BSA_TangibleFixedAssets_AssetFinancing columnName , String inputValue ){

        int rowNumber  = 0;
        int columnNumber = 0;

        switch (rowName){
            case Owned:
                rowNumber = 2; break;
            case FinanceLeased:
                rowNumber = 3; break;
            case OnBalanceShetPFIContracts:
                rowNumber = 4; break;
            case ClosingNetBoksValue:
                rowNumber = 5; break;
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
            WebElement element = BSA_TangibleFixedAssets_AssetFinancing_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            setValueInElementInput(element, inputValue);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    public String getValueFromTableByRowNameAndColumnName_BSA_TangibleFixedAssets_AssetFinancing(RowNames_BSA_TangibleFixedAssets_AssetFinancing rowName , ColumnNames_BSA_TangibleFixedAssets_AssetFinancing columnName ){
        String text = "";
        int columnNumber = 0;
        int rowNumber = 0 ;

        switch (rowName){
            case Owned:
                rowNumber = 2; break;
            case FinanceLeased:
                rowNumber = 3; break;
            case OnBalanceShetPFIContracts:
                rowNumber = 4; break;
            case ClosingNetBoksValue:
                rowNumber = 5; break;
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
            WebElement element = BSA_TangibleFixedAssets_AssetFinancing_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
            text = getElementTextWithRetry(element);
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted Value from ROW :"+rowName.toString()+" and column :"+columnName.toString()+" is :"+ text );
        return text;
    }
}



