
  Feature: testing the Other Revenue Grants Page
@DEMO @ORG
    Scenario Outline: testing the happy path for Other Revenue Grants

      Given I am on SoFA section
      When  I navigate to the Other Revenue Grants page
      And   I enter the value in Local Authority- Special Educational Needs with "<LA_SpecialEducationalNeeds>"
      And   I enter the value in Local Authority-Early Years with "<LA_EarlyYears>"
      And   I enter the value in Other Local Authority Revenue Grants with "<OtherLARevenueGrants>"
      And   I enter the value in Other Government Revenue Grants with "<OtherGovernmentRevenueGrants>"
      And   I enter the value in Non-Government-Revenue Grants with "<NonGovernment_RevenueGrants>"
      And   I see the totals field is now populated with "<Total>"

      Examples: testing Happy Path

      |LA_SpecialEducationalNeeds|LA_EarlyYears|OtherLARevenueGrants|OtherGovernmentRevenueGrants|NonGovernment_RevenueGrants|Total|
      |10                        |10           |10                  |10                          |10                         |50   |
      |1                         |1            |1                   |1                           |1                          |5    |
      |100                       |100          |100                 |100                         |100                        |500  |
      |200                       |200          |200                 |200                         |200                        |1000 |
      |50                        |50           |50                  |50                          |50                         |250  |
      |500                       |500          |500                 |500                         |500                        |2500 |
      |123                       |234          |50                  |156                         |75                         |638  |




