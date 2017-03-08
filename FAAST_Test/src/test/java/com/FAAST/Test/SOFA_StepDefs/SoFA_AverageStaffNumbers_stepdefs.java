package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_AverageStaffNumbers;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SoFA_AverageStaffNumbers_stepdefs {


    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_AverageStaffNumbers averageStaffNumbers = new SoFA_AverageStaffNumbers();

    @When("^I navigate to Average Staff Numbers$")
    public void iNavigateToAverageStaffNumbers()  {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.AverageStaffNumber_FullTimeEquivalent);
    }

    @And("^I enter value in row Teachers and column PE with \"([^\"]*)\" and column TIS with \"([^\"]*)\"$")
    public void iEnterValueInRowTeachersAndColumnPEWithAndColumnTISWith(String arg0, String arg1) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.Teachers , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed , arg0);
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.Teachers , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff , arg1);
    }

    @Then("^I must see the Total Value for row  Teachers to be \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForRowTeachersToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.Teachers , SoFA_AverageStaffNumbers.ColumnNames.Total));
    }

    @And("^I enter value in row Management and column PE with \"([^\"]*)\" and column TIS with \"([^\"]*)\"$")
    public void iEnterValueInRowManagementAndColumnPEWithAndColumnTISWith(String arg0, String arg1) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.Management , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed , arg0);
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.Management , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff , arg1);
    }

    @Then("^I must see the Total Value for row Management to be \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForRowManagementToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.Management , SoFA_AverageStaffNumbers.ColumnNames.Total));
    }

    @And("^I enter value in row Administration and support and column PE with \"([^\"]*)\" and column TE with \"([^\"]*)\"$")
    public void iEnterValueInRowAdministrationAndSupportAndColumnPEWithAndColumnTEWith(String arg0, String arg1) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.AdministrationSupport , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed , arg0);
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.AdministrationSupport , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff , arg1);
    }

    @Then("^I must see the Total Value for row Administration and Support to be \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForRowAdministrationAndSupportToBe(String arg0) throws Throwable {
        averageStaffNumbers.explicitWait(1000);
        Assert.assertEquals(arg0,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.AdministrationSupport , SoFA_AverageStaffNumbers.ColumnNames.Total));
    }

    @And("^I must see the Total value for column PE with \"([^\"]*)\" and TIS with \"([^\"]*)\" and Total with \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForColumnPEWithAndTISWithAndTotalWith(String arg0, String arg1, String arg2) throws Throwable {
        Assert.assertEquals(arg0,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.Total_First , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed));
        Assert.assertEquals(arg1,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.Total_First , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff));
        Assert.assertEquals(arg2,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.Total_First , SoFA_AverageStaffNumbers.ColumnNames.Total));
    }

    @And("^I enter value in row Staff who Serve as Trustees and column Male with \"([^\"]*)\" and column Female  with \"([^\"]*)\"$")
    public void iEnterValueInRowStaffWhoServeAsTrusteesAndColumnMaleWithAndColumnFemaleWith(String arg0, String arg1) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_StaffWhoServesAsTrustees , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed , arg0);
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_StaffWhoServesAsTrustees, SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff,arg1);
    }

    @Then("^I must see the Total value for row Staff who serve as Trustees to be \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForRowStaffWhoServeAsTrusteesToBe(String arg0) throws Throwable {
        averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_StaffWhoServesAsTrustees , SoFA_AverageStaffNumbers.ColumnNames.Total);
    }

    @And("^I enter value in row All Other Staff and column Male with \"([^\"]*)\" and column Female with \"([^\"]*)\"$")
    public void iEnterValueInRowAllOtherStaffAndColumnMaleWithAndColumnFemaleWith(String arg0, String arg1) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_AllOtherStaff , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed, arg0);
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_AllOtherStaff , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff,arg1);
    }

    @Then("^I must see the Total Value for row All other Staff to be \"([^\"]*)\"$")
    public void iMustSeeTheTotalValueForRowAllOtherStaffToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_AllOtherStaff , SoFA_AverageStaffNumbers.ColumnNames.Total));    }

    @And("^I must see Total value of column Male with \"([^\"]*)\" and column Female with \"([^\"]*)\" and column total with \"([^\"]*)\"$")
    public void iMustSeeTotalValueOfColumnMaleWithAndColumnFemaleWithAndColumnTotalWith(String arg0, String arg1, String arg2) throws Throwable {
        Assert.assertEquals(arg0 ,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_Total , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed));
        Assert.assertEquals(arg1 ,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_Total , SoFA_AverageStaffNumbers.ColumnNames.TemporaryOrInterimStaff));
        Assert.assertEquals(arg2 ,averageStaffNumbers.getValueFromTableByRowNameAndColumnName(SoFA_AverageStaffNumbers.RowNames.PermanentEmployees_Total , SoFA_AverageStaffNumbers.ColumnNames.Total));

    }

    @And("^I enter  value in row Days lost to Sickness with \"([^\"]*)\"$")
    public void iEnterValueInRowDaysLostToSicknessWith(String arg0) throws Throwable {
        averageStaffNumbers.setValueInTableByRowNameAndColumnNameInAverageStaffNumbersPage(SoFA_AverageStaffNumbers.RowNames.StaffSickness_DaysLossToSickness , SoFA_AverageStaffNumbers.ColumnNames.PermanentlyEmployed ,arg0);
    }

    @And("^I click on the next$")
    public void iClickOnTheNext() throws Throwable {
        averageStaffNumbers.clickNextButtonInAverageStaffNumbersPage();
    }

    @Then("^I am navigated to Numbers of Employees Whose Emoluments Exceed £(\\d+)k page$")
    public void iAmNavigatedToNumbersOfEmployeesWhoseEmolumentsExceed£KPage(int arg0) throws Throwable {
        averageStaffNumbers.explicitWait(6000);
    }
}
