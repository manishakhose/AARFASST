package com.FAAST.Test.sofa_pageObjects;


import com.FAAST.Test.AR_ApplicationNavigation;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_StandingData extends AR_ApplicationNavigation {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement standingData_body ;

    public String getUserNumberInStandingDataPage(){
        String userNumber = "" ;
        getValuefromFieldByParentElementAndFieldsetName(standingData_body, "User name:");
        return userNumber;
    }

    public void clickOnRadioButtonWithOptionYesORNoByFiedsetNameInStandingDataPage(String fieldsetName , String optionName){
        clickRadioButtonOptionsYesOrNoByParentElement(standingData_body,fieldsetName,optionName);
    }

    public void clickOnNextButtonOnStandingDataPage(){
        clickOnNextButtonByParentElement(standingData_body);
        logger.info("Next Button is now clicked !");
    }

    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(standingData_body);
    }

}
