package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_RevenueGrants extends SoFA_BaseClass {

    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement revenueGrants_body;

    private String pageName= "Revenue Grants Page";

    public void clickedNextButtonInRevenueGrantsPage(){
        clickOnNextButtonByParentElement(revenueGrants_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public enum DfeRevenueGrantsFieldsetNames {

        GeneralAnnualGrant("General Annual Grant (total allocation per statement) excluding Student Support Services"), RatesReclaim("Rates Reclaim") ,
        StudentSupportServices("Student Support Services (per statement) (also known as Academy Post 16 Bursary Funding)") , PupilPremiumAndServicePremium("Pupil Premium and Service Premium"),
        PupilNumberAdjustment("Pupil Number Adjustment (PNA)") ,UniversalInfantFreeSchoolMeals("Universal Infant Free School Meals") , Insurance("Insurance") ,
        SponsorCapacityGrant("Sponsor Capacity Grant") , Other("Other") , Total("Total");

        private final String stringValue;

        private DfeRevenueGrantsFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public String getValueOfAttributByFieldsetNameInDFERevenueGrants(DfeRevenueGrantsFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(revenueGrants_body , fieldsetName.toString());
    }


    public void setValueInInoutFieldByFieldsetInDFERevenueGrants(DfeRevenueGrantsFieldsetNames fieldsetName , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(revenueGrants_body ,fieldsetName.toString(),inputValue);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(revenueGrants_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(revenueGrants_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(revenueGrants_body);
    }

}
