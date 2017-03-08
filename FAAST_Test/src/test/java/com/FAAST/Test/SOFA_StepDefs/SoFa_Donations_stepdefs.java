package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.*;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_CapitalGrants;
import com.FAAST.Test.sofa_pageObjects.SoFA_Donations;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFa_Donations_stepdefs extends Page {


    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_Donations donations = new SoFA_Donations();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SignInPage signInPage = new SignInPage();
    LoginPage loginPage = new LoginPage();


    @Given("^I am on SoFA section$")
    public void iAmOnSoFASection()   {
        soFA_baseClass.clickContinueButtonOnLoginSuccess();
        appNavPage.clickOnTabOption(AR_ApplicationNavigation.MainMenuNavigationOptions.SoFA);
    }

    @When("^I navigate to Donations section$")
    public void iNavigateToDonationsSection() {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.Donations);
        Assert.assertEquals(donations.getHeaderTextValueFromDonationsPage() , "Donations");
    }

    @Then("^I enter value in Donated Fixed Assets with \"([^\"]*)\"$")
    public void iEnterValueInDonatedFixedAssetsWith(String arg0)   {
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.DonatedFixedAssets , arg0);
    }

    @Then("^I enter value in Fixed Assets Donated with \"([^\"]*)\"$")
    public void iEnterValueInFixedAssetsDonatedWith(String arg0)   {
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.FixedAssetsDonatedByTheDfE_EFA , arg0);
    }

    @Then("^I enter value in Donated Intangible Assets with \"([^\"]*)\"$")
    public void iEnterValueInDonatedIntangibleAssetsWith(String arg0)   {
       donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.DonatedIntangibleAssets , arg0);
    }

    @Then("^I enter value in Other Donations Capital with \"([^\"]*)\"$")
    public void iEnterValueInOtherDonationsCapitalWith(String arg0)   {
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsCapital , arg0);
    }

    @Then("^I enter value in Other Donations Revenue \"([^\"]*)\"$")
    public void iEnterValueInOtherDonationsRevenue(String arg0)   {
        donations.setValueInInPutFieldByFieldsetNameIn_DonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.OtherDonationsRevenue , arg0);
    }

    @Then("^I see the Total Capital field is populated with \"([^\"]*)\"$")
    public void iSeeTheTotalCapitalFieldIsPopulatedWith(String arg0)   {
        Assert.assertEquals(arg0 , donations.getValueFromFieldByFieldsetInDonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.TotalCapital));

    }

    @And("^I see the Total Revenue field is populated with \"([^\"]*)\"$")
    public void iSeeTheTotalRevenueFieldIsPopulatedWith(String arg0)   {
        Assert.assertEquals(arg0 , donations.getValueFromFieldByFieldsetInDonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.TotalRevenue));
    }

    @And("^I see the Total field is populated with \"([^\"]*)\"$")
    public void iSeeTheTotalFieldIsPopulatedWith(String arg0)   {
        Assert.assertEquals(arg0 , donations.getValueFromFieldByFieldsetInDonationsPage(SoFA_Donations.DonationsPageFieldsetConstants.Total));

    }

    @And("^I click on Next Button I can see warning message under field names$")
    public void iClickOnNextButtonICanSeeWarningMessageUnderFieldNames() throws Throwable {
        new SoFA_CapitalGrants().getFormHeaderNameFoCapitalGranst();


    }
}
