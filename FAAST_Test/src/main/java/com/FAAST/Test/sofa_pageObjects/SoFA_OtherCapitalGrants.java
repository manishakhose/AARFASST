package com.FAAST.Test.sofa_pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_OtherCapitalGrants extends SoFA_BaseClass {



    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement otherCapitalGrants_body;

    private String pageName= "Other Capital Grants Page";


    public enum OtherCpaitalGrantFieldsetNames {
        LocalAuthorityCapitalGrants("Local Authority Capital Grants"), OtherGovernmentCapitalGrants("Other Government Capital Grants") ,
        NonGovernmentCapitalGrants("Non-Government Capital Grants") , Total("Total");

        private final String stringValue;

        private OtherCpaitalGrantFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFiedsetNameInOtherCapitalGranstsPage(OtherCpaitalGrantFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(otherCapitalGrants_body ,fieldsetNames.toString() , inputValue );
    }


    public String getValueOfAttirbuteInOtherCapitalGrantsByFiedsetName(OtherCpaitalGrantFieldsetNames fieldsetNames){
       return  getValueOfAttributeFromFieldByParentElementAndFieldsetName(otherCapitalGrants_body, fieldsetNames.toString() );
    }

    public void clickedNextButtonInOtherCapitalGrantsPage(){
        clickOnNextButtonByParentElement(otherCapitalGrants_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(otherCapitalGrants_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(otherCapitalGrants_body);
    }

    public String getFormHeaderNameForOtherCapitalGrants(){
        return getFormHeaderTextByParentElement(otherCapitalGrants_body);
    }

    public boolean isValidationRulePresentAndDisplayedInOtherCapitalGrantsPageByRuleNumber(String ruleNUmber){
       return isValidationRulePresentAndDisplayedByParentElement(otherCapitalGrants_body , ruleNUmber);
    }
}
