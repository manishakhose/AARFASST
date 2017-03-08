package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_OtherRevenueGrants extends SoFA_BaseClass {

    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement otherRevenueGrants_body;

    private String pageName= "Other Revenue Grants Page";

    public enum OtherRevenueGrantsFieldsetNames {

        LocalAuthority_SpecialEducationalNeeds("Local Authority- Special Educational Needs"), LocalAuthorityEarlyYears("Local Authority-Early Years") ,
        OtherLocalAuthorityRevenueGrants("Other Local Authority Revenue Grants") , OtherGovernmentRevenueGrants("Other Government Revenue Grants"),
        NonGovernmentRevenueGrants("Non-Government-Revenue Grants"), Total("Total");

        private final String stringValue;

        private OtherRevenueGrantsFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(OtherRevenueGrantsFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(otherRevenueGrants_body , fieldsetNames.toString() , inputValue);
    }

    public String getValueFromFieldByFieldsetNameInOtherRevenueGrants(OtherRevenueGrantsFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(otherRevenueGrants_body , fieldsetName.toString());
    }
    public void clickedNextButtonInOtherRevenueGrantsPage(){
        clickOnNextButtonByParentElement(otherRevenueGrants_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(otherRevenueGrants_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(otherRevenueGrants_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(otherRevenueGrants_body);
    }

}
