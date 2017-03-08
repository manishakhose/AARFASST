package com.FAAST.Test.propertyAssets_pageObjects;

import com.FAAST.Test.AR_ApplicationNavigation;
import com.FAAST.Test.sofa_pageObjects.SoFA_BaseClass;

public class PropertyAssets_baseClass extends AR_ApplicationNavigation {


    public enum PropertyAssets_SubMenuOptions {
        DetailsOfPropertyAssetsByAcademy("Details of property assets by Academy:");

        private final String stringValue;

        private PropertyAssets_SubMenuOptions(String s) {
            this.stringValue = s;
        }

        public String toString() {
            return stringValue;
        }
    }

        public void clickPropertyAssets_subMenuOptionByAcademyName(String academyName ){
            clickSubMenuOptionByOptionName(PropertyAssets_SubMenuOptions.DetailsOfPropertyAssetsByAcademy.toString()+academyName);
        }
}


