package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_ProvisionOfBoardingActivities_Income extends SoFA_BaseClass {


    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement provisionOfBoardingActivities_Income_body;

    private String pageName= "Provision OfvBoarding Activities Income Page";

    public void clickedNextButtonInProvisionOfBoardingActivities_IncomePage(){
        clickOnNextButtonByParentElement(provisionOfBoardingActivities_Income_body);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(provisionOfBoardingActivities_Income_body,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(provisionOfBoardingActivities_Income_body);
    }
    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(provisionOfBoardingActivities_Income_body);
    }

}
