Feature: Testing the Charitable Activities Support Cost page
@DEMO @CASC
  Scenario Outline: Checking the Charitable Activities Support page with valid credentials

    Given I am on SoFA section
    When  I navigate to Charitable Activities Support Cost Page
    And   I enter value in Support Staff Pay Costs with "<SSPC>"
    And   I enter value in Staff Related Insurance field with "<SRI>"
    And   I enter value in Other Staff costs with "<OSC>"
    And   I enter value in Depreciation field with "<Depri>"
    And   I enter value in Amortisation field with "<Amor>"
    And   I enter value in Impairment field with "<Impa>"
    And   I enter value in Maintenance of Premises with "<MOP>"
    And   I enter value in Special Facilities with "<SpFaci>"
    And   I enter value in Cleaning and CareTaking with "<CAC>"
    And   I enter value in Operating  Lease Rentals Land B with "<OpLR_LB>"
    And   I enter value in Operating Lease Rentals Others with "<OpLR_Other>"
    And   I enter value in Rates wit "<Rates>"
    And   I enter value in Energy with "<energy>"
    And   I enter value in Risk Protection Arrangement Fees with "<RPAF>"
    And   I enter value in Security with "<Security>"
    And   I enter value in Transport with "<Transport>"
    And   I enter value in Catering with "<cat>"
    And   I enter value in Technology Cost with "<TC>"
    And   I enter value in other premises cost with "<OPC>"
    And   I enter value in PFI_Services Costs with "<PFI>"
    And   I enter value in Loan Interest paid to Dfe_EFA Family with "<LI_Fam>"
    And   I enter value in  Loan Interest paid to others with "<LI_Oth>"
    And   I enter value in Finance Leases Interest with "<FLI>"
    And   I enter value in Non Educational Consultancy with "<NEC>"
    And   I enter value in Legal and Professional with "<LAP>"
    And   I enter value in Auditor Costs Audit Fees with "<ACAF>"
    And   I enter value in Auditor Costs Internal Audit Fees with "<ACIAF>"
    And   I enter value in Auditor Costs Other fees with "<ACOAF>"
    And   I enter value in Governors Reimbursement Travel and Subsistence with "<GRTS>"
    And   I enter value in Travel expenses Travel and Subsistence with "<TE_TS>"
    And   I enter value in Governors Reimbursement Other with "<GRO>"
    And   I enter value in Trustees  Expenses Others  with "<TEO>"
    And   I enter value in Net Movement in Provisions During the year with "<NMP>"
    And   I enter gain or loss on Disposal of Tangible Fixed Assets "<GL_TFA>"
    And   I enter gain or loss on Disposal of Intangible fixed assets "<GL_IFA>"
    And   I enter Gain Or Loss on Disposal of Investments "<GL_I>"
    And   I enter Other Support Costs with "<OSP>"
    Then  I can see the total to be "<TOTAL>"


    Examples:
    |SSPC|SRI|OSC|Depri|Amor|Impa|MOP|SpFaci|CAC|OpLR_LB|OpLR_Other|Rates|energy|RPAF|Security|Transport|cat|TC|OPC|PFI|LI_Fam|LI_Oth|FLI|NEC|LAP|ACAF|ACIAF|ACOAF|GRTS|TE_TS|GRO|TEO|NMP|GL_TFA|GL_IFA|GL_I|OSP|TOTAL|
    |1   |1  |1  |1    |1   |1   |1  |1     |1  |1      |1         |1    |1     |1   |1       |1        |1  |1 |1  |1  |1     |1     |1  |1  |1  |1   |1    |1    |1   |1    |1  |1  |1  |1     |1     |1   |1  |37   |
    |2   |2  |2  |2    |2   |2   |2  |2     |2  |2      |2         |2    |2     |2   |2       |2        |2  |2 |2  |2  |2     |2     |2  |2  |2  |2   |2    |2    |2   |2    |2  |2  |2  |2     |2     |2   |2  |74   |
    |10  |10 |10 |10   |10  |10  |10 |10    |10 |10     |10        |10   |10    |10  |10      |10       |10 |10|10 |10 |10    |10    |10 |10 |10 |10  |10   |10   |10  |10   |10 |10 |10 |10    |10    |10  |10 |370  |
    |50  |50 |50 |50   |50  |50  |50 |50    |50 |50     |50        |50   |50    |50  |50      |50       |50 |50|50 |50 |50    |50    |50 |50 |50 |50  |50   |50   |50  |50   |50 |50 |50 |50    |50    |50  |50 |1850 |