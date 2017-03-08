package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFa_RelatedPartyTransactions_TrusteeRemuneration;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;


public class SoFA_RelatedPartyTransactions_stepdefs {

    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
       SoFa_RelatedPartyTransactions_TrusteeRemuneration relatesParty = new SoFa_RelatedPartyTransactions_TrusteeRemuneration();

    @Then("^I navigate to Related Party Transactions section$")
    public void iNavigateToRelatedPartyTransactionsSection() throws Throwable {
       soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.RelatedPartyTransactionsTrusteeRemuneration);
    }

    @And("^I select a value \"([^\"]*)\" from the drop down menu$")
    public void iSelectAValueFromTheDropDownMenu(String arg0) throws Throwable {
       relatesParty.selectDropDownvalueInTableByRowNumber(1, arg0);
    }

    @And("^I enter value in Number paid as Trustees with \"([^\"]*)\"$")
    public void iEnterValueInNumberPaidAsTrusteesWith(String arg0) throws Throwable {
       relatesParty.setValueInTableByRowNumberAndColumnName(1 , SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.NumberPaidAsTrustees , arg0);
    }

    @And("^I enter value in Number paid as staff with \"([^\"]*)\"$")
    public void iEnterValueInNumberPaidAsStaffWith(String arg0) throws Throwable {
       relatesParty.setValueInTableByRowNumberAndColumnName(1 , SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.NumberPaidAsStaff , arg0);
    }

    @Then("^I can see the Total column is \"([^\"]*)\"$")
    public void iCanSeeTheTotalColumnIs(String arg0) throws Throwable {
       Assert.assertEquals(arg0 , relatesParty.getValueFromColumnNameByRowNUmber(1 , SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.Total));
    }

    @Then("^I can see the Row named Total value for Paid as Trustees is \"([^\"]*)\"$")
    public void iCanSeeTheRowNamedTotalValueForPaidAsTrusteesIs(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , relatesParty.getValueFromTotalsByColumnName(SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.NumberPaidAsTrustees));
    }

    @Then("^I can see the Row named Total value for Paid as Staff is \"([^\"]*)\"$")
    public void iCanSeeTheRowNamedTotalValueForPaidAsStaffIs(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , relatesParty.getValueFromTotalsByColumnName(SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.NumberPaidAsStaff));
    }

    @Then("^I can see the Row named Total value for Column named Total os \"([^\"]*)\"$")
    public void iCanSeeTheRowNamedTotalValueForColumnNamedTotalOs(String arg0) throws Throwable {
        relatesParty.clickInAppBody();
        Assert.assertEquals(arg0 ,relatesParty.getValueFromTotalsByColumnName(SoFa_RelatedPartyTransactions_TrusteeRemuneration.ColumnNames.Total));
        relatesParty.explicitWait(5000);
    }
}
