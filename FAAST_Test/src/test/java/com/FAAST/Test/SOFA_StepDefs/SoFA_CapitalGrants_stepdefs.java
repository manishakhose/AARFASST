package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_CapitalGrants;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_CapitalGrants_stepdefs {


    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_CapitalGrants capitalGrants = new SoFA_CapitalGrants();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();


    @Given("^I have navigated to SOFA$")
    public void iHaveNavigatedToSOFA()  {
        soFA_baseClass.clickContinueButtonOnLoginSuccess();
        appNavPage.clickOnTabOption(AR_ApplicationNavigation.MainMenuNavigationOptions.SoFA);

    }

    @And("^I have navigated to Capital Grants section$")
    public void iHaveNavigatedToCapitalGrantsSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.CapitalGrants);
        Assert.assertEquals(capitalGrants.getFormHeaderNameFoCapitalGranst() , "Capital Grant (DfE/EFA)");
    }

    @When("^I enter value in Conditional Improvement Fund with \"([^\"]*)\"$")
    public void iEnterValueInConditionalImprovementFundWith(String arg0) throws Throwable {
        capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Condition Improvement Fund" , arg0);
    }

    @When("^I enter value in Priority School Building Programme with \"([^\"]*)\"$")
    public void iEnterValueInPrioritySchoolBuildingProgrammeWith(String arg0) throws Throwable {
        capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Priority School Building Programme" , arg0);

    }

    @When("^I enter value in Academies Capital Maintenance Fund with \"([^\"]*)\"$")
    public void iEnterValueInAcademiesCapitalMaintenanceFundWith(String arg0) throws Throwable {
        capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Academies Capital Maintenance Fund" , arg0);
    }

    @When("^I enter value in Devolved Formula Capital Grant with \"([^\"]*)\"$")
    public void iEnterValueInDevolvedFormulaCapitalGrantWith(String arg0) throws Throwable {
        capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Devolved Formula Capital Grant" , arg0);
    }

    @When("^I enter value in Centrally Managed Programme Free School with \"([^\"]*)\"$")
    public void iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String arg0) throws Throwable {
        capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Centrally Managed Programme - Free Schools" , arg0);
    }

    @When("^I enter value in Continuing Commitments Building School for the Future with  \"([^\"]*)\"$")
    public void iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String arg0) throws Throwable {
       capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Continuing Commitments - Building Schools for the Future" , arg0);
    }

    @And("^I enter value in Other Values with \"([^\"]*)\" correct$")
    public void iEnterValueInOtherValuesWithCorrect(String arg0) throws Throwable {
       capitalGrants.setInputFieldValueByFieldSetNameInCapitalGrantsPage("Other" , arg0);
    }

    @Then("^I see the value of Totals is \"([^\"]*)\"$")
    public void iSeeTheValueOfTotalsIs(String arg0) throws Throwable {
        Assert.assertEquals(Integer.parseInt(capitalGrants.getValueOfAttributeFromFieldByFieldsetNameInCapitalGrantPage("Totals")), Integer.parseInt(arg0));
    }
}
