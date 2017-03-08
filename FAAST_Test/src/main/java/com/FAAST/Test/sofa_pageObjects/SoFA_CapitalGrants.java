package com.FAAST.Test.sofa_pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class SoFA_CapitalGrants extends SoFA_BaseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement capitalGrants_bodyCell ;

    private String pageName = "Capital Grants Page";


    public void setInputFieldValueByFieldSetNameInCapitalGrantsPage(String fieldsetName , String fieldValue){
        setValueInInputFieldByParentElementAndFieldsetName(capitalGrants_bodyCell,fieldsetName,fieldValue);
    }

    public String getValueOfAttributeFromFieldByFieldsetNameInCapitalGrantPage(String fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(capitalGrants_bodyCell, fieldsetName);
    }

    public void clickHelpDialogButtonByFieldsetName(String fieldsetName){
        clickOnQuestionHelpButtonByParentElementAndFieldetName(capitalGrants_bodyCell,fieldsetName);
    }

    public void clickOKButtonOnHelpDialogTextBox(){
        clickOkButtonOnHelpDialog();
    }

    public String getValueFromHelpDiaglogTextBox(){
        return getValueFromHelpDialog(capitalGrants_bodyCell);
    }

    public void clickedNextButtonInCapitalGrantsPage(){
        clickOnNextButtonByParentElement(capitalGrants_bodyCell);
        logger.info("Next Button is now clicked in "+pageName);
    }

    public String getFormHeaderNameFoCapitalGranst(){
        return getFormHeaderTextByParentElement(capitalGrants_bodyCell);
    }
}
