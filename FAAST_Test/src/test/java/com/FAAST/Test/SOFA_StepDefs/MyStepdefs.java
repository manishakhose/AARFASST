package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.Registration;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class MyStepdefs {

    Registration registration = new Registration();



    @Given("^I am on the correct url$")
    public void iAmOnTheCorrectUrl() throws Throwable {
        System.out.println("Hello Welcome to registration ");
    }

    @When("^I select I do nto have an account$")
    public void iSelectIDoNtoHaveAnAccount() throws Throwable {
        registration.clickIDoNotHaveAnAccount();
    }

    @Then("^I am navigated to the registration page$")
    public void iAmNavigatedToTheRegistrationPage() throws Throwable {

    }

    @And("^I select drop down with \"([^\"]*)\"$")
    public void iSelectDropDownWith(String arg0) throws Throwable {
        registration.selectDropdownValue(arg0);
    }

    @And("^I enter First Name with \"([^\"]*)\"$")
    public void iEnterFirstNameWith(String arg0) throws Throwable {
        registration.setValuenFieldByFieldsetName("First name",arg0);
    }

    @And("^I enter Last Name with \"([^\"]*)\"$")
    public void iEnterLastNameWith(String arg0) throws Throwable {
        registration.setValuenFieldByFieldsetName("Last name" , arg0);
    }

    @And("^I enter Email Address with \"([^\"]*)\"$")
    public void iEnterEmailAddressWith(String arg0) throws Throwable {
        registration.setValuenFieldByFieldsetName("Email address" , arg0);
    }

    @And("^I enter Mobile Number with \"([^\"]*)\"$")
    public void iEnterMobileNumberWith(String arg0) throws Throwable {
        registration.setValuenFieldByFieldsetName("Mobile number" , arg0);
    }

    @And("^I enter Password with \"([^\"]*)\"$")
    public void iEnterPasswordWith(String arg0) throws Throwable {
        registration.setValueInPasswordField(arg0);
    }

    @And("^I enter Confirm Password with \"([^\"]*)\"$")
    public void iEnterConfirmPasswordWith(String arg0) throws Throwable {
        registration.setValuenFieldByFieldsetName("Confirm password" , arg0);
    }

    @And("^I click on the I accept Terms and Conditions$")
    public void iClickOnTheIAcceptTermsAndConditions() throws Throwable {
        registration.clickCheckboxelement();
    }

    @And("^I click on the Register Button$")
    public void iClickOnTheRegisterButton() throws Throwable {
        registration.clickRegisterElement();
    }

    @Then("^I can see that I have successfully Registered$")
    public void iCanSeeThatIHaveSuccessfullyRegistered() throws Throwable {
       Assert.assertEquals("       \nUNSUCCESFUL REGISTRATION",registration.getRegistrationSuccessPage() , "Registration");
        System.out.println("\n End of registration  registration ");

    }
}
