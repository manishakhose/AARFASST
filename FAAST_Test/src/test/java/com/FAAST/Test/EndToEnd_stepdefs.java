package com.FAAST.Test;

import com.FAAST.Test.SOFA_StepDefs.SoFa_Donations_stepdefs;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;

public class EndToEnd_stepdefs {

    @And("^I fill in Donations Section$")
    public void iFillInDonationsSection() throws Throwable {
        SoFa_Donations_stepdefs donations = new SoFa_Donations_stepdefs();
        donations.iNavigateToDonationsSection();
        donations.iEnterValueInDonatedFixedAssetsWith("2");
        donations.iEnterValueInFixedAssetsDonatedWith("2");
        donations.iEnterValueInDonatedIntangibleAssetsWith("2");
        donations.iEnterValueInOtherDonationsCapitalWith("2");
        donations.iEnterValueInOtherDonationsRevenue("2");
        donations.iSeeTheTotalCapitalFieldIsPopulatedWith("");
        donations.iSeeTheTotalRevenueFieldIsPopulatedWith("");
        donations.iSeeTheTotalFieldIsPopulatedWith("");
        donations.iClickOnNextButtonICanSeeWarningMessageUnderFieldNames();
    }

    @And("^I fill in Capital Grants Page$")
    public void iFillInCapitalGrantsPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Capital Grants FREM Page$")
    public void iFillInCapitalGrantsFREMPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Other Cpital Grants$")
    public void iFillInOtherCpitalGrants() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Revenue Grants Page$")
    public void iFillInRevenueGrantsPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Other Income Page$")
    public void iFillInOtherIncomePage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Cost of Raising funds$")
    public void iFillInCostOfRaisingFunds() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Charitable Activities - Direct Costs$")
    public void iFillInCharitableActivitiesDirectCosts() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Charitable Activities - Support Costs$")
    public void iFillInCharitableActivitiesSupportCosts() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Staff Costs$")
    public void iFillInStaffCosts() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Average Staff Numbers$")
    public void iFillInAverageStaffNumbers() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Numbers of Employees Whose Emoluments Exceed £(\\d+)k$")
    public void iFillInNumbersOfEmployeesWhoseEmolumentsExceed£K(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Exit packages - Non Civil Service Schemes$")
    public void iFillInExitPackagesNonCivilServiceSchemes() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Loss of Office Payments$")
    public void iFillInLossOfOfficePayments() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I fill in Related party transactions: trustee remuneration$")
    public void iFillInRelatedPartyTransactionsTrusteeRemuneration() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
