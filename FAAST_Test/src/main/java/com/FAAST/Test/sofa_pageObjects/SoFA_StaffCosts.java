package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_StaffCosts extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement staffCosts_body;

    private String pageName= "Staff Costs Page";

    public void clickedNextButtonInStaffCostsPage(){
        clickOnNextButtonByParentElement(staffCosts_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(staffCosts_body);
    }

    public enum RowValue{WagesAndSalaries, SocailSecurityCost , PensionCost , AgencyStaffCost ,RedundancyPayments , SeverancePayments , OtherRestructuringCost , LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation,Total

    }

    public enum ColumnValue{PermanantlyEmployed , TemporaryInterimStaff , Total

    }

    public void setValueInColumnInputFieldBasedOnRowValueInStaffCosts(RowValue rowValue , ColumnValue columnValue , String inputValue){

        int incremental = 0 ;
        WebElement valElement = staffCosts_body.findElement(By.xpath(".//div[@class='control-item opm-control-item-text-area']//div/textarea"));
        if(isElementPresentAndDisplayed(valElement)){
           incremental =1 ;
        }


        int rowNumber= 0 ; int columnNumber = 0 ;

        if(rowValue == RowValue.WagesAndSalaries){
            rowNumber = 1+incremental;
        } else if (rowValue == RowValue.SocailSecurityCost){
            rowNumber = 2+incremental ;
        } else if (rowValue == RowValue.PensionCost){
            rowNumber = 3+incremental ;
        } else if (rowValue == RowValue.AgencyStaffCost){
            rowNumber = 4+incremental ;
        } else if (rowValue == RowValue.RedundancyPayments){
            rowNumber = 5+incremental ;
        } else if (rowValue == RowValue.SeverancePayments){
            rowNumber = 6+incremental ;
        } else if (rowValue == RowValue.OtherRestructuringCost){
            rowNumber = 7+incremental ;
        } else if (rowValue == RowValue.LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation){
            rowNumber = 8+incremental ;
        } else if (rowValue == RowValue.Total){
            rowNumber = 9+incremental ;
        }

        if(columnValue == ColumnValue.PermanantlyEmployed){
            columnNumber = 3 ;
        } else if (columnValue == ColumnValue.TemporaryInterimStaff){
            columnNumber = 4 ;
        }
        try {
            WebElement element = staffCosts_body.findElement(By.xpath(".//div["+rowNumber+"]/div["+columnNumber+"]/div/input"));
            setValueInElementInput(element, inputValue);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Value set in Row Name :"+ rowValue+ " and Column Name :"+ columnValue.toString()+" is :"+ inputValue);

        //div[@class='opm-container']//div/div/br/following-sibling::text()[contains(.,'Teachers')]/../../../div/div/label[contains(.,'Temporary/Interim Staff ')]/../../div/input
    }

    public String getValueFromColumnBasedOnRowValueInStaffCosts(ColumnValue columnValue , RowValue rowValue){


        int incremental = 0 ;
        WebElement valElement = staffCosts_body.findElement(By.xpath(".//div[@class='control-item opm-control-item-text-area']//div/textarea"));
        if(isElementPresentAndDisplayed(valElement)){
            incremental =1 ;
        }

        String extractedValue = "";
        int rowNumber= 0 ; int columnNumber = 0 ;

        if(rowValue == RowValue.WagesAndSalaries){
            rowNumber = 1+incremental;
        }
        else if (rowValue == RowValue.SocailSecurityCost){
            rowNumber = 2+incremental ;
        } else if (rowValue == RowValue.PensionCost){
            rowNumber = 3+incremental ;
        } else if (rowValue == RowValue.AgencyStaffCost){
            rowNumber = 4+incremental ;
        } else if (rowValue == RowValue.RedundancyPayments){
            rowNumber = 5+incremental ;
        } else if (rowValue == RowValue.SeverancePayments){
            rowNumber = 6+incremental ;
        } else if (rowValue == RowValue.OtherRestructuringCost){
            rowNumber = 7+incremental ;
        } else if (rowValue == RowValue.LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation){
            rowNumber = 8+incremental ;
        } else if (rowValue == RowValue.Total){
            rowNumber = 9+incremental ;
        }

        if (columnValue == ColumnValue.PermanantlyEmployed){
        columnNumber = 3 ;
        } else if (columnValue == ColumnValue.TemporaryInterimStaff){
            columnNumber = 4 ;
        } else if (columnValue == ColumnValue.Total){
            columnNumber = 5 ;
        }
        try {
            WebElement element = staffCosts_body.findElement(By.xpath(".//div["+rowNumber+"]/div["+columnNumber+"]/div/input"));
            //extractedValue = getElementTextWithRetry(element);
            extractedValue = element.getAttribute("value");

        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The extracted value from Row Name :"+rowValue.toString()+"  and Column Name : "+columnValue.toString()+" is :"+ extractedValue);
        return extractedValue;
    }
}
