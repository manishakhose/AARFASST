package com.FAAST.Test.ValidationsStepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_Donations;
import com.FAAST.Test.summay_pageObjects.Summary_BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;


public class VAL1031S_stepdefs {

    AR_ApplicationNavigation mainApp = new AR_ApplicationNavigation();
    SoFA_Donations donations = new SoFA_Donations();
    Summary_BaseClass summaryBase = new Summary_BaseClass();
    SoFA_BaseClass sofa_BaseClass = new SoFA_BaseClass();

    @And("^I click the Next Button in Donation$")
    public void iClickTheNextButtonInDonation() throws Throwable {
        donations.clickOnNextButton();
        donations.explicitWait(1000);

    }

    @Then("^I must see Validation Rule \"([^\"]*)\" IS Triggered$")
    public void iMustSeeValidationRuleISTriggered(String arg0) throws Throwable {
        Assert.assertTrue(donations.isValidationRulePresentAndDisplayedInDonationsPageByValRuleNumber(arg0));
    }

    @Then("^I must see Validation Rule \"([^\"]*)\" is NOT - Triggered$")
    public void iMustSeeValidationRuleIsNOTTriggered(String arg0) throws Throwable {
        Assert.assertFalse(donations.isValidationRulePresentAndDisplayedInDonationsPageByValRuleNumber(arg0));
    }


    @Then("^I must see the rule \"([^\"]*)\" flagged up in Summary Page$")
    public void iMustSeeTheRuleFlaggedUpInSummaryPage(String arg0) throws Throwable {
        donations.clickOnNextButton();
        mainApp.clickOnTabOption(AR_ApplicationNavigation.MainMenuNavigationOptions.Summary);
        Assert.assertTrue(summaryBase.isValidationRulePresentAndListedInSummaryPage(arg0));
        mainApp.clickOnTabOption(AR_ApplicationNavigation.MainMenuNavigationOptions.SoFA);
        sofa_BaseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.Donations);
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsCapital ,"0");
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsRevenue, "0");
        donations.setTextInValidationExplainationBoxFieldInDonationsPage("");
        donations.clickOnNextButton();

    }

    @Then("^I must NOT see the rule \"([^\"]*)\" flagged up in Summary Page$")
    public void iMustNOTSeeTheRuleFlaggedUpInSummaryPage(String arg0) throws Throwable {
        donations.clickOnNextButton();
        mainApp.clickOnTabOption(AR_ApplicationNavigation.MainMenuNavigationOptions.Summary);
        Assert.assertFalse(summaryBase.isValidationRulePresentAndListedInSummaryPage(arg0));
    }

    @Then("^I enter explanation of Validation in the provided box$")
    public void iEnterExplanationOfValidationInTheProvidedBox() throws Throwable {
        donations.setTextInValidationExplainationBoxFieldInDonationsPage("This Validation has been Triggered");
        donations.clickOnNextButton();
    }

    @Then("^I reset the Data for Validation to Trigger$")
    public void iResetTheDataForValidationToTrigger() throws Throwable {

        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsCapital ,"0");
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsRevenue, "0");
        donations.setTextInValidationExplainationBoxFieldInDonationsPage("");
        donations.clickOnNextButton();
        sofa_BaseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.Donations);
    }
}
