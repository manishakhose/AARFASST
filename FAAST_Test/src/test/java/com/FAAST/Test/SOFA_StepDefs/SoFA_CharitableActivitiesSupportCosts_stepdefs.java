package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_CharitableActivities_SupportCost;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SoFA_CharitableActivitiesSupportCosts_stepdefs {

    SoFA_CharitableActivities_SupportCost supportCost = new SoFA_CharitableActivities_SupportCost();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();

    @When("^I navigate to Charitable Activities Support Cost Page$")
    public void iNavigateToCharitableActivitiesSupportCostPage() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.CharitableActivities_SupportCosts);
    }

    @And("^I enter value in Support Staff Pay Costs with \"([^\"]*)\"$")
    public void iEnterValueInSupportStaffPayCostsWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.SupportStaffPayCosts, arg0);
    }

    @And("^I enter value in Staff Related Insurance field with \"([^\"]*)\"$")
    public void iEnterValueInStaffRelatedInsuranceFieldWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.StaffRelatedInsurance , arg0);
    }

    @And("^I enter value in Other Staff costs with \"([^\"]*)\"$")
    public void iEnterValueInOtherStaffCostsWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.OtherStaffCosts , arg0);
    }

    @And("^I enter value in Depreciation field with \"([^\"]*)\"$")
    public void iEnterValueInDepreciationFieldWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Depreciation , arg0);
    }

    @And("^I enter value in Amortisation field with \"([^\"]*)\"$")
    public void iEnterValueInAmortisationFieldWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Amortisation, arg0);
    }

    @And("^I enter value in Impairment field with \"([^\"]*)\"$")
    public void iEnterValueInImpairmentFieldWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Impairment, arg0);
    }

    @And("^I enter value in Maintenance of Premises with \"([^\"]*)\"$")
    public void iEnterValueInMaintenanceOfPremisesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.MaintenanceOfPremises , arg0);
    }

    @And("^I enter value in Special Facilities with \"([^\"]*)\"$")
    public void iEnterValueInSpecialFacilitiesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.SpecialFacilities,arg0);
    }

    @And("^I enter value in Cleaning and CareTaking with \"([^\"]*)\"$")
    public void iEnterValueInCleaningAndCareTakingWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.CleaningAndCaretaking, arg0);
    }

    @And("^I enter value in Operating  Lease Rentals Land B with \"([^\"]*)\"$")
    public void iEnterValueInOperatingLeaseRentalsLandBWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.OperatingLeaseRentalsLandAndBuildings,arg0);
    }

    @And("^I enter value in Operating Lease Rentals Others with \"([^\"]*)\"$")
    public void iEnterValueInOperatingLeaseRentalsOthersWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.OperatingLeaseRentalsOther,arg0);
    }

    @And("^I enter value in Rates wit \"([^\"]*)\"$")
    public void iEnterValueInRatesWit(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Rates,arg0);
    }

    @And("^I enter value in Energy with \"([^\"]*)\"$")
    public void iEnterValueInEnergyWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Energy,arg0);
    }

    @And("^I enter value in Risk Protection Arrangement Fees with \"([^\"]*)\"$")
    public void iEnterValueInRiskProtectionArrangementFeesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.RiskProtectionArrangementFees,arg0);
    }

    @And("^I enter value in Security with \"([^\"]*)\"$")
    public void iEnterValueInSecurityWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Security,arg0);
    }

    @And("^I enter value in Transport with \"([^\"]*)\"$")
    public void iEnterValueInTransportWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Transport,arg0);
    }

    @And("^I enter value in Catering with \"([^\"]*)\"$")
    public void iEnterValueInCateringWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Catering,arg0);
    }

    @And("^I enter value in Technology Cost with \"([^\"]*)\"$")
    public void iEnterValueInTechnologyCostWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.TechnologyCosts,arg0);
    }

    @And("^I enter value in other premises cost with \"([^\"]*)\"$")
    public void iEnterValueInOtherPremisesCostWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.OtherPremisesCosts,arg0);
    }

    @And("^I enter value in PFI_Services Costs with \"([^\"]*)\"$")
    public void iEnterValueInPFI_ServicesCostsWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.PFIServiceCosts,arg0);
    }

    @And("^I enter value in Loan Interest paid to Dfe_EFA Family with \"([^\"]*)\"$")
    public void iEnterValueInLoanInterestPaidToDfe_EFAFamilyWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.LoanInterest_PaidToDfE_EFAFamily,arg0);
    }

    @And("^I enter value in  Loan Interest paid to others with \"([^\"]*)\"$")
    public void iEnterValueInLoanInterestPaidToOthersWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.LoanInterestPaidOthers,arg0);
    }

    @And("^I enter value in Finance Leases Interest with \"([^\"]*)\"$")
    public void iEnterValueInFinanceLeasesInterestWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.FinanceLeaseInterest,arg0);
    }

    @And("^I enter value in Non Educational Consultancy with \"([^\"]*)\"$")
    public void iEnterValueInNonEducationalConsultancyWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.NonEducationalConsultancy,arg0);
    }

    @And("^I enter value in Legal and Professional with \"([^\"]*)\"$")
    public void iEnterValueInLegalAndProfessionalWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.LegalProfessional,arg0);
    }

    @And("^I enter value in Auditor Costs Audit Fees with \"([^\"]*)\"$")
    public void iEnterValueInAuditorCostsAuditFeesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.AuditorCostsAuditFees,arg0);
    }

    @And("^I enter value in Auditor Costs Internal Audit Fees with \"([^\"]*)\"$")
    public void iEnterValueInAuditorCostsInternalAuditFeesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.AuditorCostsInternalAuditFees,arg0);
    }

    @And("^I enter value in Auditor Costs Other fees with \"([^\"]*)\"$")
    public void iEnterValueInAuditorCostsOtherFeesWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.AuditorCostsOtherFees,arg0);
    }

    @And("^I enter value in Governors Reimbursement Travel and Subsistence with \"([^\"]*)\"$")
    public void iEnterValueInGovernorsReimbursementTravelAndSubsistenceWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.GovernorReimbursementTravelSubsistence,arg0);
    }

    @And("^I enter value in Travel expenses Travel and Subsistence with \"([^\"]*)\"$")
    public void iEnterValueInTravelExpensesTravelAndSubsistenceWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.TrusteeExpensesTravelSubsistence,arg0);
    }

    @And("^I enter value in Governors Reimbursement Other with \"([^\"]*)\"$")
    public void iEnterValueInGovernorsReimbursementOtherWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.GovernorsReimbursementOther,arg0);
    }

    @And("^I enter value in Trustees  Expenses Others  with \"([^\"]*)\"$")
    public void iEnterValueInTrusteesExpensesOthersWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.TrusteeExpensesOther,arg0);
    }

    @And("^I enter value in Net Movement in Provisions During the year with \"([^\"]*)\"$")
    public void iEnterValueInNetMovementInProvisionsDuringTheYearWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.NetMovementProvisionsDuringYear,arg0);
    }

    @And("^I enter gain or loss on Disposal of Tangible Fixed Assets \"([^\"]*)\"$")
    public void iEnterGainOrLossOnDisposalOfTangibleFixedAssets(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.GainOrLossOnDisposalOfTangibleFixedAssets,arg0);
    }

    @And("^I enter gain or loss on Disposal of Intangible fixed assets \"([^\"]*)\"$")
    public void iEnterGainOrLossOnDisposalOfIntangibleFixedAssets(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.GainLossDisposalIntangibleFixedAssets,arg0);
    }

    @And("^I enter Gain Or Loss on Disposal of Investments \"([^\"]*)\"$")
    public void iEnterGainOrLossOnDisposalOfInvestments(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.GainLossDisposalInvestments,arg0);
    }

    @And("^I enter Other Support Costs with \"([^\"]*)\"$")
    public void iEnterOtherSupportCostsWith(String arg0) throws Throwable {
        supportCost.setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.OtherSupportCosts,arg0);
    }

    @Then("^I can see the total to be \"([^\"]*)\"$")
    public void iCanSeeTheTotalToBe(String arg0) throws Throwable {
        Assert.assertEquals(arg0,supportCost.getValueFromFieldByFieldsetNameInCharitableActivitiesSupportCost(SoFA_CharitableActivities_SupportCost.CharitableActivitiesSupportCostFieldsetNames.Total));
    }
}
