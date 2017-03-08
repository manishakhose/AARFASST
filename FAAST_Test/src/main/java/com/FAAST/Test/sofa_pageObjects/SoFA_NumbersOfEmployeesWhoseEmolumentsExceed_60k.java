package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFA_NumbersOfEmployeesWhoseEmolumentsExceed_60k extends SoFA_BaseClass {


    @FindBy(how = How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement numbersOfEmployeesWhoseEmolumentsExceed_60k_body;

    @FindBy(how = How.XPATH, using = ".//div[@class='owd-entity-table-body']")
    WebElement table_body;

    private String pageName = "Numbers Of Employees Whose Emoluments Exceed 60k";

    public void clickedNextButtonInNumbersOfEmployeesWhoseEmolumentsExceed_60kPage() {
        clickOnNextButtonByParentElement(numbersOfEmployeesWhoseEmolumentsExceed_60k_body);
        logger.info("Next Button is now clicked in " + pageName);
    }

    public String getFormHeaderName() {
        return getFormHeaderTextByParentElement(numbersOfEmployeesWhoseEmolumentsExceed_60k_body);
    }

    public enum DropDownValues {
        a_60000_70000("£60,001 - £70,000"), a_70000_80000("£70,001 - £80,000"), a_80000_90000("£80,001 - £90,000"),
        a_90000_100000("£90,001 - £100,000"), a_100000_110000("£100,001 - £110,000"), a_110000_120000("£110,001 - £120,000"),
        a_120000_130000("£120,001 - £130,000"), a_130000_140000("£130,001 - £140,000"), a_140000_150000("£140,001 - £150,000"),
        a_150000_160000("£150,001 - £160,000"), a_160000_170000("£160,001 - £170,000"), a_170000_180000("£170,001 - £180,000"),
        a_180000_190000("£180,001 - £190,000"), a_190000_200000("£190,001 - £200,000"), a_200000_210000("£200,001 - £210,000"),
        a_210000_220000("£210,001 - £220,000"), a_220000_230000("£220,001 - £230,000"), a_230000_240000("£230,001 - £240,000"),
        a_240000_250000("£240,001 - £250,000"), a_250000_260000("£250,001 - £260,000"), a_260000_270000("£260,001 - £270,000"),
        a_270000_280000("£270,001 - £280,000"), a_280000_290000("£280,001 - £290,000"), a_290000_300000("£290,001 - £300,000"),
        a_300000_310000("£300,001 - £310,000"), a_310000_320000("£310,001 - £320,000"), a_320000_330000("£320,001 - £330,000"),
        a_330000_340000("£330,001 - £340,000"), a_340000_350000("£340,001 - £350,000"), a_350000_360000("£350,001 - £360,000"),
        a_360000_370000("£360,001 - £370,000"), a_370000_380000("£340,001 - £350,000"), a_380000plus("£380,000+");

        private final String stringValue;

        private DropDownValues(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }



    public void selectDropDownOptionByRowNumber(int rowNumber, String visibleText) {
        try {
            WebElement element = table_body.findElement(By.xpath(".//div[" + rowNumber + "]/div/div/div/div/select"));
            selectElementByVisibleText(element, visibleText);
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Selected the dropdown for row number :" + rowNumber + " with a drop down value of : " + visibleText);
    }

    public void clickRemoveButtonfromTableByRowNumber(int rowNumber) {
        try {
            WebElement element = table_body.findElement(By.xpath(".//div[" + rowNumber + "]/div/div/div/div[@class='buttons']"));
            clickElementWithRetry(element);
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Clicked on the remove button for row number : " + rowNumber + " .");
    }

    public String getValueFromTotalButton() {
        String extractedText = "";
        try {
            WebElement element = numbersOfEmployeesWhoseEmolumentsExceed_60k_body.findElement(By.xpath(".//div[3]/div/div/input"));
            extractedText = element.getAttribute("value");
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Extracted Text from the Totals field is :" + extractedText);
        return extractedText;
    }

    public void setValueInNumberField(String inputValue){
        try {
            WebElement element = numbersOfEmployeesWhoseEmolumentsExceed_60k_body.findElement(By.xpath(".//div[1]/div/input"));
            setValueInElementInput(element, inputValue);
            logger.info("Value set in the Numbers field is :"+ inputValue);
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
            logger.info("Exception Occured : trying to enter value in the  Numbers Field in Class Number Of Employees Exceed ... ");
        }
    }
}