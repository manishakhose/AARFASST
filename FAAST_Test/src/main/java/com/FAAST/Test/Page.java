package com.FAAST.Test;


import Utilities.BrowserFactory;
import Utilities.LoggingFactory;
import com.google.common.base.Function;
import jdk.internal.org.objectweb.asm.tree.analysis.Value;
import org.apache.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;



public abstract class Page extends BrowserFactory {

    @FindBy(how= How.XPATH ,using = "//div[@class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-front alert ui-dialog-buttons ui-draggable ui-resizable']")
    WebElement helpDialogBox_body ;


    @FindBy(how=How.XPATH , using = "//div[@id='content']")
    WebElement formContent_body ;

    public String webDriverWaitTimeout;
    protected WebDriverWait wait = new WebDriverWait(driver,10);
    protected Logger logger = LoggingFactory.getLogger();

    public void getConfigProperties() throws IOException {
        Properties properties= new Properties();
        FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir")+ "/src/config.properties");
        properties.load(fileInputStream);

        webDriverWaitTimeout= properties.getProperty("webDriverWaitTimeout");
    }


    protected void clickElementWithRetry(final WebElement element) {
        // Click Element With Retry : this will wait for the element to be clickable until timeout
        FluentWait<WebElement> customWait = new FluentWait<WebElement>(element)
                .withTimeout(20, TimeUnit.SECONDS)
                .pollingEvery(200, TimeUnit.MILLISECONDS).ignoring(StaleElementReferenceException.class);

        customWait.until(new Function<WebElement, Boolean>() {
            public Boolean apply(WebElement element) {
                try {
                    element.click();
                    return true;
                } catch (Exception e) {
                    takeScreenshot();
                    return false;
                }
            }
        });
    }

    protected void waitForElementToBeVisible(final WebElement element){
        FluentWait<WebElement> customWait = new FluentWait<WebElement>(element)
                .withTimeout(20, TimeUnit.SECONDS)
                .pollingEvery(200, TimeUnit.MILLISECONDS).ignoring(StaleElementReferenceException.class);

        customWait.until(new Function<WebElement, Boolean>() {
            public Boolean apply(WebElement element) {
                try {
                    element.isDisplayed();
                    return true;
                } catch (Exception e) {
                    takeScreenshot();
                    return false;
                }
            }
        });
    }

    protected boolean isElementPresentAndDisplayed(WebElement element){
        boolean isPresentAndDisplayed = element.isDisplayed();
        return isPresentAndDisplayed;
    }


    protected void selectElementByVisibleText(WebElement element , String visibleText){
        Select select = new Select(element);
        select.selectByVisibleText(visibleText);
        logger.info("Selected text is :"+ visibleText);
    }

    protected void selectElementByVisibleTextAndFielsetName(WebElement parentElement  , String visibleText , String fieldsetName){
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div/label[contains(.,'"+fieldsetName+"')]/../../div/div/select"));
            Select select = new Select(element);
            select.selectByVisibleText(visibleText);
            logger.info("Selected text is :" + visibleText);
        }catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
            logger.info("Screen shot has been taken !");
        }
    }

//    protected void setValueInElementInput10(WebElement elementInput , String inputValue){
//        try {
//            //elementInput.click();
//            elementInput.clear();
//            elementInput.sendKeys(inputValue);
//
//        } catch (Exception e){
//            e.printStackTrace();
//            takeScreenshot();
//            logger.info("Exception Occurred !");
//        }
//
//    }
//
//    protected void setValueInElementInput1(WebElement elementInput , String inputValue){
//        try {
//           clickElementWithRetry(elementInput);
//            elementInput.clear();
//            Actions actionList = new Actions(driver);
//            //actionList.click(elementInput).sendKeys(inputValue).build().perform();
//           actionList.clickAndHold(elementInput).sendKeys(inputValue).
//                    release().build().perform();
//
//
//        } catch (Exception e){
//            e.printStackTrace();
//            takeScreenshot();
//            logger.info("Exception Occurred !");
//        }
//
//    }


    protected void setValueInElementInput(WebElement elementInput , String inputValue){
        try {
            JavascriptExecutor js = (JavascriptExecutor)driver;
            js.executeScript("arguments[0].value = '';", elementInput);
            elementInput.sendKeys(inputValue);
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
            logger.info("Exception Occurred !");
        }

    }

