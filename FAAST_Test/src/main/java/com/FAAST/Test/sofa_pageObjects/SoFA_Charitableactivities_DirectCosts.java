package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_Charitableactivities_DirectCosts extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement charitableActivitiesDirectCost_body;

    private String pageName= "Charitable Activities Direct Cost Page";


    public enum CharitableActivitiesDirectCostFieldsetNames {

        TeachingEducationalSupportStaff("Teaching and Educational Support Staff") , StaffExpenses("Staff Expenses") , OtherStaffCosts("Other Staff Costs"),
        Depreciation("Depreciation") , Amortisation("Amortisation") , Impairment("Impairment") , EducationalSupplies("Educational Supplies") ,
        ExaminationFees("Examination Fees") , StaffRelatedInsurance("Staff Related Insurance") , TechnologyCosts("Technology Costs") , EducationalConsultancy("Educational Consultancy") ,
        OtherDirectCosts("Other Direct Costs") , Total("Total");

        private final String stringValue;

        private CharitableActivitiesDirectCostFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(CharitableActivitiesDirectCostFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(charitableActivitiesDirectCost_body , fieldsetNames.toString() , inputValue);
    }

    public String getValueFromFieldByFieldsetNameInCharitableActivitiesDirectCost(CharitableActivitiesDirectCostFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(charitableActivitiesDirectCost_body , fieldsetName.toString());
    }

    public void clickedNextButtonInCharitableActivitiesDirectCostPage(){
        clickOnNextButtonByParentElement(charitableActivitiesDirectCost_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(charitableActivitiesDirectCost_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(charitableActivitiesDirectCost_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(charitableActivitiesDirectCost_body);
    }


}
