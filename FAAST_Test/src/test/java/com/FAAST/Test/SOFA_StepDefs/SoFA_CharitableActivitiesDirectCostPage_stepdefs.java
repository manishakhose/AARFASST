package com.FAAST.Test.SOFA_StepDefs;

import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;
import com.FAAST.Test.sofa_pageObjects.SoFA_Charitableactivities_DirectCosts;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SoFA_CharitableActivitiesDirectCostPage_stepdefs {


    SoFA_Charitableactivities_DirectCosts charitableActivitiesDirectCosts = new SoFA_Charitableactivities_DirectCosts();
    SoFA_BaseClass soFA_baseClass = new SoFA_BaseClass();


    @When("^I navigate to Charitable Activities Direct Cost Page$")
    public void iNavigateToCharitableActivitiesDirectCostPage() throws Throwable {
        soFA_baseClass.clickSOFA_subMenuOptionByOptionName(SoFA_BaseClass.SoFA_SubMenuOptions.CharitableActivities_DirectCosts);
        Assert.assertEquals("Charitable Activities - Direct Costs",charitableActivitiesDirectCosts.getFormHeaderName());
    }

    @Then("^I enter value in Teaching and Educational Support Staff with \"([^\"]*)\"$")
    public void iEnterValueInTeachingAndEducationalSupportStaffWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.TeachingEducationalSupportStaff , arg0);
    }

    @And("^I enter value in Staff Expenses with \"([^\"]*)\"$")
    public void iEnterValueInStaffExpensesWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.StaffExpenses , arg0);
    }

    @And("^I enter value in Other Staff Costs with \"([^\"]*)\"$")
    public void iEnterValueInOtherStaffCostsWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.OtherStaffCosts , arg0);
    }

    @And("^I enter value in Depreciation with \"([^\"]*)\"$")
    public void iEnterValueInDepreciationWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.Depreciation , arg0);
    }

    @And("^I enter value in Amortisation with \"([^\"]*)\"$")
    public void iEnterValueInAmortisationWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.Amortisation , arg0);
    }

    @And("^I enter value in Impairment wit \"([^\"]*)\"$")
    public void iEnterValueInImpairmentWit(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.Impairment, arg0);
    }

    @And("^I enter value in Educational Supplies with \"([^\"]*)\"$")
    public void iEnterValueInEducationalSuppliesWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.EducationalSupplies, arg0);
    }

    @And("^I enter value in Examination Fees with \"([^\"]*)\"$")
    public void iEnterValueInExaminationFeesWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.ExaminationFees, arg0);
    }

    @And("^I enter value in Staff Related Insurance with \"([^\"]*)\"$")
    public void iEnterValueInStaffRelatedInsuranceWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.StaffRelatedInsurance, arg0);
    }

    @And("^I enter value in Technology Costs with \"([^\"]*)\"$")
    public void iEnterValueInTechnologyCostsWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.TechnologyCosts, arg0);
    }

    @And("^I enter value in Educational Consultancy with \"([^\"]*)\"$")
    public void iEnterValueInEducationalConsultancyWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.EducationalConsultancy, arg0);
    }

    @And("^I enter value in Other Direct Costs with \"([^\"]*)\"$")
    public void iEnterValueInOtherDirectCostsWith(String arg0) throws Throwable {
        charitableActivitiesDirectCosts.setValueInInputFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.OtherDirectCosts,arg0);
    }

    @Then("^I can see the Total field is now populated with \"([^\"]*)\"$")
    public void iCanSeeTheTotalFieldIsNowPopulatedWith(String arg0) throws Throwable {
        Assert.assertEquals(arg0,charitableActivitiesDirectCosts.getValueFromFieldByFieldsetNameInCharitableActivitiesDirectCost(SoFA_Charitableactivities_DirectCosts.CharitableActivitiesDirectCostFieldsetNames.Total));
    }
}
