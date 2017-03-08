Feature: DfE/EFA Capital Grant FREM Requirement Page
@DEMO

    Scenario Outline: Testing the Capital Grants FREM Page with Valid Credentials

      Given  I am on SoFA section
      And    I have navigated to Capital Grants FREM section
      And    I enter in row Conditional Improvement funds with column Value Cash Received In Period "<CIF_CRIP>" and Column Expendituire Recorded with "<CIF_ER>"
      And    I enter in row Priority School Building Programme with column Value Cash Received In Period "<PSBP_CRIP>" and Column Expendituire Recorded with "<PSBP_ER>"
      And    I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period "<ACMF_CRIP>" and Column Expendituire Recorded with "<ACMF_ER>"
      And    I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period "<DFC_CRIP>" and Column Expendituire Recorded with "<DFC_ER>"
      And    I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period "<CMP_CRIP>" and Column Expendituire Recorded with "<CMP_ER>"
      And    I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period "<BSF_CRIP>" and Column Expendituire Recorded with "<BSF_ER>"
      And    I enter in row Others with column Value Cash Received In Period "<Oth_CRIP>" and Column Expendituire Recorded with "<Oth_ER>"
      Then   I see the Totals for column name Cash Received In Period is "<T_CRIP>" and column name Expendituire Recorded with "<T_ER>"


      Examples:
        | CIF_CRIP | CIF_ER | PSBP_CRIP | PSBP_ER | ACMF_CRIP | ACMF_ER | DFC_CRIP | DFC_ER | CMP_CRIP | CMP_ER | BSF_CRIP | BSF_ER | Oth_CRIP | Oth_ER | T_CRIP | T_ER |
        |1         |1       |1          |1        |1          |1        |1         |1       |1         |1       |1         |1       |1         |1       |7       |7     |
        |5         |5       |5          |5        |5          |5        |5         |5       |5         |5       |5         |5       |5         |5       |35      |35    |
        |10        |10      |10         |10       |10         |10       |10        |10      |10        |10      |10        |10      |10        |10      |70      |70    |
        |100       |100     |100        |100      |100        |100      |100       |100     |100       |100     |100       |100     |100       |100     |700     |700   |





