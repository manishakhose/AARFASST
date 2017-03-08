package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_Stock extends BSA_baseClass {


    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_Stock_body;

    public String getHeaderText_BSA_Stock(){
        String text = getFormHeaderTextByParentElement(BSA_Stock_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum FieldsetName_BSA_Stock{
        Clothing , Catering , Statinaery , Other , Total
    }

    public void setValueInFieldByfieldsetNameInBSA_Stocks( FieldsetName_BSA_Stock fieldsetName ,  String inputValue){
        setValueInInputFieldByParentElementAndFieldsetName(BSA_Stock_body , fieldsetName.toString(),inputValue);
    }

    public String getvalueFromfieldByFieldsetName(FieldsetName_BSA_Stock fieldsetName){
        return getValueOfAttributeFromFieldByParentElementAndFieldsetName(BSA_Stock_body , fieldsetName.toString());
    }
}
