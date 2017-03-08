
  Feature: Testing the Other Capital Grants Page
@OCG @DEMO
    Scenario Outline: Checking Other Capital Grants with Valid Credentials

      Given I am on SoFA section
      When  I navigate to Other Capital Grants page
      And   I enter value in Local Authority Capital Grant with "<Local Authority Capital Grants>"
      And   I enter value in Other Government Capital Grants with "<Other Government Capital Grants>"
      And   I enter value in Non-Government Capital Grants with "<Non-Government Capital Grants>"
      Then  I can see the value populated in the Total field to be "<Total>"

      Examples: Data for Happy Path
      |Local Authority Capital Grants|Other Government Capital Grants|Non-Government Capital Grants|Total|
       |10                            |10                             |10                           |30   |
       |1                             |1                              |1                            |3    |
       |100                           |100                            |100                          |300  |
       |200                           |200                            |200                          |600  |
       |300                           |300                            |300                          |900  |
       |500                           |500                            |500                          |1500 |

