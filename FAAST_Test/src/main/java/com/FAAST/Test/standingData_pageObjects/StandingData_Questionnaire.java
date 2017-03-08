package com.FAAST.Test.standingData_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class StandingData_Questionnaire extends StandingData_baseClass {

    @FindBy(how= How.XPATH , using ="//form[@id='owdInterviewForm']")
    private WebElement questionnaire_body ;


    private enum QuestionnaireFieldSetConstants{

        Firm_Name("Firm name:") , Person_Name("Person Name:") , Phone_Number("Phone number:") , Email_Address("Email address:") , Re_TypeEmailAddress("Re-type email address:") , Role("Role:");

        private final String stringValue;

        private QuestionnaireFieldSetConstants(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public void setValueInFieldByFielssetNameInStandingDataQuestionnairePage(QuestionnaireFieldSetConstants fieldSetName , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(questionnaire_body , fieldSetName.toString() , inputValue);
    }

     public void selectDropDownValueByFieldsetName(QuestionnaireFieldSetConstants fieldsetName  , String dropDownvalue ){
         WebElement element = questionnaire_body.findElement(By.xpath(""));
         selectElementByVisibleText(element , dropDownvalue );
     }

}
