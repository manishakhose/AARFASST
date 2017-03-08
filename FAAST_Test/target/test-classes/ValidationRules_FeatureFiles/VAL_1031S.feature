Feature: Testing Validation Rule VAL1031S


  # The above is the Name of the Feature that this file covers . One Feature per File

  # THIS FEATURE FILE COVER ONE VALIDATION RULE AND COVERS TESTING OF THE VALIDATION RULES


  # The below is the User Story which captures the User Requirement or the Acceptance Criteria

  ---- USER STORY -----------
  As A : User

  I need to : be able to check information I input is validated as per rule VAL1031S

  So that : I am sure I pass the correct information in to the Application

 -------TESTING -------------

  What are we testing : eg: Validation Rule

  Testing the Validation Rule Number : VAL1031S : VAL1031S: Other Donations exceeds threshold of £500k.

  Explanation to the Rule : The total of two fields named Other Donations (Capital) and Other Donations (Revenue) in SoFa Donations Section should be less than or equal to 500K

 --------ALL IN ONE-----------

  A Feature File : Serves as User Story Document + Requirement Document + Test Artefact's + Test Steps + Test data + Expected Result :ALL IN ONE : BINGO !!!


  @VAL @VAL_SOFA_DON  # Tags that determine which Test cases will be covered in the Test Run. We can run the test Cases based on tags . These Tags are User Defined
  Scenario Outline: Testing VAL1031S : Triggering

  # The Specific Expected Result it is checking for , eg : Triggering

    Given I am on SoFA section
    When  I navigate to Donations section
    Then  I reset the Data for Validation to Trigger
    Then  I enter value in Donated Fixed Assets with "<Donated Fixed Assets>"
    Then  I enter value in Fixed Assets Donated with "<Fixed Assets Donated>"
    Then  I enter value in Donated Intangible Assets with "<Donated Intangible Assets>"
    Then  I enter value in Other Donations Capital with "<Other Donations Capital>"
    Then  I enter value in Other Donations Revenue "<Other Donations Revenue>"
    Then  I see the Total Capital field is populated with "<Total Capital>"
    And   I see the Total Revenue field is populated with "<Total Revenue>"
    And   I see the Total field is populated with "<Total>"
    And   I click the Next Button in Donation
    Then  I must see Validation Rule "VAL1031S" IS Triggered
    Then  I must see the rule "VAL1031S" flagged up in Summary Page

    Below is the Data-Set to test the above testing scenarios

    Examples:
      |Donated Fixed Assets|Fixed Assets Donated|Donated Intangible Assets|Other Donations Capital|Other Donations Revenue|Total Capital|Total Revenue|Total|
      |100                 |100                 |100                      |100                    |401                    |400          |401          |801  |
      |50                  |100                 |150                      |50                     |555                    |350          |555          |905  |
      |500                 |500                 |500                      |500                    |750                    |2000         |750          |2750 |
      |500                 |500                 |500                      |500                    |499                    |2000         |499          |2499 |
      |1                   |1                   |1                        |101                    |401                    |104          |401          |505  |
      |5                   |5                   |5                        |5                      |496                    |20           |496          |516  |
      |5                   |5                   |5                        |496                    |5                      |511          |5            |516  |


  @VAL @VAL_SOFA_DON
  Scenario Outline: Testing VAL1031S : Triggering with Explanation

    Given I am on SoFA section
    When  I navigate to Donations section
    Then  I reset the Data for Validation to Trigger
    Then  I enter value in Donated Fixed Assets with "<Donated Fixed Assets>"
    Then  I enter value in Fixed Assets Donated with "<Fixed Assets Donated>"
    Then  I enter value in Donated Intangible Assets with "<Donated Intangible Assets>"
    Then  I enter value in Other Donations Capital with "<Other Donations Capital>"
    Then  I enter value in Other Donations Revenue "<Other Donations Revenue>"
    Then  I see the Total Capital field is populated with "<Total Capital>"
    And   I see the Total Revenue field is populated with "<Total Revenue>"
    And   I see the Total field is populated with "<Total>"
    And   I click the Next Button in Donation
    Then  I must see Validation Rule "VAL1031S" IS Triggered
    Then  I enter explanation of Validation in the provided box
    Then  I must NOT see the rule "VAL1031S" flagged up in Summary Page


    Examples:
      |Donated Fixed Assets|Fixed Assets Donated|Donated Intangible Assets|Other Donations Capital|Other Donations Revenue|Total Capital|Total Revenue|Total|
      |100                 |100                 |100                      |100                    |401                    |400          |401          |801  |
      |50                  |100                 |150                      |50                     |555                    |350          |555          |905  |
      |500                 |500                 |500                      |500                    |750                    |2000         |750          |2750 |
      |500                 |500                 |500                      |500                    |499                    |2000         |499          |2499 |
      |1                   |1                   |1                        |101                    |401                    |104          |401          |505  |
      |5                   |5                   |5                        |5                      |496                    |20           |496          |516  |
      |5                   |5                   |5                        |496                    |5                      |511          |5            |516  |

  @VAL @VAL_SOFA_DON
  Scenario Outline: Testing VAL1031S : Not Triggering

    Given I am on SoFA section
    When  I navigate to Donations section
    Then  I reset the Data for Validation to Trigger
    Then  I enter value in Donated Fixed Assets with "<Donated Fixed Assets>"
    Then  I enter value in Fixed Assets Donated with "<Fixed Assets Donated>"
    Then  I enter value in Donated Intangible Assets with "<Donated Intangible Assets>"
    Then  I enter value in Other Donations Capital with "<Other Donations Capital>"
    Then  I enter value in Other Donations Revenue "<Other Donations Revenue>"
    Then  I see the Total Capital field is populated with "<Total Capital>"
    And   I see the Total Revenue field is populated with "<Total Revenue>"
    And   I see the Total field is populated with "<Total>"
    And   I click the Next Button in Donation
    Then  I must see Validation Rule "VAL1031S" is NOT - Triggered
    Then  I must NOT see the rule "VAL1031S" flagged up in Summary Page


    Examples:
      |Donated Fixed Assets|Fixed Assets Donated|Donated Intangible Assets|Other Donations Capital|Other Donations Revenue|Total Capital|Total Revenue|Total|
      |10                  |10                  |10                       |10                     |10                     |40           |10           |50   |
      |5                   |5                   |5                        |5                      |5                      |20           |5            |25   |
      |50                  |50                  |50                       |50                     |50                     |200          |50           |250  |
