package com.FAAST.Test.propertyAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PropertyAssets_DetailsOfPropertyAssetByAcademy extends PropertyAssets_baseClass{


    @FindBy(how = How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement PropertyAssets_DetailsOfPropertyAssetByAcademy_body;

    private enum AcademyNamesInDetailsOfPropertyAssetsByAcademy{
        StBedeAcademy("St bede Academy - 350-3368") ;

        private final String stringValue ;
        private AcademyNamesInDetailsOfPropertyAssetsByAcademy(String s) {
            this.stringValue = s;
        }
        public String toString() {
            return stringValue;
        }
    }

    public enum FieldSetName_PropertyAssets_DetailsOfPropertyAssetByAcademy{

        NetBookValue("Net book value") , LengthOfLease("Length of lease") ;
         private final String stringValue ;
         private FieldSetName_PropertyAssets_DetailsOfPropertyAssetByAcademy(String s) {
             this.stringValue = s;
         }
         public String toString() {
             return stringValue;
         }
     }

    public String getHeaderForDetailsOfPropertyAssetsByAcademy(){
        String headerText = "";
        headerText = getFormHeaderTextByParentElement(PropertyAssets_DetailsOfPropertyAssetByAcademy_body);
        return headerText;
    }

    public void setValueInFieldByFieldSetInDetailsOfPropertyAssetByAcademyName(String fieldsetName , String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(PropertyAssets_DetailsOfPropertyAssetByAcademy_body , fieldsetName , inputValue);
    }

    public void clickCheckBoxByFieldsetNameAndParentElementOfRowInPropertyAssets_DetailsOfPropertyAssetByAcademy(){

        WebElement element = PropertyAssets_DetailsOfPropertyAssetByAcademy_body.findElement(By.xpath(""));
        clickElementWithRetry(element);
    }
}
