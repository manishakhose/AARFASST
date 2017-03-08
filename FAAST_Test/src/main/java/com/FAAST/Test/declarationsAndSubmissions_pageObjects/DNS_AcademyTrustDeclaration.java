package com.FAAST.Test.declarationsAndSubmissions_pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DNS_AcademyTrustDeclaration extends DNS_baseClass {

    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement DNS_AcademyTrustDeclaration_body ;

}
