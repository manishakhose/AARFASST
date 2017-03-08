package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_ExitPackages_NonCivilServiceSchemes;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class SoFA_ExitPackages_stepdefs {


    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_ExitPackages_NonCivilServiceSchemes exitPackage = new SoFA_ExitPackages_NonCivilServiceSchemes();

    @And("^I navigate to Exit Package Non Civil Service Scheme  section$")
    public void iNavigateToExitPackageNonCivilServiceSchemeSection() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.ExitPackages_NonCivilServiceSchemes);
    }

    @And("^I select drop down band value with \"([^\"]*)\"$")
    public void iSelectDropDownBandValueWith(String arg0) throws Throwable {
        exitPackage.selectDropDownOptionByRowNumber(1 , arg0);
    }

    @And("^I enter value in Row one and column name  Number of Compulsory Redundancies with \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameNumberOfCompulsoryRedundanciesWith(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.NumberOfCompulsoryRedundancies ,1,arg0);
    }

    @And("^I enter value in Row one and column name  value of Compulsory Redundancies Contractual wih \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameValueOfCompulsoryRedundanciesContractualWih(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfCompulsoryRedundanciesContractual, 1, arg0);
    }

    @And("^I enter value in Row one and column name  value of Compulsory Redundancies Non Contractual with \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameValueOfCompulsoryRedundanciesNonContractualWith(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfCompulsoryRedundanciesNonContractual,1,arg0);
    }

    @And("^I enter value in Row one and column name Number of Other Agreed Departures with \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameNumberOfOtherAgreedDeparturesWith(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.NumberOfOtherAgreedDepartures,1,arg0);
    }

    @And("^I enter value in row one and column name value of other Agreed Departures Contractual with \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameValueOfOtherAgreedDeparturesContractualWith(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfOtherAgreedDepartureContractual,1,arg0);
    }

    @And("^I enter value in row one and column name value of other Agreed Departures Non Contractual with \"([^\"]*)\"$")
    public void iEnterValueInRowOneAndColumnNameValueOfOtherAgreedDeparturesNonContractualWith(String arg0) throws Throwable {
        exitPackage.setValueInTableByRowNumberAndColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfOtherAgreedDepartureNonContractual,1,arg0);
    }

    @Then("^I can see the botton TOTAL row value for column name Number of Compulsory Redundancies is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValueForColumnNameNumberOfCompulsoryRedundanciesIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0,exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.NumberOfCompulsoryRedundancies));
    }

    @Then("^I can see the botton TOTAL row value for column name value of Compulsory Redundancies Contractual is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValueForColumnNameValueOfCompulsoryRedundanciesContractualIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0,exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfCompulsoryRedundanciesNonContractual));
    }

    @Then("^I can see the botton TOTAL row value for column name value of Compulsory Redundancies Non Contractual is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValueForColumnNameValueOfCompulsoryRedundanciesNonContractualIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfCompulsoryRedundanciesNonContractual));
    }

    @Then("^I can see the botton TOTAL row value for column name Other Agreed Departures is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValueForColumnNameOtherAgreedDeparturesIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.NumberOfOtherAgreedDepartures));
    }

    @Then("^I can see the botton TOTAL row value for column name value of other Agreed Departures Contractual is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValueForColumnNameValueOfOtherAgreedDeparturesContractualIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfOtherAgreedDepartureContractual));
    }

    @Then("^I can see the botton TOTAL row valie for column name value of other Agreed Departures Non Contractual is now \"([^\"]*)\"$")
    public void iCanSeeTheBottonTOTALRowValieForColumnNameValueOfOtherAgreedDeparturesNonContractualIsNow(String arg0) throws Throwable {
        Assert.assertEquals(arg0 , exitPackage.getValueFromBottomTotalsRowByColumnNameInExitPackages(SoFA_ExitPackages_NonCivilServiceSchemes.ColumnNames.ValueOfOtherAgreedDepartureNonContractual));
        exitPackage.explicitWait(5000);
    }
}
