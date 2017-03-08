package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_CurrentInvestments extends BSA_baseClass {


    @FindBy(how= How.XPATH , using = "//form[@id='owdInterviewForm']")
    WebElement BSA_CurrentInvestments_body ;

    public String getHeaderText_BSA_CurrentInvestments(){
        String text = getFormHeaderTextByParentElement(BSA_CurrentInvestments_body);
        logger.info("The Header Text Extracted is : "+ text);
        return text ;
    }

    public enum RowNames_BSA_CurrentInvestments {
        OriginalPriorYearCosingBalance, AdjustmentMadeInRelationToFRS102Adoption, OtherAdjustmentMadeToOpeningBalance, Additions, TransferredInOnConversionLocalAuthority,
        TransferredInOnConversionElsewhere, TransferredInOnExistingAcademiesJoiningTheTrust, TransferredOutOnExistingAcademiesLeavingTheTrust, Disposals,
        Impariments, ReclassificationsFromNonCurrentAssetInvestments, ReclassificationWithinCurrentAssetInvestment, PeriodEndFairValueGainOrLoss, AtCloseOfPeriod

    }
        public enum ColumnNames_BSA_CurrentInvestments {
            Subsidaries, InvestmentPropertyAtCost, SharesBonds, OtherInvestments, InvestmentPropertyAtFV, ManagedFunds, CashDeposit
        }

        public void setValueInTableByRowNameAndColumnName_BSA_CurrentInvestments(RowNames_BSA_CurrentInvestments rowName, ColumnNames_BSA_CurrentInvestments columnName, String inputValue) {

            int rowNumber = 0;
            int columnNumber = 0;

            switch (rowName) {
                case OriginalPriorYearCosingBalance:
                    rowNumber = 2;
                    break;

            }

            switch (columnName) {
                case Subsidaries:
                    columnNumber = 3;
                    break;
                case InvestmentPropertyAtCost:
                    columnNumber = 4;
                    break;
                case SharesBonds:
                    columnNumber = 5;
                    break;
                case OtherInvestments:
                    columnNumber = 6;
                    break;
                case InvestmentPropertyAtFV:
                    columnNumber = 7;
                    break;
                case ManagedFunds:
                    columnNumber = 8;
                    break;
                case CashDeposit:
                    columnNumber = 9;
                    break;
            }
            try {
                WebElement element = BSA_CurrentInvestments_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
                setValueInElementInput(element, inputValue);
            } catch (Exception e) {
                e.printStackTrace();
                takeScreenshot();
            }
        }

        public String getValueFromTableByRowNameAndColumnName_BSA_CurrentInvestments(RowNames_BSA_CurrentInvestments rowName, ColumnNames_BSA_CurrentInvestments columnName) {
            String text = "";
            int columnNumber = 0;
            int rowNumber = 0;

            switch (rowName) {
                case OriginalPriorYearCosingBalance:
                    rowNumber = 2; break;
                case AdjustmentMadeInRelationToFRS102Adoption:
                    rowNumber = 3 ; break;
                case OtherAdjustmentMadeToOpeningBalance:
                    rowNumber = 4 ; break;
                case Additions:
                    rowNumber = 5 ; break;
                case TransferredInOnConversionLocalAuthority:
                    rowNumber = 6 ; break;
                case TransferredInOnConversionElsewhere:
                    rowNumber = 7 ; break;
                case TransferredInOnExistingAcademiesJoiningTheTrust:
                    rowNumber = 8 ; break;
                case TransferredOutOnExistingAcademiesLeavingTheTrust:
                    rowNumber = 9 ; break;
                case Disposals:
                    rowNumber = 10 ; break;
                case Impariments:
                    rowNumber = 11 ; break;
                case ReclassificationsFromNonCurrentAssetInvestments:
                    rowNumber = 12 ; break;
                case ReclassificationWithinCurrentAssetInvestment:
                    rowNumber = 13 ; break;
                case PeriodEndFairValueGainOrLoss:
                    rowNumber = 14 ; break;
                case AtCloseOfPeriod:
                    rowNumber = 15 ; break;
            }
            switch (columnName) {
                case Subsidaries:
                    columnNumber = 3;
                    break;
                case InvestmentPropertyAtCost:
                    columnNumber = 4;
                    break;
                case SharesBonds:
                    columnNumber = 5;
                    break;
                case OtherInvestments:
                    columnNumber = 6;
                    break;
                case InvestmentPropertyAtFV:
                    columnNumber = 7;
                    break;
                case ManagedFunds:
                    columnNumber = 8;
                    break;
                case CashDeposit:
                    columnNumber = 9;
                    break;
            }

            try {
                WebElement element = BSA_CurrentInvestments_body.findElement(By.xpath(".//div[" + columnNumber + "]/div[" + rowNumber + "]/div/input"));
                text = getElementTextWithRetry(element);
            } catch (Exception e) {
                e.printStackTrace();
                takeScreenshot();
            }
            logger.info("The extracted Value from row :" + rowName.toString() + " and column :" + columnName.toString() + " is :" + text);
            return text;
        }
}
