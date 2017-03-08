

Feature: testing the Average Staff Numbers (Full time Equivalent)section in SoFA


  Scenario Outline: Verify Average Staff Numbers with valid credentials

    Given I am on SoFA section
    When  I navigate to Average Staff Numbers
    And   I enter value in row Teachers and column PE with "<TE_PE>" and column TIS with "<TE_TIS>"
    Then  I must see the Total Value for row  Teachers to be "<TE_T>"
    And   I enter value in row Management and column PE with "<MA_PE>" and column TIS with "<MA_TIS>"
    Then  I must see the Total Value for row Management to be "<MA_T>"
    And   I enter value in row Administration and support and column PE with "<AS_PE>" and column TE with "<AS_TE>"
    Then  I must see the Total Value for row Administration and Support to be "<AS_T>"
    And   I must see the Total value for column PE with "<PE_T>" and TIS with "<TIS_T>" and Total with "<TO_T>"
    And   I enter value in row Staff who Serve as Trustees and column Male with "<Staff_MA>" and column Female  with "<Staff_FE>"
    Then  I must see the Total value for row Staff who serve as Trustees to be "<Staff_Tot>"
    And   I enter value in row All Other Staff and column Male with "<OtStf_MA>" and column Female with "<OtStf_FE>"
    Then  I must see the Total Value for row All other Staff to be "<OtStf_Tot>"
    And   I must see Total value of column Male with "<TO_Male>" and column Female with "<TO_Female>" and column total with "<TO_Tot>"
    And   I enter  value in row Days lost to Sickness with "<Stf_Sick>"
    And   I click on the next
    Then  I am navigated to Numbers of Employees Whose Emoluments Exceed £60k page
    Examples:
      | TE_PE | TE_TIS | TE_T | MA_PE | MA_TIS | MA_T | AS_PE | AS_TE | AS_T | PE_T | TIS_T | TO_T | Staff_MA | Staff_FE | Staff_Tot | OtStf_MA | OtStf_FE | OtStf_Tot | TO_Male | TO_Female | TO_Tot | Stf_Sick |
      |1      |1       |2     |1      |1       |2     |1      |1      |2     |3     |3      |6     |1         |1         |2          |1         |1         |2          |2        |2          |4       |1         |
      |10     |10      |20    |10     |10      |20    |10     |10     |20    |30    |30     |60    |10        |10        |20         |10        |10        |20         |20       |20         |40      |10        |
      |20     |20      |40    |20     |20      |40    |20     |20     |40    |60    |60     |120   |20        |20        |40         |20        |20        |40         |40       |40         |80      |20        |