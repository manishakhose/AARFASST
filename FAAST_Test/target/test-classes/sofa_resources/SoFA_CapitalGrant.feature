Feature: Testing Capital Grants Page

  @CG  @DEMO @Debbie
  Scenario Outline: Checking Capital Grants Section with Valid Credentials

    Given I have navigated to SOFA
    And   I have navigated to Capital Grants section
    When  I enter value in Conditional Improvement Fund with "<Condition Improvement Fund_value>"
    When  I enter value in Priority School Building Programme with "<Priority School Building Programme_value>"
    When  I enter value in Academies Capital Maintenance Fund with "<Academies Capital Maintenance Fund_value>"
    When  I enter value in Devolved Formula Capital Grant with "<Devolved Formula Capital Grant_value>"
    When  I enter value in Centrally Managed Programme Free School with "<Centrally Managed Programme_Free Schools_value>"
    When  I enter value in Continuing Commitments Building School for the Future with  "<Continuing Commitments_Building Schools for the Future_value>"
    And   I enter value in Other Values with "<Other_value>" correct
    Then  I see the value of Totals is "<Totals_value>"

    # Below is the data set that would be used to run the test againast multiple data values.
    Examples: Data for Happy Path

    |Condition Improvement Fund_value|Priority School Building Programme_value|Academies Capital Maintenance Fund_value|Devolved Formula Capital Grant_value|Centrally Managed Programme_Free Schools_value|Continuing Commitments_Building Schools for the Future_value|Other_value|Totals_value|
    |10                              |10                                      |10                                      |10                                  |10                                            |10                                                          |10         |70          |
    |100                             |100                                     |100                                     |100                                 |100                                           |100                                                         |100        |700         |
    |1                               |1                                       |1                                       |1                                   |1                                             |1                                                           |1          |7           |
    |2                               |2                                       |2                                       |2                                   |2                                             |2                                                           |2          |14          |
    |50                              |50                                      |50                                      |50                                  |50                                            |50                                                          |50         |350         |
    |150                             |150                                     |150                                     |150                                 |150                                           |150                                                         |150        |1050        |
    |500                             |500                                     |500                                     |500                                 |500                                           |500                                                         |500        |3500        |


