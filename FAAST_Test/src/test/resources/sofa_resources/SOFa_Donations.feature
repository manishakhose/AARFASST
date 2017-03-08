Feature: Testing Donations Page


  @DON @DEMO @TOM
  Scenario Outline: Checking Donations Section with Valid Credentials

   Given I am on SoFA section
    When I navigate to Donations section
    Then I enter value in Donated Fixed Assets with "<Donated Fixed Assets>"
    Then I enter value in Fixed Assets Donated with "<Fixed Assets Donated>"
    Then I enter value in Donated Intangible Assets with "<Donated Intangible Assets>"
    Then I enter value in Other Donations Capital with "<Other Donations Capital>"
    Then I enter value in Other Donations Revenue "<Other Donations Revenue>"
    Then I see the Total Capital field is populated with "<Total Capital>"
     And I see the Total Revenue field is populated with "<Total Revenue>"
     And I see the Total field is populated with "<Total>"

    # testing the happy path for the sofa donations page .

    Examples:
      |Donated Fixed Assets|Fixed Assets Donated|Donated Intangible Assets|Other Donations Capital|Other Donations Revenue|Total Capital|Total Revenue|Total|
      |10                  |10                  |10                       |10                     |10                     |40           |10           |50   |
      |100                 |100                 |100                      |100                    |100                    |400          |100          |500  |
      |1                   |1                   |1                        |1                      |1                      |4            |1            |5    |
      |50                  |50                  |50                       |50                     |50                     |200          |50           |250  |
      |500                 |500                 |500                      |500                    |500                    |2000         |500          |2500 |
      |150                 |150                 |150                      |150                    |150                    |600          |150          |750  |


    Scenario Outline: Checking Invalid Entries

      Given I am on SoFA section
      When I navigate to Donations section
      Then I enter value in Donated Fixed Assets with "<Donated Fixed Assets>"
      Then I enter value in Fixed Assets Donated with "<Fixed Assets Donated>"
      Then I enter value in Donated Intangible Assets with "<Donated Intangible Assets>"
      Then I enter value in Other Donations Capital with "<Other Donations Capital>"
      Then I enter value in Other Donations Revenue "<Other Donations Revenue>"
      Then I see the Total Capital field is populated with "<Total Capital>"
      And I see the Total Revenue field is populated with "<Total Revenue>"
      And I see the Total field is populated with "<Total>"
      And I click on Next Button I can see warning message under field names

    # testing the happy path for the sofa donations page .

      Examples:
        |Donated Fixed Assets|Fixed Assets Donated|Donated Intangible Assets|Other Donations Capital|Other Donations Revenue|Total Capital|Total Revenue|Total|
        |10                  |10                  |10                       |10                     |10                     |40           |10           |50   |
        |100                 |100                 |100                      |100                    |100                    |400          |100          |500  |
        |1                   |1                   |1                        |1                      |1                      |4            |1            |5    |
        |50                  |50                  |50                       |50                     |50                     |200          |50           |250  |
        |500                 |500                 |500                      |500                    |500                    |2000         |500          |2500 |
        |150                 |150                 |150                      |150                    |150                    |600          |150          |750  |
