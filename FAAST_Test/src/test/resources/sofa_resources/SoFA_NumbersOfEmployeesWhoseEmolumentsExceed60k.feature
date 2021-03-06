Feature: Testing the Numbers of Employees Whose Emoluments Exceed £60k section

  Scenario Outline: Testing the Numbers of Employees Whose Emoluments Exceed £60k with valod credentials

    Given  I am on SoFA section
    When   I navigate to Numbers of Employees Whose Emoluments Exceed £60k section
    And    I select drop down value in ROW 1 and column named Annualised emolument bands with "<R1_AEB>"
    And    I enter value in ROW 1 and column named Number with "<number>"
    Then   I can see the Total to be as "<Total>"

    Examples:
      | R1_AEB            | number | Total |
      |£170,001 - £180,000|1       |1      |
      |£170,001 - £180,000|10      |10     |
      |£170,001 - £180,000|100     |100    |
      |£170,001 - £180,000|250     |250    |