

Feature: testing FAAST Sampple Test



  Background: For running sample test suite
    Given I am on the correct url

@sampleTest
  Scenario: Sanity Test Suite For AR SoFA

   Given I am on SoFA section
    When I click on Donations
    Then I can see all the fields present

  @sampleTest
    @live
    @@file
   Scenario Outline: Testing the Donations Form with valid credentials validating
     Given  I am on SoFA section
      When  I click on Donations
      And   I enter input "<input1>" in the Donated Fixed Assets Non_DfE_EFA field
      And   I enter input "<input2>" in the Fixed Assets Donated by the DfE_EFA field
      And   I enter input "<input3>" in the Donated Intangible Assets field
      And   I enter input "<input4>" in the Other Donations Capital feild
      And   I enter input "<input5>" in the Other Donations Revenue feild
     Then   I can see the total capital is "<totalCapital>"
     Then   I can see the total revenue is "<totalRevenue>"
     Then   I can see the total to be "<total>"

     Examples:

     |input1|input2|input3|input4|input5|totalCapital|totalRevenue|total|
     |10    |10    |10    |10    |10    |40          |10          |50   |
     |20    |20    |20    |20    |20    |80          |10          |50   |


