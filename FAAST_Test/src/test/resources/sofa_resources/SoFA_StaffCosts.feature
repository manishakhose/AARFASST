Feature: testing the Staff Costs section in SoFA

@DEMO @SC
  Scenario Outline: testing Staff Costes section with valid credentials

    Given I am on SoFA section
    When  I navigate to Staff Costs section
    And   I enter value in row wages and salaries WS and column PE with "<WS_PE>" and column TE with "<WS_TE>"
    Then  I can see the Total Value for row  wages and salaries WS to be "<WS_T>"
    And   I enter value in row Social Security Costs SSC  and column PE with "<SSC_PE>" and column TE with "<SSC_TE>"
    Then  I can see the Total Value for row SSC to be "<SSC_T>"
    And   I enter value in row Pension Costs PC  and column PE with "<PC_PE>" and column TE with "<PC_TE>"
    Then  I can see the Total Value for row PC to be "<PC_T>"
    And   I enter value in row Agency Staff Costs ASC  and TE with "<ASC_TE>"
    Then  I can see the Total Value for row ASC to be "<ASC_T>"
    And   I enter value in row Redundancy payment RP  and column PE with "<RP_PE>" and column TE with "<RP_TE>"
    Then  I can see the Total Value for row RP to be "<RP_T>"
    And   I enter value in row Severance Payments SP  and column PE with "<SP_PE>" and column TE with "<SP_TE>"
    Then  I can see the Total Value for row SP to be "<SP_T>"
    And   I enter value in row Other Restructuring Costs ORC  and column PE with "<ORC_PE>" and column TE with "<ORC_TE>"
    Then  I can see the Total Value for row ORC to be "<ORC_T>"
    And   I enter value in row Less Recoveries of Staff Costs LR  and column PE with "<LR_PE>" and column TE with "<LR_TE>"
    Then  I can see the Total Value for row LR to be "<LR_T>"
    Then  I can see the Final Total Column for Column PE to be "<T_PE>"  Column TE to be "<T_TE>" and column total to be "<T_T>"


    Examples:

    |WS_PE|WS_TE|WS_T|SSC_PE|SSC_TE|SSC_T|PC_PE|PC_TE|PC_T|ASC_TE|ASC_T|RP_PE|RP_TE|RP_T|SP_PE|SP_TE|SP_T|ORC_PE|ORC_TE|ORC_T|LR_PE|LR_TE|LR_T|T_PE|T_TE|T_T|
    |1    |1    |2   |1     |1     |2    |1    |1    |2   |1     |1    |1    |1    |2   |1    |1    |2   |1     |1     |2    |1    |1    |2   |7   |8   |15 |
    |2    |2    |4   |2     |2     |4    |2    |2    |4   |2     |2    |2    |2    |4   |2    |2    |4   |2     |2     |4    |2    |2    |4   |14  |16  |30 |
    |10   |10   |20  |10    |10    |20   |10   |10   |20  |10    |10   |10   |10   |20  |10   |10   |20  |10    |10    |20   |10   |10   |20  |70  |80  |150|