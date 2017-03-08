package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_ProvisionOfBoardingActivities_Expediture extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement provisionOfBoardingActivities_Expediture_body;

    private String pageName= "Provision Of Boarding Activities Expediture Page";

    public void clickedNextButtonInProvisionOfBoardingActivities_ExpediturePage(){
        clickOnNextButtonByParentElement(provisionOfBoardingActivities_Expediture_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(provisionOfBoardingActivities_Expediture_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(provisionOfBoardingActivities_Expediture_body);
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(provisionOfBoardingActivities_Expediture_body);
    }

}
