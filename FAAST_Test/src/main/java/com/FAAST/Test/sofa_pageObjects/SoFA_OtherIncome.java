package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_OtherIncome extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement otherIncome_body;

    private String pageName= "Other Income Page";


    public enum OtherIncomeFieldsetNames {

        Academies("Academies"), GovernmentSourcesNonGrant("Government Sources - Non Grant") ,
        NonGovernmentRevenue("Non-Government Revenue") , Total("Total");

        private final String stringValue;

        private OtherIncomeFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFieldsetNaneInOtherIncome(OtherIncomeFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(otherIncome_body , fieldsetNames.toString() , inputValue);
    }

    public String getValueFromFieldByFieldsetNameInOtherIncome(OtherIncomeFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(otherIncome_body , fieldsetName.toString());
    }

    public void clickedNextButtonInOtherIncomePage(){
        clickOnNextButtonByParentElement(otherIncome_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(otherIncome_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(otherIncome_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(otherIncome_body);
    }

}
