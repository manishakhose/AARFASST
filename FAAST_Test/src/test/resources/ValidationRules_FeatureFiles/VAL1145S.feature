Feature: Testing Validaton Rule Number VAL1145S

  # SoFA>>> Other Capital Grants >>> Local Authority Capital Grants should not exceed 50K
  # As a User
  # I need to check if the Validation Rule is working correctly
  # So that I can do this
  # When
  # Because


  Scenario Outline: Testing Validation Rule

    Given I am on SoFA section
    When  I navigate to Other Capital Grants page
    When  I have reset the data for Validation Trigger
    And   I enter value in Local Authority Capital Grant with "<Local Authority Capital Grants>"
    And   I enter value in Other Government Capital Grants with "<Other Government Capital Grants>"
    And   I enter value in Non-Government Capital Grants with "<Non-Government Capital Grants>"
    Then  I can see the value populated in the Total field to be "<Total>"
    Then  I click on next button
    And   I see the validation Rule Number "VAL1145S" has been triggred

    Examples: Data for Happy Path
      |Local Authority Capital Grants|Other Government Capital Grants|Non-Government Capital Grants|Total|
      |51                            |10                             |10                           |71   |
      |100                           |1                              |1                            |102  |
      |150                           |100                            |100                          |350  |
      |200                           |200                            |200                          |600  |
      |300                           |300                            |300                          |900  |
      |500                           |500                            |500                          |1500 |

