package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_CostOfRaisingFunds;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_CostOfRaisingFunds_stepdefs {


    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_CostOfRaisingFunds costOfRaisingFunds = new SoFA_CostOfRaisingFunds();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();

    @And("^I have navigated to Cost Of Raising Funds section$")
    public void iHaveNavigatedToCostOfRaisingFundsSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.CostOfRaisingFunds);
        Assert.assertEquals("Costs of Raising Funds",costOfRaisingFunds.getFormHeaderName());
    }

    @When("^I enter value in Pay Cost with \"([^\"]*)\"$")
    public void iEnterValueInPayCostWith(String arg0) throws Throwable {
        costOfRaisingFunds.setValueInInputFieldByFieldsetNameInCostOfRaisingFunds(SoFA_CostOfRaisingFunds.CostOfRaisingFundsFieldsetNames.PayCosta , arg0);
    }

    @When("^I enter value in Premise Costs with \"([^\"]*)\"$")
    public void iEnterValueInPremiseCostsWith(String arg0) throws Throwable {
        costOfRaisingFunds.setValueInInputFieldByFieldsetNameInCostOfRaisingFunds(SoFA_CostOfRaisingFunds.CostOfRaisingFundsFieldsetNames.PremiseCosts , arg0);
    }

    @When("^I enter value in Other \"([^\"]*)\"$")
    public void iEnterValueInOther(String arg0) throws Throwable {
        costOfRaisingFunds.setValueInInputFieldByFieldsetNameInCostOfRaisingFunds(SoFA_CostOfRaisingFunds.CostOfRaisingFundsFieldsetNames.Other , arg0);
    }

    @Then("^I see the value of Totals in Cost Of Raising Funds is \"([^\"]*)\"$")
    public void iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String arg0) throws Throwable {
        Assert.assertEquals(arg0, costOfRaisingFunds.getValueFromFieldByFieldsetNameInCostOfRaisingFunds(SoFA_CostOfRaisingFunds.CostOfRaisingFundsFieldsetNames.Total));
    }
}
