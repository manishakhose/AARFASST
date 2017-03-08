package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_CapitalGrantsFREMRequirements;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;


public class SoFA_CapitalGrantsFREMRequirements_stepdefd {


    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_CapitalGrantsFREMRequirements capitalGrantsFREMRequirements = new SoFA_CapitalGrantsFREMRequirements();

    @And("^I have navigated to Capital Grants FREM section$")
    public void iHaveNavigatedToCapitalGrantsFREMSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.CapitalGrantFREMRequirement);
    }

    @And("^I enter in row Conditional Improvement funds with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowConditionalImprovementFundsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.ConditionImprovementFund , SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.ConditionImprovementFund, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Priority School Building Programme with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowPrioritySchoolBuildingProgrammeWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.PrioritySchoolBuildingProgramme, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.PrioritySchoolBuildingProgramme, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowAcademiesCapitalMaintenanceFundWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.AcademiesCapitalMaintenanceFund, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.AcademiesCapitalMaintenanceFund, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowDevolvedFormulaCapitalGrantWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.DevolvedFormulaCapitalGrant, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.DevolvedFormulaCapitalGrant, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowCentrallyManagedProgrammeFreeSchoolsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.CentrallyManagedProgrammeFreeSchool, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.CentrallyManagedProgrammeFreeSchool, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowContinuingCommitmentsBuildingSchoolsForTheFutureWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.ContinuingCommitmentsBuildingSchoolForFuture, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.ContinuingCommitmentsBuildingSchoolForFuture, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @And("^I enter in row Others with column Value Cash Received In Period \"([^\"]*)\" and Column Expendituire Recorded with \"([^\"]*)\"$")
    public void iEnterInRowOthersWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.Other, SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod,arg0);
        capitalGrantsFREMRequirements.setValueInTableBasedOnRowValueAndColumnValue_CapitalGrantFREMRequirement(SoFA_CapitalGrantsFREMRequirements.RowValue.Other, SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant,arg1);
    }

    @Then("^I see the Totals for column name Cash Received In Period is \"([^\"]*)\" and column name Expendituire Recorded with \"([^\"]*)\"$")
    public void iSeeTheTotalsForColumnNameCashReceivedInPeriodIsAndColumnNameExpendituireRecordedWith(String arg0, String arg1) throws Throwable {
        Assert.assertEquals(arg0,capitalGrantsFREMRequirements.getValueFromTotalRowByColumnNameInCapitalGrantsFREMRequirementsPage(SoFA_CapitalGrantsFREMRequirements.ColumnValue.CashReceivedInPeriod));
        Assert.assertEquals(arg1,capitalGrantsFREMRequirements.getValueFromTotalRowByColumnNameInCapitalGrantsFREMRequirementsPage(SoFA_CapitalGrantsFREMRequirements.ColumnValue.ExpenditureRecordedInTheAccountsFromThisGrant));
    }
}