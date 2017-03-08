package com.FAAST.Test.ValidationsStepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_OtherCapitalGrants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class VAL1145S_stepdefs {

    SoFA_OtherCapitalGrants otherCpitalGrants = new SoFA_OtherCapitalGrants();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();

    @When("^I have reset the data for Validation Trigger$")
    public void iHaveResetTheDataForValidationTrigger() throws Throwable {
        otherCpitalGrants.setValueInInputFieldByFiedsetNameInOtherCapitalGranstsPage(SoFA_OtherCapitalGrants.OtherCpaitalGrantFieldsetNames.LocalAuthorityCapitalGrants , "0");
        otherCpitalGrants.clickedNextButtonInOtherCapitalGrantsPage();
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.OthrCapitalGrants);
        Assert.assertEquals("Other Capital Grants",otherCpitalGrants.getFormHeaderNameForOtherCapitalGrants());
    }

    @Then("^I click on next button$")
    public void iClickOnNextButton() throws Throwable {
        otherCpitalGrants.clickedNextButtonInOtherCapitalGrantsPage();
    }

    @And("^I see the validation Rule Number \"([^\"]*)\" has been triggred$")
    public void iSeeTheValidationRuleNumberHasBeenTriggred(String arg0) throws Throwable {
        otherCpitalGrants.isValidationRulePresentAndDisplayedInOtherCapitalGrantsPageByRuleNumber(arg0);
    }
}
