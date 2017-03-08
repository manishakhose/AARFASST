package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_CostOfRaisingFunds extends SoFA_BaseClass {



    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement costOfRasingFunds_body;

    private String pageName= "Cost Of Raising Funds Page";


    public enum CostOfRaisingFundsFieldsetNames {

        PayCosta("Pay Costs"), PremiseCosts("Premises Costs") ,
        Other("Other") , Total("Total");

        private final String stringValue;

        private CostOfRaisingFundsFieldsetNames(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInInputFieldByFieldsetNameInCostOfRaisingFunds(CostOfRaisingFundsFieldsetNames fieldsetNames , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(costOfRasingFunds_body , fieldsetNames.toString() , inputValue);
    }

    public String getValueFromFieldByFieldsetNameInCostOfRaisingFunds(CostOfRaisingFundsFieldsetNames fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(costOfRasingFunds_body , fieldsetName.toString());
    }

    public void clickedNextButtonInCostOfRaisingFundsPage(){
        clickOnNextButtonByParentElement(costOfRasingFunds_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(costOfRasingFunds_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(costOfRasingFunds_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(costOfRasingFunds_body);
    }

}
