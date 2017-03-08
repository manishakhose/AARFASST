package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_OtherCapitalGrants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_OtherCapitalGrants_stepdefs {

    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_OtherCapitalGrants otherCapitalGrants = new SoFA_OtherCapitalGrants();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();


    @When("^I navigate to Other Capital Grants page$")
    public void iNavigateToOtherCapitalGrantsPage() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.OthrCapitalGrants);
        Assert.assertEquals("Other Capital Grants",otherCapitalGrants.getFormHeaderNameForOtherCapitalGrants());
    }

    @And("^I enter value in Local Authority Capital Grant with \"([^\"]*)\"$")
    public void iEnterValueInLocalAuthorityCapitalGrantWith(String arg0) throws Throwable {
            otherCapitalGrants.setValueInInputFieldByFiedsetNameInOtherCapitalGranstsPage(SoFA_OtherCapitalGrants.OtherCpaitalGrantFieldsetNames.LocalAuthorityCapitalGrants , arg0);
    }

    @And("^I enter value in Other Government Capital Grants with \"([^\"]*)\"$")
    public void iEnterValueInOtherGovernmentCapitalGrantsWith(String arg0) throws Throwable {
            otherCapitalGrants.setValueInInputFieldByFiedsetNameInOtherCapitalGranstsPage(SoFA_OtherCapitalGrants.OtherCpaitalGrantFieldsetNames.OtherGovernmentCapitalGrants , arg0);
    }

    @And("^I enter value in Non-Government Capital Grants with \"([^\"]*)\"$")
    public void iEnterValueInNonGovernmentCapitalGrantsWith(String arg0) throws Throwable {
        otherCapitalGrants.setValueInInputFieldByFiedsetNameInOtherCapitalGranstsPage(SoFA_OtherCapitalGrants.OtherCpaitalGrantFieldsetNames.NonGovernmentCapitalGrants , arg0);
    }

    @Then("^I can see the value populated in the Total field to be \"([^\"]*)\"$")
    public void iCanSeeTheValuePopulatedInTheTotalFieldToBe(String arg0) throws Throwable {
        Assert.assertEquals(otherCapitalGrants.getValueOfAttirbuteInOtherCapitalGrantsByFiedsetName(SoFA_OtherCapitalGrants.OtherCpaitalGrantFieldsetNames.Total),arg0);
        otherCapitalGrants.explicitWait(5000);
    }
}