//    protected void setValueInElementInput2(WebElement elementInput , String inputValue){
//        try {
//            elementInput.click();
//            elementInput.clear();
//            elementInput.sendKeys(inputValue);
//        } catch (Exception e){
//            e.printStackTrace();
//            takeScreenshot();
//            logger.info("Exception Occurred !");
//        }
//
//    }
//
//    protected void setValueInElementInput4(WebElement elementInput , String inputValue){
//        try {
//            elementInput.click();
//
//            elementInput.clear();
//            explicitWait(500);
//            Actions mouse2 = new Actions(driver);
//            mouse2.clickAndHold(elementInput).sendKeys(Keys.chord(Keys.CONTROL, "a"), inputValue).build().perform();
//
////            JavascriptExecutor js = (JavascriptExecutor) driver;
////            js.executeScript("arguments[0].onchange()", elementInput);
////            js.executeScript(inputValue, elementInput);
////
//
//
//        } catch (Exception e){
//            e.printStackTrace();
//            takeScreenshot();
//            logger.info("Exception Occurred !");
//        }
//
//    }

    public void explicitWait(int waitTime){
        try {
           Thread.sleep(waitTime);
        }catch(InterruptedException ie){
            ie.printStackTrace();
            logger.info("Interrupted Exception Occurred !");
        }
    }

    protected static String getElementTextWithRetry(final WebElement element) {
        FluentWait<WebElement> customWait = new FluentWait<WebElement>(element).withTimeout(15, TimeUnit.SECONDS)
                .pollingEvery(500, TimeUnit.MILLISECONDS).ignoring(StaleElementReferenceException.class);

        return customWait.until(new Function<WebElement, String>() {
            public String apply(WebElement element) {
                return element.getText();
            }
        });
    }

    protected String getSliderButtonValue(){
        String sliderButtonValue= "";
        try {
            sliderButtonValue = driver.findElement(By.xpath("//div[@class='cs-scalc__range-slider']//p[contains(text(),'Your current score')]/following-sibling::input")).getAttribute("value");
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        return sliderButtonValue;
    }

    protected void clickAndDragRefreshIntervalSliderButton(int interval, WebElement dragRefreshIntervalSlider_btn) {
        try {
            Actions actions = new Actions(driver);
            moveToElement(dragRefreshIntervalSlider_btn,actions);
            clickElementWithRetry(dragRefreshIntervalSlider_btn);
            String intervalString = dragRefreshIntervalSlider_btn.getAttribute("value");
            while (Integer.parseInt(intervalString) != interval) {
                if (Integer.parseInt(intervalString) < interval) {
                    actions.sendKeys(Keys.ARROW_RIGHT).build().perform();
                } else {
                    actions.sendKeys(Keys.ARROW_LEFT).build().perform();
                }
                intervalString = dragRefreshIntervalSlider_btn.getAttribute("value");
            }
            logger.info("Clicked and dragged the interval slider button with a current setting of: " + intervalString);
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
    }

    protected void moveToElement(WebElement element, Actions action ){
        try{

            action.moveToElement(element);
            waitForElementToBeVisible(element);
        }catch (Exception e){
            e.printStackTrace();takeScreenshot();
            logger.info("The driver could not move the element : Exception Occurred !  , Please check the locator.");
        }
        logger.info("Moving to element"+ element.getText());
    }


    protected void clickOnNextButtonByParentElement(WebElement parentElement){
        try{
            WebElement element = parentElement.findElement(By.xpath(".//button[@class='owd-submit']"));
            clickElementWithRetry(element);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
    }

    protected void setValueInInputFieldByParentElementAndFieldsetName(WebElement parentElement , String fieldsetName , String inputValue){
        try {
            WebElement inputFieldElement = parentElement.findElement(By.xpath(".//div/label[contains(text(),'" + fieldsetName + "')]/../..//div/input"));
            setValueInElementInput(inputFieldElement,inputValue);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }
        logger.info("\nThe Value set in the "+fieldsetName+" input box is "+ inputValue);
    }

    protected String getValuefromFieldByParentElementAndFieldsetName(WebElement parentElement  , String fieldsetName) {
        String text = "";
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div/div/label[contains(text(),'"+fieldsetName+"')]"));
            text = getElementTextWithRetry(element);
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Extracted Value from the Element " + fieldsetName + "is : " + text);
        return text;
    }

    protected String getValueOfAttributeFromFieldByParentElementAndFieldsetName(WebElement parentElement  , String fieldsetName) {
        String text = "";
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div/div/label[contains(text(),'"+fieldsetName+"')]/../../div/input"));
            text = element.getAttribute("value").toString();
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Extracted Value from the Element " + fieldsetName + "is : " + text);
        return text;
    }

    protected void clickRadioButtonOptionsYesOrNoByParentElement(WebElement parentElement , String fieldsetName,String optionName){
        int optionNumber = 0  ;
        if(optionName=="Yes"){
         optionNumber=1 ;
        }
        else if (optionName == "No"){
            optionNumber=2;
        }
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div/label[contains(text(),'"+fieldsetName+"')]/../..//div["+optionNumber+"]/label/input"));
        clickElementWithRetry(element);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("clicked the radio button"+ optionName+" .");
    }


    protected void clickOnQuestionHelpButtonByParentElementAndFieldetName( WebElement parentElement, String fieldsetName){
      try {
          WebElement element = parentElement.findElement(By.xpath(".//label[contains(text(),'" + fieldsetName + "')]/img"));
          clickElementWithRetry(element);
      }catch (NoSuchElementException nsee){
          nsee.printStackTrace();
          takeScreenshot();
      }
    logger.info("Clicked the ? Help Button ");
    }


    protected String getValueFromHelpDialog(WebElement dialog_body){
        String text = "" ;
       try {
           WebElement element = dialog_body.findElement(By.xpath(".//div[@id='myDialog']"));

           text = getElementTextWithRetry(element);
       } catch (NoSuchElementException nsee){
           nsee.printStackTrace();
           takeScreenshot();
       }
        logger.info("The Extracted Text from the Help Diaglog is "+ text+ " .");
        return text ;
    }


    protected void clickOkButtonOnHelpDialog(){
        try {
            WebElement element = helpDialogBox_body.findElement(By.xpath(".//button[@type='button']"));
            clickElementWithRetry(element);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }
        logger.info("Clicked on the OK Button in ? Help Dialog ");
    }


    protected String getFormHeaderTextByParentElement(WebElement parentElement){
        String headerText = "";
        try {
            WebElement element = parentElement.findElement(By.xpath(".//h1"));
            headerText= getElementTextWithRetry(element);

        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        return headerText;
    }

    protected String getHelpDialogBoxHeaderText(){
        WebElement element = null ;
        try {
             element = helpDialogBox_body.findElement(By.xpath(".//span[@id='ui-id-1']"));
        }catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        return getElementTextWithRetry(element);
    }

    protected void clickBackButtonOnPage(){
        try {
            WebElement backButtonElement = formContent_body.findElement(By.xpath(".//button[@class='owd-back']"));
            clickElementWithRetry(backButtonElement);
        }catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info(" Clicked the Back Button");
    }

    protected void setMessageInValidationExplainatioTextFieldByParentElement(WebElement parentElement , String explanationMessage){
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div/textarea"));
            setValueInElementInput(element, explanationMessage);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e ){
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Explaination Message entered is :"+explanationMessage);
    }

    protected void clickOnAddInstanceButton() {
        try {
            WebElement element = formContent_body.findElement(By.xpath(".//div/button[@class='owd-add']"));
            clickElementWithRetry(element);
        } catch (NoSuchElementException nsee) {
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e) {
            e.printStackTrace();
            takeScreenshot();
        }
        logger.info("Clicked on the Add Instance Button");
    }

    protected boolean isExplainationForValidationPresentAndDisplayedByValidationNumber(WebElement parentElement,String valNUmber){
        boolean isPresentAndDisplayed = false ;
        try {
            WebElement element = parentElement.findElement(By.xpath(".//div[@class='question ']/label[contains(.,'" + valNUmber.toString() + "')]"));

            isPresentAndDisplayed = isElementPresentAndDisplayed(element);
        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        } catch (Exception e){
            e.printStackTrace();
            takeScreenshot();
        }
        return isPresentAndDisplayed;
    }


    protected void setvalueInValidationTextAreaByParentElement(WebElement parentEelement , String inputText){
        try{
            WebElement element = parentEelement.findElement(By.xpath(".//div/textarea"));
            if (element.isDisplayed()) {
                setValueInElementInput(element, inputText);
            } else {
                logger.info("\nThe Validation BOX is not present ");
            }

        } catch (NoSuchElementException nsee){
            nsee.printStackTrace();
            takeScreenshot();
        }
        logger.info("The Value entered in the validation text area is "+ inputText);
    }

    protected boolean isValidationRulePresentAndDisplayedByParentElement(WebElement parentElement , String valRuleNumber){
        boolean isPresentAndDisplayed = false ;
        try {
            WebElement element = getDriver().findElement(By.xpath(".//div[@id='messages']/p[contains(text(),'" + valRuleNumber+"')]"));
            if(isElementPresentAndDisplayed(element)){
                isPresentAndDisplayed = true ;
            }else {isPresentAndDisplayed = false;}

        } catch (NoSuchElementException nsee){
            logger.info("\nThe Validation Rule ' "+valRuleNumber+" ' Triggered Status is :"+ isPresentAndDisplayed+" .");
            isPresentAndDisplayed = false ;
            return isPresentAndDisplayed;
        }
        logger.info("\nThe current present and displayed state of Validation Rule NUmber :"+valRuleNumber+" is: "+isPresentAndDisplayed+" .");
        return isPresentAndDisplayed ;
    }


}