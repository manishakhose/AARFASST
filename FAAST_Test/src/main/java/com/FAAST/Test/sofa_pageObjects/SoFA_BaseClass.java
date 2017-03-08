package com.FAAST.Test.sofa_pageObjects;


import com.FAAST.Test.AR_ApplicationNavigation;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_BaseClass extends AR_ApplicationNavigation {



    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    protected WebElement form_body ;

    @FindBy (how=How.XPATH , using = "//button[@id='submit']")
    WebElement continueButtonOnLoginSuccess ;



    public enum SoFA_SubMenuOptions  {
        Donations("Donations") ,                                                    CapitalGrants("Capital Grant (DfE/EFA)") ,
        CapitalGrantFREMRequirement("DfE/EFA Capital Grant FREM Requirement") ,    OthrCapitalGrants("Other Capital Grants") ,
        RevenueGrants("DfE/EFA Revenue Grants") ,                                  OtherRevenueGrants("Other Revenue Grants") ,
        OtherIncome("Other Income") ,                                               CostOfRaisingFunds("Costs of Raising Funds") ,
        CharitableActivities_DirectCosts("Charitable Activities - Direct Costs") , CharitableActivities_SupportCosts ("Charitable Activities - Support Costs") ,
        StaffCosts("Staff Costs") ,                                                 AverageStaffNumber_FullTimeEquivalent ("Average Staff Numbers (Full Time Equivalent)")  ,
        NumbersOfEmployeesWhoseEmolumentsExceed_60k ("Numbers of Employees Whose Emoluments Exceed £60k") ,
        ExitPackages_NonCivilServiceSchemes ("Exit packages - Non Civil Service Schemes") ,
        LossOfOfficePayments ("Loss of Office Payments") ,                         RelatedPartyTransactionsTrusteeRemuneration ("Related party transactions: trustee remuneration");


        private final String stringValue;

        private SoFA_SubMenuOptions(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void clickSOFA_subMenuOptionByOptionName(SoFA_SubMenuOptions optionName ){
        clickSubMenuOptionByOptionName(optionName.toString());
    }

    // VALIDATION RULE FUNCTIONALITY

    public enum ValidationRuleNumbers{VAL1031S}


    public void checkValidationRuleTriggerStatus(WebElement parentElement ,ValidationRuleNumbers valNumber){

        WebElement valRule = parentElement.findElement(By.xpath(".//div[@id='messages']/p[contains(.,'"+valNumber+"')]"));
        boolean valTriggeredStatus = isElementPresentAndDisplayed(valRule);

        if(valTriggeredStatus){
            logger.info("********VALIDATION :"+valNumber.toString()+" TRIGGERED STATUS IS TRUE");
        } else {
            clickOnTabOption(MainMenuNavigationOptions.Summary);

        }
    }

    public boolean isExpainationForValidationPresentAndDisplayedByValidationNumber(WebElement parentElement,ValidationRuleNumbers valNUmber){
        boolean isPresentAndDisplayed = isExplainationForValidationPresentAndDisplayedByValidationNumber(form_body,valNUmber.toString());
        logger.info("The current Present and Displayed state of Explaination For validation rule :"+valNUmber.toString()+ "is :"+ isPresentAndDisplayed);
        return isPresentAndDisplayed;
    }

    public boolean isFieldErrorMessagePresentAndDisplayedByFieldsetName(WebElement parentElement , String fieldsetName){
        boolean isPresentAndDisplayed = false ;
        try {
            WebElement element = form_body.findElement(By.xpath(".//div/label[contains(.,'"+fieldsetName+"')]/../..//div/p"));
            isPresentAndDisplayed = isElementPresentAndDisplayed(element);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The current state of error message for the field set name :"+fieldsetName+" is :"+isPresentAndDisplayed);
        return isPresentAndDisplayed;
    }

    public void clickContinueButtonOnLoginSuccess(){
        clickElementWithRetry(continueButtonOnLoginSuccess);
    }


}
