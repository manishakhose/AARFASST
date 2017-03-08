Feature: Testing Other Income Page
@DEMO @OI
  Scenario Outline: testing Happy path for Other Income Page

    Given  I am on SoFA section
    When   I navigate to the Other Income Page
    And    I enter the value in Academies with "<Academies>"
    And    I enter the value in Government Sources - Non Grant with "<Government Sources_Non Grant>"
    And    I enter the value inNon-Government Revenue with "<Non-Government Revenue>"
    Then   I can see the Total field is now "<Total>"

    Examples: Happy Path Data

    |Academies|Government Sources_Non Grant|Non-Government Revenue|Total|
    |0        |0                           |0                     |0    |
    |1        |1                           |1                     |3    |
    |100      |100                         |100                   |300  |
    |200      |200                         |200                   |600  |
    |500      |500                         |500                   |1500 |
    |111      |222                         |333                   |666  |
    |150      |250                         |350                   |750  |
    |250      |250                         |250                   |750  |

