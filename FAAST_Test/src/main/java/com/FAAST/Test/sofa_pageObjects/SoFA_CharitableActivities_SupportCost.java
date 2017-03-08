package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_CharitableActivities_SupportCost extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement charitableActivitiesSupportCost_body;

    private String pageName= "Charitable Activities Indirect Cost Page";


    public enum CharitableActivitiesSupportCostFieldsetNames {

        SupportStaffPayCosts("Support Staff Pay Costs") , StaffRelatedInsurance("Staff Related Insurance") , OtherStaffCosts("Other Staff Costs"),
        Depreciation("Depreciation") , Amortisation("Amortisation") , Impairment("Impairment") , MaintenanceOfPremises("Maintenance of Premises") ,
        SpecialFacilities("Special Facilities")  , CleaningAndCaretaking("Cleaning and Caretaking") , OperatingLeaseRentalsLandAndBuildings("Operating Lease Rentals - Land and Buildings") ,
        OperatingLeaseRentalsOther("Operating Lease Rentals - Other") , Rates("Rates") ,Energy("Energy") , RiskProtectionArrangementFees("Risk Protection Arrangement Fees") ,
        Security("Security") , Transport("Transport") , Catering("Catering") , TechnologyCosts("Technology Costs") , OtherPremisesCosts("Other Premises Costs") ,
        PFIServiceCosts("PFI Service Costs") , LoanInterest_PaidToDfE_EFAFamily("Loan Interest-Paid to DfE/EFA Family") ,LoanInterestPaidOthers("Loan Interest-Paid to Others") ,
        FinanceLeaseInterest("Finance Lease Interest") , NonEducationalConsultancy("Non-Educational Consultancy") , LegalProfessional("Legal & Professional") ,
        AuditorCostsAuditFees("Auditor Costs-Audit Fees") , AuditorCostsInternalAuditFees("Auditor Costs - Internal Audit Fees") ,AuditorCostsOtherFees("Auditor Costs-Other Fees") ,
        GovernorReimbursementTravelSubsistence("Governor Reimbursement-Travel and Subsistence") , TrusteeExpensesTravelSubsistence("Trustee Expenses-Travel and Subsistence") ,
        GovernorsReimbursementOther("Governors Reimbursement-Other") , TrusteeExpensesOther("Trustee Expenses-Other") , NetMovementProvisionsDuringYear("Net Movement in Provisions During the Year") ,
        GainOrLossOnDisposalOfTangibleFixedAssets("Gain or Loss on Disposal of Tangible Fixed Assets") , GainLossDisposalIntangibleFixedAssets("Gain or Loss on Disposal of Intangible Fixed Assets") ,
        GainLossDisposalInvestments("Gain or Loss on Disposal of Investments") , OtherSupportCosts("Other Support Costs") , Total("Total");

        private final String stringValue;

        private CharitableActivitiesSupportCostFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFieldsetNameInCharitableActivitiesSupportCost(CharitableActivitiesSupportCostFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(charitableActivitiesSupportCost_body , fieldsetNames.toString() , inputValue);
    }

    public String getValueFromFieldByFieldsetNameInCharitableActivitiesSupportCost(CharitableActivitiesSupportCostFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(charitableActivitiesSupportCost_body , fieldsetName.toString());
    }

    public void clickedNextButtonInCharitableActivitiesIndirectCostPage(){
        clickOnNextButtonByParentElement(charitableActivitiesSupportCost_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(charitableActivitiesSupportCost_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(charitableActivitiesSupportCost_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(charitableActivitiesSupportCost_body);
    }

}
