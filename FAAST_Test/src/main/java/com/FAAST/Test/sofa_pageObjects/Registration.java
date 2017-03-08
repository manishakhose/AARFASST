package com.FAAST.Test.sofa_pageObjects;

import com.FAAST.Test.Page;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Registration extends Page{

    @FindBy(how= How.XPATH , using = "//form[@name='forms.loginForm']//div[7]/div/a")
    WebElement dontHaveAccount ;

    @FindBy (how=How.XPATH , using = "//form[@name='forms.registrationForm']")
    WebElement registrationFormBody ;

    @FindBy(how=How.XPATH , using = "//form[@name='forms.registrationForm']//div/select")
    WebElement dropDownElement ;

    @FindBy(how = How.XPATH , using = "//form[@name='forms.registrationForm']//input[@type='checkbox']")
    WebElement checkBoxElement ;


    @FindBy(how = How.XPATH , using = "//form[@name='forms.registrationForm']//button[@class='btn']")
    WebElement registerButtonElement ;

    @FindBy(how=How.XPATH , using = "//h1")
    WebElement RegistrationSuccessElement ;

    public void setValuenFieldByFieldsetName(String fieldsetName , String inputValue){
        WebElement element = registrationFormBody.findElement(By.xpath(".//div/label[contains(text(),'"+fieldsetName+"')]/../input")) ;
        setValueInElementInput(element , inputValue);
        logger.info("\n value set in the fieldset :"+fieldsetName+" is "+inputValue);
    }


    public void selectDropdownValue(String dropdownvalue){
        selectElementByVisibleText(dropDownElement, dropdownvalue);
    }

    public void clickCheckboxelement(){
        clickElementWithRetry(checkBoxElement);
        logger.info("\n checkbox is now clicked");
    }

    public void clickRegisterElement(){
        clickElementWithRetry(registerButtonElement);
        logger.info("\n register  is now clicked");
    }

    public void clickIDoNotHaveAnAccount(){
        clickElementWithRetry(dontHaveAccount);
        logger.info("\n I dont have an account button is now clicked");
    }

    public void setValueInPasswordField(String inputValue){
        WebElement element = registrationFormBody.findElement(By.xpath(".//div/label[contains(text(),'Password')]/../div/input"));
        setValueInElementInput(element , inputValue);
    }

    public String getRegistrationSuccessPage(){
        String text = getElementTextWithRetry(RegistrationSuccessElement);
        logger.info("\n The extracted text for Registration Success is "+ text );
        return text ;
    }
}
