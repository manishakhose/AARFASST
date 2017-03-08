package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_LossOfOfficePayments;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;


public class SoFA_LossOfOfficePayment_stepdefs {

    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_LossOfOfficePayments officePayments = new SoFA_LossOfOfficePayments();

    @When("^I have navigated to Loss Of Office Payments section$")
    public void iHaveNavigatedToLossOfOfficePaymentsSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.LossOfOfficePayments);
    }

    @When("^I enter value in ROW Loss of Office Payments - Serving at Year End and Column Accounting Office with a value of \"([^\"]*)\"$")
    public void iEnterValueInROWLossOfOfficePaymentsServingAtYearEndAndColumnAccountingOfficeWithAValueOf(String arg0) throws Throwable {
        officePayments.setValueInTableByRowNameAndColumnNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_ServingAtYearEnd , SoFA_LossOfOfficePayments.ColumnNames.AccountingOfficer , arg0);
    }

    @And("^I enter value in ROW Loss of Office Payments - Serving at Year End and Column Other Trustees with a value of \"([^\"]*)\"$")
    public void iEnterValueInROWLossOfOfficePaymentsServingAtYearEndAndColumnOtherTrusteesWithAValueOf(String arg0) throws Throwable {
        officePayments.setValueInTableByRowNameAndColumnNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_ServingAtYearEnd , SoFA_LossOfOfficePayments.ColumnNames.OtherTrustees,arg0);
    }

    @And("^I select value in ROW Loss of Office Payments - Serving at Year End with a drop down value of \"([^\"]*)\"$")
    public void iSelectValueInROWLossOfOfficePaymentsServingAtYearEndWithADropDownValueOf(String arg0) throws Throwable {
        officePayments.selectValueFromDropDownListByRowNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_ServingAtYearEnd ,arg0);
    }

    @When("^I enter value in ROW Loss of Office Payments - Left During the Year and Column Accounting Office with a value of \"([^\"]*)\"$")
    public void iEnterValueInROWLossOfOfficePaymentsLeftDuringTheYearAndColumnAccountingOfficeWithAValueOf(String arg0) throws Throwable {
        officePayments.setValueInTableByRowNameAndColumnNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_LeftDuringTheYear , SoFA_LossOfOfficePayments.ColumnNames.AccountingOfficer , arg0);
    }

    @And("^I enter value in ROW Loss of Office Payments - Left During the Year and Column Other Trustees with a value of \"([^\"]*)\"$")
    public void iEnterValueInROWLossOfOfficePaymentsLeftDuringTheYearAndColumnOtherTrusteesWithAValueOf(String arg0) throws Throwable {
        officePayments.setValueInTableByRowNameAndColumnNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_LeftDuringTheYear , SoFA_LossOfOfficePayments.ColumnNames.OtherTrustees , arg0);
    }

    @And("^I select value in ROW Loss of Loss of Office Payments - Left During the Year with a drop down value of \"([^\"]*)\"$")
    public void iSelectValueInROWLossOfLossOfOfficePaymentsLeftDuringTheYearWithADropDownValueOf(String arg0) throws Throwable {
        officePayments.selectValueFromDropDownListByRowNameInLossOfOfficePayments(SoFA_LossOfOfficePayments.RowNames.LossOfOfficePayments_LeftDuringTheYear , arg0);
        officePayments.clickedNextButtonInLossOfOfficePaymentsPage();
        officePayments.explicitWait(5000);
    }

}
