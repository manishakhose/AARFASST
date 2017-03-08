package com.FAAST.Test.sofa_pageObjects;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SoFa_RelatedPartyTransactions_TrusteeRemuneration extends SoFA_BaseClass {

    @FindBy(how= How.XPATH, using = "//form[@id='owdInterviewForm']")
    WebElement relatedPartyTransactions_TrusteeRemuneration_body;

    private String pageName= "Related Party Transactions Trustee Remuneration Page";

    public void clickedNextButtonInRelatedPartyTransactions_TrusteeRemunerationPage(){
        clickOnNextButtonByParentElement(relatedPartyTransactions_TrusteeRemuneration_body);
        logger.info("Next Button is now clicked in "+pageName);
    }
    public String getFormHeaderName(){
        return getFormHeaderTextByParentElement(relatedPartyTransactions_TrusteeRemuneration_body);
    }

    public enum DropDownValues {
        a_1_60000("£1-£60,000")                 , a_60001_70000("£60,001-£70,000")      , a_70001_80000("£70,001-£80,000")      ,
        a_80001_90000("£80,001-£90,000")        , a_90001_100000("£90,001-£100,000")    , a_100001_110000("£100,001-£110,000")  ,
        a_110001_120000("£110,001-£120,000")    , a_120001_130000("£120,001-£130,000")  , a_130001_140000("£130,001-£140,000")  ,
        a_140001_150000("£140,001-£150,000")    , a_150001_160000("£150,001-£160,000")  , a_160001_170000("£160,001-£170,000")  ,
        a_170001_180000("£170,001-£180,000")    , a_180001_190000("£180,001-£190,000")  , a_190001_200000("£190,001-£200,000")  ,
        a_200001_210000("£200,001-£210,000")    , a_210001_220000("£210,001-£220,000")  , a_220001_230000("£220,001-£230,000")  ,
        a_230001_240000("£230,001-£240,000")    , a_240001_250000("£240,001-£250,000")  , a_250001_260000("£250,001-£260,000")  ,
        a_£260001_270000("£260,001-£270,000")   , a_270001_280000("£270,001-£280,000")  , a_280001_290000("£280,001-£290,000")  ,
        a_290001_300000("£290,001-£300,000")    , a_300001_310000("£300,001-£310,000")  , a_310001_320000("£310,001-£320,000")  ,
        a_320001_330000("£320,001-£330,000")    , a_330001_340000("£330,001-£340,000")  , a_340001_350000("£340,001-£350,000")  ,
        a_350001_360000("£350,001-£360,000")    , a_360001_370000("£360,001-£370,000")  , a_370001_380000("£370,001-£380,000")  ,
        a_380001("£380,001+");

        private final String stringValue;

        private DropDownValues(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

    public enum ColumnNames{NumberPaidAsTrustees , NumberPaidAsStaff, Total}


    public void setValueInTableByRowNumberAndColumnName(int rowNumber ,ColumnNames columnNames , String inputValue) throws InterruptedException {
        int columnNumber = 0 ;
        if(columnNames == ColumnNames.NumberPaidAsTrustees){
            columnNumber = 2 ;
        }
        else if (columnNames == ColumnNames.NumberPaidAsStaff){
            columnNumber = 3 ;
        }
        WebElement element = relatedPartyTransactions_TrusteeRemuneration_body.findElement(By.xpath(".//div/div/div/div["+rowNumber+"]/div["+columnNumber+"]/div/div/input"));
        setValueInElementInput(element , inputValue);
        element.sendKeys(Keys.TAB);

    }

    public void selectDropDownvalueInTableByRowNumber(int rowNumber , String val){

           try {
                WebElement element = relatedPartyTransactions_TrusteeRemuneration_body.findElement(By.xpath(".//div/div/div[" + rowNumber + "]/div/div[1]/div/div/select"));
                selectElementByVisibleText(element, val);
            } catch (NoSuchElementException nsee) {
                nsee.printStackTrace();
                takeScreenshot();
            } catch (Exception e) {
                e.printStackTrace();
                takeScreenshot();
            }
            logger.info("The drop Down Selected Value for Row Number :" + rowNumber + " is :" + val);
        }


    public String getValueFromColumnNameByRowNUmber(int rowNumber  , ColumnNames columnNames){
        String extractedTextValue = "" ;
        int columnNumber = 0 ;
        if(columnNames == ColumnNames.NumberPaidAsTrustees){
            columnNumber = 2 ;
        }
        else if (columnNames == ColumnNames.NumberPaidAsStaff){
            columnNumber = 3 ;
        }
        else if (columnNames == ColumnNames.Total){
            columnNumber = 4 ;
        }
        WebElement element = relatedPartyTransactions_TrusteeRemuneration_body.findElement(By.xpath("//div/div/div/div["+rowNumber+"]/div["+columnNumber+"]/div/div/input"));
        clickElementWithRetry(element);
        extractedTextValue = element.getAttribute("value") ;
        return extractedTextValue ;
    }



    public String getValueFromTotalsByColumnName(ColumnNames columnNames) throws InterruptedException {
        int columnNumber = 0 ;
        String extractedText = "";

        if(columnNames == ColumnNames.NumberPaidAsTrustees){
            columnNumber = 3 ;
        }
        else if (columnNames == ColumnNames.NumberPaidAsStaff){
            columnNumber = 4 ;
        }
        else if (columnNames == ColumnNames.Total){
            columnNumber = 5 ;
        }
        WebElement element = relatedPartyTransactions_TrusteeRemuneration_body.findElement(By.xpath(".//div/div["+columnNumber+"]/div/input"));
        extractedText = element.getAttribute("value") ;
        return extractedText ;
    }

    public void clickInAppBody(){
        clickElementWithRetry(relatedPartyTransactions_TrusteeRemuneration_body);
    }
}
