package com.FAAST.Test.SOFA_StepDefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class sample {

//    SoFA_Donations sofa  = new SoFA_Donations();
//    SignInPage signInPage = new SignInPage();
//    LoginPage loginPage = new LoginPage();
//
//    @Given("^I am on the correct url$")
//    public void iAmOnTheCorrectUrl()  {
////        signInPage.clickOnSignInAccountByAccountName("IdAMS");
////        loginPage.setUsernameValueInLoginPage();
////        loginPage.setPasswordValueInLoginPage();
////        loginPage.clickSubmitButtonInLoginPage();
////        loginPage.clickStartButtonOnLoginSuccess();
////        loginPage.clickContinueButtonOnLoginSuccess();
//    }
//
//    @Given("^I am on SoFA section$")
//    public void iAmOnSoFASection() throws Throwable {
//        sofa.clickOnTabOption("SoFA");
//
//    }
//
//    @When("^I click on Donations$")
//    public void iClickOnDonations() throws Throwable {
//        sofa.clickInSoFAOptions("Donations");
//    }
//
//    @Then("^I can see all the fields present$")
//    public void iCanSeeAllTheFieldsPresent() throws Throwable {
//        Assert.assertTrue(sofa.isDonationsPageFormHeaderPresentAndDisplayed());
//        Assert.assertEquals(sofa.getDonationsPageFormHeaderText(),"Donations");
//    }
//
//    @And("^I enter input \"([^\"]*)\" in the Donated Fixed Assets Non_DfE_EFA field$")
//    public void iEnterInputInTheDonatedFixedAssetsNon_DfE_EFAField(String arg0) throws Throwable {
//        sofa.setValueInDonationsFormInputFieldsByFieldsetName("Donated Fixed Assets (Non-DfE/EFA)" ,arg0);
//
//
//    }
//
//    @And("^I enter input \"([^\"]*)\" in the Fixed Assets Donated by the DfE_EFA field$")
//    public void iEnterInputInTheFixedAssetsDonatedByTheDfE_EFAField(String arg0) throws Throwable {
//        sofa.setValueInDonationsFormInputFieldsByFieldsetName("Fixed Assets Donated by the DfE/EFA" ,arg0);
//
//    }
//
//    @And("^I enter input \"([^\"]*)\" in the Donated Intangible Assets field$")
//    public void iEnterInputInTheDonatedIntangibleAssetsField(String arg0) throws Throwable {
//        sofa.setValueInDonationsFormInputFieldsByFieldsetName("Donated Intangible Assets" ,arg0);
//
//    }
//
//    @And("^I enter input \"([^\"]*)\" in the Other Donations Capital feild$")
//    public void iEnterInputInTheOtherDonationsCapitalFeild(String arg0) throws Throwable {
//        sofa.setValueInDonationsFormInputFieldsByFieldsetName("Other Donations (Capital)" ,arg0);
//
//    }
//
//    @And("^I enter input \"([^\"]*)\" in the Other Donations Revenue feild$")
//    public void iEnterInputInTheOtherDonationsRevenueFeild(String arg0) throws Throwable {
//        sofa.setValueInDonationsFormInputFieldsByFieldsetName("Other Donations (Revenue)" ,arg0);
//    }
//
//    @Then("^I can see the total capital is \"([^\"]*)\"$")
//    public void iCanSeeTheTotalCapitalIs(String arg0) throws Throwable {
//        Assert.assertEquals(arg0,sofa.getValueFromDonationsFormFieldsByFieldsetName("Total Capital"));
//    }
//
//    @Then("^I can see the total revenue is \"([^\"]*)\"$")
//    public void iCanSeeTheTotalRevenueIs(String arg0) throws Throwable {
//        Assert.assertEquals(arg0,sofa.getValueFromDonationsFormFieldsByFieldsetName("Total Revenue"));
//    }
//
//    @Then("^I can see the total to be \"([^\"]*)\"$")
//    public void iCanSeeTheTotalToBe(int arg0) throws Throwable {
//        Assert.assertEquals(arg0,sofa.getValueFromDonationsFormFieldsByFieldsetName("Total"));
//        Assert.assertFalse(sofa.isTimeOUtWarningMessagePresentAndDisplayed());
//        sofa.clickNextButtonInDoantionsPage();
//    }


}