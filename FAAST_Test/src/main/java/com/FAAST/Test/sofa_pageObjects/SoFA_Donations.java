package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class SoFA_Donations extends SoFA_BaseClass {

// AMMENDMENTS MADE HERE ....... Testing the Xpath with a String Formatting
    @FindBy(how = How.XPATH, using = "//form[@id="+"'owdInterviewForm'"+"]")
    WebElement formBody_donationsPage;

    @FindBy(how = How.XPATH, using = "//button[@id='submit']")
    WebElement nextButton_donationsPage;


    public enum DonationsPageFieldsetConstants {
        DonatedFixedAssets("Donated Fixed Assets"), FixedAssetsDonatedByTheDfE_EFA("Fixed Assets Donated by the DfE/EFA"),
        DonatedIntangibleAssets("Donated Intangible Assets"), OtherDonationsCapital("Other Donations (Capital)"), OtherDonationsRevenue("Other Donations (Revenue)"),
        TotalCapital("Total Capital"), TotalRevenue("Total Revenue"), Total("Total");

        private final String stringValue;

        private DonationsPageFieldsetConstants(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }


    public String getHeaderTextValueFromDonationsPage() {
        String headerText = "";
        headerText = getFormHeaderTextByParentElement(formBody_donationsPage);
        return headerText;
    }

    public void setValueInInPutFieldByFieldsetNameIn_DonationsPage(DonationsPageFieldsetConstants fieldsetName, String inputValue) {
        setValueInInputFieldByParentElementAndFieldsetName(formBody_donationsPage, fieldsetName.toString(), inputValue);
    }

    public String getValueFromFieldByFieldsetInDonationsPage(DonationsPageFieldsetConstants fieldsetName) {
        String extractedText = "";
        int number = 0;

        if (fieldsetName == DonationsPageFieldsetConstants.TotalCapital) {
            number = 2;
        } else if (fieldsetName == DonationsPageFieldsetConstants.TotalRevenue) {
            number = 3;
        } else if (fieldsetName == DonationsPageFieldsetConstants.Total){
            number = 4 ;
        }
        try {
            WebElement element = formBody_donationsPage.findElement(By.xpath(".//div[5]/div["+number+"]/div/input"));
            extractedText = element.getAttribute("value");
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
            }
        return extractedText ;
    }

    public void clickOnNextButton(){
        clickOnNextButtonByParentElement(formBody_donationsPage);
    }

    public boolean isValidationRulePresentAndDisplayedInDonationsPageByValRuleNumber (String valRuleNumber){
        boolean isPresent = false ;
        if(isValidationRulePresentAndDisplayedByParentElement(formBody_donationsPage , valRuleNumber))
        isPresent = true;
        else isPresent= false ;
        return isPresent;
    }

     public void setTextInValidationExplainationBoxFieldInDonationsPage (String inputText){

         setvalueInValidationTextAreaByParentElement(form_body ,inputText );
     }
}