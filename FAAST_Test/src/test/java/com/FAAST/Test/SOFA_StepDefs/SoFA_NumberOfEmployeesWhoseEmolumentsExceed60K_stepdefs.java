package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_NumbersOfEmployeesWhoseEmolumentsExceed_60k;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class SoFA_NumberOfEmployeesWhoseEmolumentsExceed60K_stepdefs {


    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();
    SoFA_NumbersOfEmployeesWhoseEmolumentsExceed_60k numberExceedClass = new SoFA_NumbersOfEmployeesWhoseEmolumentsExceed_60k();

    @When("^I navigate to Numbers of Employees Whose Emoluments Exceed £(\\d+)k section$")
    public void iNavigateToNumbersOfEmployeesWhoseEmolumentsExceed£KSection(int arg0) throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.NumbersOfEmployeesWhoseEmolumentsExceed_60k);
    }

    @And("^I select drop down value in ROW (\\d+) and column named Annualised emolument bands with \"([^\"]*)\"$")
    public void iSelectDropDownValueInROWAndColumnNamedAnnualisedEmolumentBandsWith(int arg0, String arg1) throws Throwable {
        numberExceedClass.selectDropDownOptionByRowNumber(arg0 , arg1 );
    }

    @And("^I enter value in ROW (\\d+) and column named Number with \"([^\"]*)\"$")
    public void iEnterValueInROWAndColumnNamedNumberWith(int arg0, String arg1) throws Throwable {
        numberExceedClass.setValueInNumberField(arg1);
    }

    @Then("^I can see the Total to be as \"([^\"]*)\"$")
    public void iCanSeeTheTotalToBeAs(String arg0) throws Throwable {
        numberExceedClass.getValueFromTotalButton();
        numberExceedClass.explicitWait(5000);
    }
}
