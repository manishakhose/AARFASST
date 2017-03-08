package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_OtherRevenueGrants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_OtherRevenueGrantsPage_stepdefs {

    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_OtherRevenueGrants otherRevenueGrants = new SoFA_OtherRevenueGrants();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();


    @When("^I navigate to the Other Revenue Grants page$")
    public void iNavigateToTheOtherRevenueGrantsPage() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.OtherRevenueGrants);
    }

    @And("^I enter the value in Local Authority- Special Educational Needs with \"([^\"]*)\"$")
    public void iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String arg0) throws Throwable {
        otherRevenueGrants.setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.LocalAuthority_SpecialEducationalNeeds , arg0);
    }

    @And("^I enter the value in Local Authority-Early Years with \"([^\"]*)\"$")
    public void iEnterTheValueInLocalAuthorityEarlyYearsWith(String arg0) throws Throwable {
        otherRevenueGrants.setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.LocalAuthorityEarlyYears , arg0);
    }

    @And("^I enter the value in Other Local Authority Revenue Grants with \"([^\"]*)\"$")
    public void iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String arg0) throws Throwable {
        otherRevenueGrants.setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.OtherLocalAuthorityRevenueGrants , arg0);
    }

    @And("^I enter the value in Other Government Revenue Grants with \"([^\"]*)\"$")
    public void iEnterTheValueInOtherGovernmentRevenueGrantsWith(String arg0) throws Throwable {
        otherRevenueGrants.setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.OtherGovernmentRevenueGrants, arg0);
    }

    @And("^I enter the value in Non-Government-Revenue Grants with \"([^\"]*)\"$")
    public void iEnterTheValueInNonGovernmentRevenueGrantsWith(String arg0) throws Throwable {
        otherRevenueGrants.setValueInInputFieldByFieldsetNaneInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.NonGovernmentRevenueGrants , arg0);
    }

    @And("^I see the totals field is now populated with \"([^\"]*)\"$")
    public void iSeeTheTotalsFieldIsNowPopulatedWith(String arg0) throws Throwable {
        Assert.assertEquals(arg0,otherRevenueGrants.getValueFromFieldByFieldsetNameInOtherRevenueGrants(SoFA_OtherRevenueGrants.OtherRevenueGrantsFieldsetNames.Total));
        otherRevenueGrants.explicitWait(5000);
    }
}
