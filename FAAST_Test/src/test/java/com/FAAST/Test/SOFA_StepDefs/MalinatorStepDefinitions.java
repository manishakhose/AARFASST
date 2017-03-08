package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.Mailinator;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class MalinatorStepDefinitions {

    Mailinator mailinator = new Mailinator();

    @Given("^I am on the mailinator page$")
    public void iAmOnTheMailinatorPage() throws Throwable {
        Assert.assertEquals(mailinator.getManlinatoHomePageHeader() ,"Free Public Email" );
    }

    @When("^I use  the email address \"([^\"]*)\" in the create email field$")
    public void iUseTheEmailAddressInTheCreateEmailField(String arg0) throws Throwable {
        mailinator.setValueIncheckAnyInboxInputField(arg0);
    }

    @And("^I click on generate email$")
    public void iClickOnGenerateEmail() throws Throwable {
        mailinator.clickOnGoButton();
    }

    @Then("^I can see the email inbox is created with the name \"([^\"]*)\"$")
    public void iCanSeeTheEmailInboxIsCreatedWithTheName(String arg0) throws Throwable {
        mailinator.isEmptyInboxMessageIsPresnetAndDisplayed();
    }
}
