Feature: Testing Cost Of Raising Funds Page

  @CG  @DEMO
  Scenario Outline: Checking Cost Of Raising Funds Section with Valid Credentials

    Given I am on SoFA section
    And   I have navigated to Cost Of Raising Funds section
    When  I enter value in Pay Cost with "<PayCosts>"
    When  I enter value in Premise Costs with "<PremiseCosts>"
    When  I enter value in Other "<Other>"
    Then  I see the value of Totals in Cost Of Raising Funds is "<Totals>"

    # Below is the data set that would be used to run the test againast multiple data values.
    Examples: Checking Cost Of Raising Funds Page With valid Cedentials .

      |PayCosts|PremiseCosts|Other|Totals|
      |10      |10          |10   |30    |
      |100     |100         |100  |300   |
      |1       |1           |1    |3     |
      |2       |2           |2    |6     |
      |50      |50          |50   |150   |
      |150     |150         |150  |450   |
      |500     |500         |500  |1500  |


