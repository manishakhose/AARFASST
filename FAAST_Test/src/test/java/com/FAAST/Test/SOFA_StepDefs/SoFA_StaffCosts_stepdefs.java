package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_StaffCosts;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_StaffCosts_stepdefs {


    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_StaffCosts staffCosts = new SoFA_StaffCosts();


    @When("^I navigate to Staff Costs section$")
    public void iNavigateToStaffCostsSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.StaffCosts);
    }

    @And("^I enter value in row wages and salaries WS and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowWagesAndSalariesWSAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.WagesAndSalaries , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed, arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.WagesAndSalaries, SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff, arg0);
    }

    @Then("^I can see the Total Value for row  wages and salaries WS to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowWagesAndSalariesWSToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.WagesAndSalaries));
    }

    @And("^I enter value in row Social Security Costs SSC  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowSocialSecurityCostsSSCAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.SocailSecurityCost , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed ,arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.SocailSecurityCost , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , arg1);
    }

    @Then("^I can see the Total Value for row SSC to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowSSCToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0, staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.SocailSecurityCost));
    }

    @And("^I enter value in row Pension Costs PC  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowPensionCostsPCAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.PensionCost , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed , arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.PensionCost , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff, arg1);
    }

    @Then("^I can see the Total Value for row PC to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowPCToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.PensionCost));
    }

    @And("^I enter value in row Agency Staff Costs ASC  and TE with \"([^\"]*)\"$")
    public void iEnterValueInRowAgencyStaffCostsASCAndTEWith(String arg0) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.AgencyStaffCost , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , arg0);
    }

    @Then("^I can see the Total Value for row ASC to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowASCToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.AgencyStaffCost));
    }

    @And("^I enter value in row Redundancy payment RP  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowRedundancyPaymentRPAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.RedundancyPayments , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed, arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.RedundancyPayments , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , arg1);
    }

    @Then("^I can see the Total Value for row RP to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowRPToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0, staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.RedundancyPayments));
    }

    @And("^I enter value in row Severance Payments SP  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowSeverancePaymentsSPAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.SeverancePayments , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed , arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.SeverancePayments , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff, arg1);
    }

    @Then("^I can see the Total Value for row SP to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowSPToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0, staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.SeverancePayments));
    }

    @And("^I enter value in row Other Restructuring Costs ORC  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowOtherRestructuringCostsORCAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.OtherRestructuringCost , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed , arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.OtherRestructuringCost , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , arg1);
    }

    @Then("^I can see the Total Value for row ORC to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowORCToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.OtherRestructuringCost));
    }

    @And("^I enter value in row Less Recoveries of Staff Costs LR  and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowLessRecoveriesOfStaffCostsLRAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation , SoFA_StaffCosts.ColumnValue.PermanantlyEmployed , arg0);
        staffCosts.setValueInColumnInputFieldBasedOnRowValueInStaffCosts(SoFA_StaffCosts.RowValue.LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation , SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , arg1);
    }

    @Then("^I can see the Total Value for row LR to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalValueForRowLRToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.LessRecoveriesOfStaffCostsForEmployeesSecondedOutOfTheOrganisation));
    }

    @Then("^I can see the Final Total Column for Column PE to be \"([^\"]*)\"  Column TE to be \"([^\"]*)\" and column total to be \"([^\"]*)\"$")
    public void iCanSeeTheFinalTotalColumnForColumnPEToBeColumnTEToBeAndColumnTotalToBe(String arg0, String arg1, String arg2) throws Throwable {
        Assert.assertEquals(arg0, staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.PermanantlyEmployed , SoFA_StaffCosts.RowValue.Total));
        Assert.assertEquals(arg1,staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.TemporaryInterimStaff , SoFA_StaffCosts.RowValue.Total));
        Assert.assertEquals(arg2,staffCosts.getValueFromColumnBasedOnRowValueInStaffCosts(SoFA_StaffCosts.ColumnValue.Total , SoFA_StaffCosts.RowValue.Total));
        staffCosts.explicitWait(5000);
    }
}
