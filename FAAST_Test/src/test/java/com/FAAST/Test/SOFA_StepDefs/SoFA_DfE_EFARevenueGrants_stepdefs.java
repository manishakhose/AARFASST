package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_RevenueGrants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_DfE_EFARevenueGrants_stepdefs {

    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_RevenueGrants dfeRevenueGrants = new SoFA_RevenueGrants();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();

    @When("^I navigate to the DfE_EFA Revenue Grants Page$")
    public void iNavigateToTheDfE_EFARevenueGrantsPage()   {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.RevenueGrants);
    }

    @And("^I enter value in General Annual Grant with \"([^\"]*)\"$")
    public void iEnterValueInGeneralAnnualGrantWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.GeneralAnnualGrant , arg0);
    }

    @And("^I enter value in Rates Reclaim with \"([^\"]*)\"$")
    public void iEnterValueInRatesReclaimWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.RatesReclaim , arg0);
    }

    @And("^I enter value in Student Support Services with \"([^\"]*)\"$")
    public void iEnterValueInStudentSupportServicesWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.StudentSupportServices , arg0);
    }

    @And("^I enter value in Pupil Premium and Service Premium with \"([^\"]*)\"$")
    public void iEnterValueInPupilPremiumAndServicePremiumWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.PupilPremiumAndServicePremium , arg0);
    }

    @And("^I enter value in Pupil Number Adjustment with \"([^\"]*)\"$")
    public void iEnterValueInPupilNumberAdjustmentWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.PupilNumberAdjustment , arg0);
    }

    @And("^I enter value in Universal Infant Free School Meals with \"([^\"]*)\"$")
    public void iEnterValueInUniversalInfantFreeSchoolMealsWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.UniversalInfantFreeSchoolMeals , arg0);
    }

    @And("^I enter value in Insurance with \"([^\"]*)\"$")
    public void iEnterValueInInsuranceWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.Insurance , arg0);
    }

    @And("^I enter value in Sponsor Capacity Grant with \"([^\"]*)\"$")
    public void iEnterValueInSponsorCapacityGrantWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.SponsorCapacityGrant , arg0);
    }

    @And("^I enter value in Other with \"([^\"]*)\"$")
    public void iEnterValueInOtherWith(String arg0)   {
        dfeRevenueGrants.setValueInInoutFieldByFieldsetInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.Other , arg0);
    }

    @Then("^I can see the total populated in Total field is \"([^\"]*)\"$")
    public void iCanSeeTheTotalPopulatedInTotalFieldIs(String arg0)   {
        Assert.assertEquals(dfeRevenueGrants.getValueOfAttributByFieldsetNameInDFERevenueGrants(SoFA_RevenueGrants.DfeRevenueGrantsFieldsetNames.Total), arg0);
        dfeRevenueGrants.clickedNextButtonInRevenueGrantsPage();
    }
}
