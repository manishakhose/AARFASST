Feature: Registering the superUser


  Scenario Outline: Testing the registration form
    Given I am on the correct url
    When  I select I do nto have an account
    Then  I am navigated to the registration page
    And   I select drop down with "<Title>"
    And   I enter First Name with "<FirstName>"
    And   I enter Last Name with "<LastName>"
    And   I enter Email Address with "<Email>"
    And   I enter Mobile Number with "<Mobile>"
    And   I enter Password with "<Password>"
    And   I enter Confirm Password with "<Password>"
    And   I click on the I accept Terms and Conditions
    And   I click on the Register Button
    Then  I can see that I have successfully Registered

    Examples:
    |Title|FirstName|LastName|Email              |Mobile     |Password   |
    |Mr   |Ann      |Another |sample@someone.com |000000000  |Welcome1234|
    |Mr   |AAR      |AnoTHER |sample@sample.com  |00000000   |Hello1234  |