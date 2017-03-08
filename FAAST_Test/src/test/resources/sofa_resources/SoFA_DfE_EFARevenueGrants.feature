
  Feature: Testing the DfE/EFA Revenue Grants Page
@RG @DEMO
    Scenario Outline: Testing DfE/EFA Revenue Grants Section with Valid Credentials

      Given I am on SoFA section
      When  I navigate to the DfE_EFA Revenue Grants Page
      And   I enter value in General Annual Grant with "<GAG>"
      And   I enter value in Rates Reclaim with "<RR>"
      And   I enter value in Student Support Services with "<SSS>"
      And   I enter value in Pupil Premium and Service Premium with "<PupilPremium>"
      And   I enter value in Pupil Number Adjustment with "<PupilNumber>"
      And   I enter value in Universal Infant Free School Meals with "<UniversalInfant>"
      And   I enter value in Insurance with "<Insurance>"
      And   I enter value in Sponsor Capacity Grant with "<SponsorCapacityGrant>"
      And   I enter value in Other with "<Other>"
      Then  I can see the total populated in Total field is "<Total>"


      Examples:
      |GAG|RR |SSS|PupilPremium|PupilNumber|UniversalInfant|Insurance|SponsorCapacityGrant|Other|Total|
      |10 |10 |10 |10          |10         |10             |10       |10                  |10   |90   |
      |1  |1  |1  |1           |1          |1              |1        |1                   |1    |9    |
      |100|100|100|100         |100        |100            |100      |100                 |100  |900  |
      |50 |50 |50 |50          |50         |50             |50       |50                  |50   |450  |
      |500|500|500|500         |500        |500            |500      |500                 |500  |4500 |




