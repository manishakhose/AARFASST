package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_AverageStaffNumbers extends SoFA_BaseClass {


    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement averageStaffNumbers_body ;

    @FindBy(how=How.XPATH , using = "//div[@class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-front alert ui-dialog-buttons ui-draggable ui-resizable']")
    WebElement helpDialog_body;

    private String pageName = "Average Staff Numbers" ;

    public enum RowNames{Teachers, Management, AdministrationSupport, Total_First, PermanentEmployees_StaffWhoServesAsTrustees, PermanentEmployees_AllOtherStaff, PermanentEmployees_Total , StaffSickness_DaysLossToSickness}

    public enum ColumnNames{PermanentlyEmployed, TemporaryOrInterimStaff, Total}

    public void clickNextButtonInAverageStaffNumbersPage(){
        clickOnNextButtonByParentElement(averageStaffNumbers_body);
        logger.info("Clicked the next button in "+pageName);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(averageStaffNumbers_body);
    }



    public void setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(RowNames rowName , ColumnNames columnName , String inputValue){

        int rowNumber = 0 ;  int columnNumber = 0 ;

        if(rowName == RowNames.Teachers){
            rowNumber = 2 ;
        } else if (rowName == RowNames.Management){
            rowNumber = 3 ;
        } else if (rowName == RowNames.AdministrationSupport){
            rowNumber = 4 ;
        } else if (rowName == RowNames.PermanentEmployees_StaffWhoServesAsTrustees){
            rowNumber = 7 ;
        } else if (rowName == RowNames.PermanentEmployees_AllOtherStaff){
            rowNumber = 8 ;
        } else if (rowName == RowNames.StaffSickness_DaysLossToSickness){
            rowNumber = 11 ;
        }

        if (columnName == ColumnNames.PermanentlyEmployed){
            columnNumber = 3 ;
        } else if (columnName == ColumnNames.TemporaryOrInterimStaff){
            columnNumber = 4 ;
        }

        try {
            WebElement element  = averageStaffNumbers_body.findElement(By.xpath(".//div["+rowNumber+"]/div["+columnNumber+"]/div/input"));
            setValueInElementInput(element , inputValue);

        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Value inserted in row name :"+rowName.toString()+" and column name "+ columnName.toString()+" is :"+inputValue);
    }

    public String getValueFromTableByRowNameAndColumnName(RowNames rowName , ColumnNames columnName){

        String extractedValue = "" ;
        int rowNumber = 0 ;  int columnNumber = 0 ;

        if(rowName == RowNames.Teachers){
            rowNumber = 2 ;
        } else if (rowName == RowNames.Management){
            rowNumber = 3 ;
        } else if (rowName == RowNames.AdministrationSupport){
            rowNumber = 4 ;
        } else if (rowName == RowNames.Total_First){
            rowNumber = 5 ;
        } else if (rowName == RowNames.PermanentEmployees_StaffWhoServesAsTrustees){
            rowNumber = 7 ;
        } else if (rowName == RowNames.PermanentEmployees_AllOtherStaff){
            rowNumber = 8 ;
        } else if (rowName == RowNames.PermanentEmployees_Total){
            rowNumber = 9 ;
        } else if (rowName == RowNames.StaffSickness_DaysLossToSickness){
            rowNumber = 11 ;
        }

        if (columnName == ColumnNames.PermanentlyEmployed){
            columnNumber = 3 ;
        } else if (columnName == ColumnNames.TemporaryOrInterimStaff){
            columnNumber = 4 ;
        } else if (columnName == ColumnNames.Total){
            columnNumber = 5 ;
        }
        try {
            WebElement element = averageStaffNumbers_body.findElement(By.xpath(".//div[" + rowNumber + "]/div[" + columnNumber + "]/div/input"));
            extractedValue = element.getAttribute("value");
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Extracted text from Row Name :"+ rowName.toString()+" Column Name :"+ columnName.toString()+ " is "+ extractedValue);
        return extractedValue ;
    }
}
