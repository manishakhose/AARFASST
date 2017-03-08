Feature: testing Related Party Transactions Page

@DEMO @RPT
  Scenario Outline: testing related Party Transaction with valid Credentials

    Given I am on SoFA section
    Then  I navigate to Related Party Transactions section
    And   I select a value "<value1>" from the drop down menu
    And   I enter value in Number paid as Trustees with "<Num_Paid_Trustees1>"
    And   I enter value in Number paid as staff with "<Num_Paid_Staff1>"
   # Then  I can see the Total column is "<Total1>"
    Then  I can see the Row named Total value for Paid as Trustees is "<Total_Trustees>"
    Then  I can see the Row named Total value for Paid as Staff is "<Total_Staff>"
   # Then  I can see the Row named Total value for Column named Total os "<Total_Total>"


    Examples:
      | value1            | Num_Paid_Trustees1 | Num_Paid_Staff1 | Total1 | Total_Trustees | Total_Staff | Total_Total |
      |£60,001-£70,000    |1                   |1                |2       |1               |1            |2            |
      |£60,001-£70,000    |2                   |2                |4       |2               |2            |4            |
      |£60,001-£70,000    |4                   |4                |8       |4               |4            |8            |
