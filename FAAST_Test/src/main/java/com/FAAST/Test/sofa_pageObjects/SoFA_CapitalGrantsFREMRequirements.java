package com.FAAST.Test.sofa_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_CapitalGrantsFREMRequirements extends SoFA_BaseClass {



    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement capitalGrantsFREMRequirements_body;

    private String pageName= "Capital Grants FERM Requirements ";

    public void clickedNextButtonInCapitalGrantsFREMRequiremtnsPage(){
        clickOnNextButtonByParentElement(capitalGrantsFREMRequirements_body);
        logger.info("\nNext Button is now clicked in "+pageName);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(capitalGrantsFREMRequirements_body);
    }


    public enum RowValue{ConditionImprovementFund, PrioritySchoolBuildingProgramme,AcademiesCapitalMaintenanceFund,DevolvedFormulaCapitalGrant ,CentrallyManagedProgrammeFreeSchool, ContinuingCommitmentsBuildingSchoolForFuture,Other,Total}

    public enum ColumnValue{GrantsValueInAccounts , CashReceivedInPeriod  ,ExpenditureRecordedInTheAccountsFromThisGrant}

    public void setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement( RowValue rowValue ,  ColumnValue columnValue , String inputValue){

        int rowNumber = 0 ;
        int columnNumber= 0 ;

        if(rowValue == RowValue.ConditionImprovementFund){
            rowNumber= 1 ;
        }
        else if (rowValue == RowValue.PrioritySchoolBuildingProgramme){
            rowNumber = 2 ;
        }
        else if (rowValue==RowValue.AcademiesCapitalMaintenanceFund){
            rowNumber = 3;
        }
        else if (rowValue == RowValue.DevolvedFormulaCapitalGrant){
            rowNumber=4 ;
        }
        else if (rowValue == RowValue.CentrallyManagedProgrammeFreeSchool){
            rowNumber = 5 ;
        }
        else if (rowValue == RowValue.ContinuingCommitmentsBuildingSchoolForFuture){
            rowNumber = 6 ;
        }
        else if (rowValue == RowValue.Other){
            rowNumber = 7 ;
        }
        else if (rowValue == RowValue.Total){
            rowNumber = 8;
        }
        if(columnValue == ColumnValue.GrantsValueInAccounts){
            columnNumber = 3;
        }
        else if (columnValue == ColumnValue.CashReceivedInPeriod){
            columnNumber = 4 ;
        }
        else if (columnValue == ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant){
            columnNumber = 5 ;
        }

        try {
            WebElement element = capitalGrantsFREMRequirements_body.findElement(By.xpath(".//div[" +rowNumber+ "]/div[" + columnNumber + "]/div/input"));
            setValueInElementInput(element , inputValue);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }
        logger.info("\nSet Value of: ' "+inputValue+" ' in row name "+ rowValue.toString()+ " and column name "+columnValue.toString());
    }


    public String getValueFromTotalRowByColumnNameInCapitalGrantsFREMRequirementsPage(ColumnValue columnName){
        String extractedValue = "";
        int value = 0 ;
        int columnNumber = 0 ;

        if (columnName == ColumnValue.CashReceivedInPeriod){
            columnNumber = 4 ;
        }
        else if (columnName == ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant){
            columnNumber = 5;
        }

        try {
            WebElement element = capitalGrantsFREMRequirements_body.findElement(By.xpath(".//div[8]/div[" + columnNumber + "]/div/input"));
            extractedValue = element.getAttribute("value");

        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch( Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("\nThe value of Total extracted from column name :"+columnName.toString()+" is :"+value);
        return extractedValue ;
    }
}
