package com.FAAST.Test.balalnceSheetAssets_pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BSA_NonCurrentInvestment extends BSA_baseClass {


    @FindBy(how = How.XPATH, using = "//form[@id="+"owdInterviewForm"+"]")
    private WebElement BSA_NonCurrentInvestment_body;


    protected enum RowNames_BSA_NonCurrentInvestment {
        OriginalPrioryearsClosingBalance, AdjustmentmadeInrelationToFRS102Adoption,
        OtherAdjustmentMadeToOpeningBalance, Additions, TransferredInOnConversionLocalAuthority, TransferredInOnConversionElsewhere,
        TransferredInOnExistingAcademiesJoiningTheTrust, TransferredOutOnExistingAcademiesLeavingTheTrust, Disposals, Impairments,
        ReclassificationFromCurrentAssetInvestments , ReclassificationToCurrentAssetInvestments , ReclassificationWithinNonCurrentInvestments ,
        PeriodEndFairValueGain , AtCloseOfPeriod }


    protected enum ColumnNames_BSA_NonCurrentInvestment {
        Subsidaries , InbestmentpropertyAtCost , SharesBonds , OtherInvestmentAtFV , ManagedFundsAtFV , cashDepositAtFV
    }

    public void setValueInTableByRowNameAndColumnNameInBSA_NonCurrentInvestment(RowNames_BSA_NonCurrentInvestment rowName , ColumnNames_BSA_NonCurrentInvestment columnName , String inputValue) {
        int rowNumber = 0 ;
        int columnNumber = 0 ;

        switch (rowName){
            case OriginalPrioryearsClosingBalance:
                rowNumber = 2 ; break;
            case AdjustmentmadeInrelationToFRS102Adoption:
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
            case Impairments:
                rowNumber = 11 ; break;
            case ReclassificationFromCurrentAssetInvestments:
                rowNumber = 12 ; break;
            case ReclassificationToCurrentAssetInvestments:
                rowNumber = 13 ; break;
            case ReclassificationWithinNonCurrentInvestments:
                rowNumber = 14 ; break;
            case PeriodEndFairValueGain:
                rowNumber = 15 ; break;
            case AtCloseOfPeriod:
                rowNumber = 16 ; break;
        }

    }

}

