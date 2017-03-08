package com.FAAST.Test;


import Utilities.BrowserFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

import static Utilities.LoggingFactory.getLogger;

public class Hooks {

    public static void welcomeMessage(){
        System.out.println("Welcome to the FAAST test\n" +
                "\n" +
                "This is Sample  Proof of Concept and hope you like it . \n" +
                "\n" +
                "This framework has a few key features which I would like to point out. \n" +
                "\n" +
                "- Page Object Model - page factory used for locators. \n" +
                "\n" +
                "- locators are embedded in methods in page objects and can cater a wider rarer of functionality\n" +
                "\n" +
                "- Page class is abstract and holds more generic methods which are then altered to suite the page object functionality. \n" +
                "\n" +
                "- Logger  is configured for INFO \n" +
                "\n" +
                "- Cucumber using gherkins - given , when - then format in feature file . ");
    }


    @Before

    public  void setUp() throws IOException {

        welcomeMessage();
        BrowserFactory.openBrowser();
        getLogger().info(" >>> Setting up the session\n");
    }

    @After

    public  void tearDown() {

        BrowserFactory.closeBrowser();
        System.out.println("   >>> Session is terminating");
    }

}


