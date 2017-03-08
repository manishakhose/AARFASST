package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_ExitPackages_NonCivilServiceSchemes extends SoFA_BaseClass {

    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement exitPackageNonCivilServicesSchemes_body;

    private String pageName= "Exit Package Non Civil Service Schemes Page";

    public void clickedNextButtonInExitPackageNonCivilServiceSchemes(){
        clickOnNextButtonByParentElement(exitPackageNonCivilServicesSchemes_body);
        logger.info("Next Button is now clicked in "+pageName);
    }
    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(exitPackageNonCivilServicesSchemes_body);
    }

    public enum DropDownValues {
        a_10000("< £10,000")                    , a_10001_25000("£10,001 - £25,000")    , a_25001_50000("£25,001 - £50,000")     ,
        a_50001_100000("£50,001 - £100,000")    , a_10001_150000("£100,001 - £150,000") , a_150001_200000("£150,001 - £200,000") ,
        a_200001_250000("£200,001 - £250,000")  , a_250001plus("£250,001+");

        private final String stringValue;

        private DropDownValues(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    //div/div/div/div[2]/div/div/div/div/select

    public void selectDropDownOptionByRowNumber(int rowNumber, String visibleText) {
        try {
            WebElement element = exitPackageNonCivilServicesSchemes_body.findElement(By.xpath(".//div/div/div/div["+rowNumber+"]/div/div/div/div/select"));
            selectElementByVisibleText(element, visibleText);
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Selected the dropdown for row number :" + rowNumber + " with a drop down value of : " + visibleText);
    }

    public enum ColumnNames{    NumberOfCompulsoryRedundancies  ,   ValueOfCompulsoryRedundanciesContractual    , ValueOfCompulsoryRedundanciesNonContractual ,
                                NumberOfOtherAgreedDepartures   ,   ValueOfOtherAgreedDepartureContractual      , ValueOfOtherAgreedDepartureNonContractual }


    public void setValueInTableByRowNumberAndColumnNameInExitPackages(ColumnNames columnName , int rowNumber , String inputValue){

        int columnNumber = 0 ;

        if(columnName == ColumnNames.NumberOfCompulsoryRedundancies){
            columnNumber = 2 ;
        }
        else if (columnName == ColumnNames.ValueOfCompulsoryRedundanciesContractual){
            columnNumber = 3 ;
        }
        else  if(columnName == ColumnNames.ValueOfCompulsoryRedundanciesNonContractual){
            columnNumber = 4 ;
        }
        else if (columnName == ColumnNames.NumberOfOtherAgreedDepartures){
            columnNumber = 5 ;
        }
        else if (columnName == ColumnNames.ValueOfOtherAgreedDepartureContractual){
            columnNumber = 6 ;
        }
        else if (columnName == ColumnNames.ValueOfOtherAgreedDepartureNonContractual){
            columnNumber = 7 ;
        }
        try {
            WebElement element = exitPackageNonCivilServicesSchemes_body.findElement(By.xpath(".//div/div/div/div["+rowNumber+"]/div["+columnNumber+"]/div/div/input"));
            setValueInElementInput(element , inputValue);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Inserted Value of :"+inputValue+" in Column Name :"+columnName.toString()+" and Row Value of :"+ rowNumber);
    }


    public String getValueFromBottomTotalsRowByColumnNameInExitPackages(ColumnNames columnName){
        int columnNumber = 0;
        String  textValue ="";

        if(columnName == ColumnNames.NumberOfCompulsoryRedundancies){
            columnNumber = 3 ;
        }
        else if (columnName == ColumnNames.ValueOfCompulsoryRedundanciesContractual){
            columnNumber = 4 ;
        }
        else  if(columnName == ColumnNames.ValueOfCompulsoryRedundanciesNonContractual){
            columnNumber = 5 ;
        }
        else if (columnName == ColumnNames.NumberOfOtherAgreedDepartures){
            columnNumber = 6 ;
        }
        else if (columnName == ColumnNames.ValueOfOtherAgreedDepartureContractual){
            columnNumber = 7 ;
        }
        else if (columnName == ColumnNames.ValueOfOtherAgreedDepartureNonContractual){
            columnNumber = 8 ;
        }

        try {
            WebElement element = exitPackageNonCivilServicesSchemes_body.findElement(By.xpath(".//div[@id='cd-global_global_g_9']//div[" + columnNumber + "]/div/input"));
            textValue = element.getAttribute("value");
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The value extracted from the Total for Column name :"+ columnName.toString()+ "is :"+ textValue);
        return textValue ;
    }
}
