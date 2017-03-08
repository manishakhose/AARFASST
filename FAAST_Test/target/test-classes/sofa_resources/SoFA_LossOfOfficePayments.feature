Feature: testing the Loss Of Office Payment section


  Scenario Outline: Check the Loss Of Office Payment section with Valid Credentials

    Given I am on SoFA section
    When  I have navigated to Loss Of Office Payments section
    When  I enter value in ROW Loss of Office Payments - Serving at Year End and Column Accounting Office with a value of "<SYE_AO>"
    And   I enter value in ROW Loss of Office Payments - Serving at Year End and Column Other Trustees with a value of "<SYE_OT>"
    And   I select value in ROW Loss of Office Payments - Serving at Year End with a drop down value of "<SYE_DD>"
    When  I enter value in ROW Loss of Office Payments - Left During the Year and Column Accounting Office with a value of "<LDY_AC>"
    And   I enter value in ROW Loss of Office Payments - Left During the Year and Column Other Trustees with a value of "<LDY_OT>"
    And   I select value in ROW Loss of Loss of Office Payments - Left During the Year with a drop down value of "<LDY_DD>"
    Examples:
      | SYE_AO | SYE_OT | SYE_DD | LDY_AC | LDY_OT | LDY_DD |
      |1       |1       |Yes     |1       |1       |No      |
      |2       |2       |No      |2       |2       |Yes     |
      |20      |20      |Yes     |20      |20      |No      |
      |50      |70      |No      |70      |50      |Yes     |



