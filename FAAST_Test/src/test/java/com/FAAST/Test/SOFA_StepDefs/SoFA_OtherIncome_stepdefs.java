package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_OtherIncome;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_OtherIncome_stepdefs {


    AR_ApplicationNavigation appNavPage = new AR_ApplicationNavigation();
    SoFA_OtherIncome otherIncome = new SoFA_OtherIncome();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();

    @When("^I navigate to the Other Income Page$")
    public void iNavigateToTheOtherIncomePage() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.OtherIncome);
        Assert.assertEquals(otherIncome.getFormHeaderName() ,"Other Income");
    }

    @And("^I enter the value in Academies with \"([^\"]*)\"$")
    public void iEnterTheValueInAcademiesWith(String arg0) throws Throwable {
        otherIncome.setValueInInputFieldByFieldsetNaneInOtherIncome(SoFA_OtherIncome.OtherIncomeFieldsetNames.Academies , arg0);
    }

    @And("^I enter the value in Government Sources - Non Grant with \"([^\"]*)\"$")
    public void iEnterTheValueInGovernmentSourcesNonGrantWith(String arg0) throws Throwable {
        otherIncome.setValueInInputFieldByFieldsetNaneInOtherIncome(SoFA_OtherIncome.OtherIncomeFieldsetNames.GovernmentSourcesNonGrant, arg0);
    }

    @And("^I enter the value inNon-Government Revenue with \"([^\"]*)\"$")
    public void iEnterTheValueInNonGovernmentRevenueWith(String arg0) throws Throwable {
        otherIncome.setValueInInputFieldByFieldsetNaneInOtherIncome(SoFA_OtherIncome.OtherIncomeFieldsetNames.NonGovernmentRevenue , arg0);
    }

    @Then("^I can see the Total field is now \"([^\"]*)\"$")
    public void iCanSeeTheTotalFieldIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0,otherIncome.getValueFromFieldByFieldsetNameInOtherIncome(SoFA_OtherIncome.OtherIncomeFieldsetNames.Total));
        otherIncome.explicitWait(5000);
    }
}
