Feature: Testing the Charitable Activities Direct Cost Page

@DEMO @CADC @Sanity_Test @Smoke_Test @Live @UAT @Anish
  Scenario Outline: Testing Happy path for Charitable Activities Direct Cost Page

    Given I am on SoFA section
    When  I navigate to Charitable Activities Direct Cost Page
    Then  I enter value in Teaching and Educational Support Staff with "<TEducSupportStaff>"
    And   I enter value in Staff Expenses with "<StaffExp>"
    And   I enter value in Other Staff Costs with "<OtherStaffCosts>"
    And   I enter value in Depreciation with "<Depreciation>"
    And   I enter value in Amortisation with "<Amortisation>"
    And   I enter value in Impairment wit "<Impairment>"
    And   I enter value in Educational Supplies with "<EducationalSupp>"
    And   I enter value in Examination Fees with "<ExaminationFees>"
    And   I enter value in Staff Related Insurance with "<StaffRelatedInsurance>"
    And   I enter value in Technology Costs with "<TechnologyCosts>"
    And   I enter value in Educational Consultancy with "<EducationalConsultancy>"
    And   I enter value in Other Direct Costs with "<OtherDirectCosts>"
    Then  I can see the Total field is now populated with "<Total>"

    Examples:
    |TEducSupportStaff|StaffExp|OtherStaffCosts|Depreciation|Amortisation|Impairment|EducationalSupp|ExaminationFees|StaffRelatedInsurance|TechnologyCosts|EducationalConsultancy|OtherDirectCosts|Total|
    |10               |10      |10             |10          |10          |10        |10             |10             |10                   |10             |10                    |10              |120  |
    |500              |500     |500            |500         |500         |500       |500            |500            |500                  |500            |500                   |500             |6000 |
    |1                |1       |1              |1           |1           |1         |1              |1              |1                    |1              |1                     |1               |12   |
    |50               |50      |50             |50          |50          |50        |50             |50             |50                   |50             |50                    |50              |600  |
    |200              |200     |200            |200         |200         |200       |200            |200            |200                  |200            |200                   |200             |2400 |



