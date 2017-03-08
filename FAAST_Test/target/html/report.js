$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/SOFa_Donations.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Donations Page",
  "description": "",
  "id": "testing-donations-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"\u003cDonated Fixed Assets\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"\u003cFixed Assets Donated\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"\u003cDonated Intangible Assets\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"\u003cOther Donations Capital\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"\u003cOther Donations Revenue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"\u003cTotal Capital\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"\u003cTotal Revenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"\u003cTotal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 18,
      "value": "# testing the happy path for the sofa donations page ."
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;",
  "rows": [
    {
      "cells": [
        "Donated Fixed Assets",
        "Fixed Assets Donated",
        "Donated Intangible Assets",
        "Other Donations Capital",
        "Other Donations Revenue",
        "Total Capital",
        "Total Revenue",
        "Total"
      ],
      "line": 21,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;1"
    },
    {
      "cells": [
        "10",
        "10",
        "10",
        "10",
        "10",
        "40",
        "10",
        "50"
      ],
      "line": 22,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;2"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "100",
        "100",
        "400",
        "100",
        "500"
      ],
      "line": 23,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;3"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "1",
        "1",
        "4",
        "1",
        "5"
      ],
      "line": 24,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;4"
    },
    {
      "cells": [
        "50",
        "50",
        "50",
        "50",
        "50",
        "200",
        "50",
        "250"
      ],
      "line": 25,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;5"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "500",
        "500",
        "2000",
        "500",
        "2500"
      ],
      "line": 26,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;6"
    },
    {
      "cells": [
        "150",
        "150",
        "150",
        "150",
        "150",
        "600",
        "150",
        "750"
      ],
      "line": 27,
      "id": "testing-donations-page;checking-happy-path-for-donations-page;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6373853631,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"40\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"10\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"50\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 567543017,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 615485937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 144021228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 141624507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 133171153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 129627573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 128542901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 45072080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 39127876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36269243,
  "status": "passed"
});
formatter.after({
  "duration": 183779868,
  "status": "passed"
});
formatter.before({
  "duration": 4492592280,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"100\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"500\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 436292620,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 488870252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 153340075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 118954626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 129931343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 127924270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 121111687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 42752539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36265047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36910132,
  "status": "passed"
});
formatter.after({
  "duration": 176175087,
  "status": "passed"
});
formatter.before({
  "duration": 4304767304,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"4\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"5\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 474424827,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 539619998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 143411468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 134863004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 122489222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 120837291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 120244474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 40737549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36491091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36196694,
  "status": "passed"
});
formatter.after({
  "duration": 178378707,
  "status": "passed"
});
formatter.before({
  "duration": 5912240083,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"50\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"250\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 558996994,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 491414097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 137724020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 131620654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 128354781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 122911870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 123130180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 38555531,
  "status": "passed"
});
formatter.matformatter.result({
  "duration": 29020953611662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 19
    },
    {
      "val": "16",
      "offset": 24
    },
    {
      "val": "70",
      "offset": 84
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTotalAmount_GrantAllocationIncludedThatHasNotYetBeenReceived(int,int,String)"
});
formatter.result({
  "duration": 18627150,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d54.0.2840.98)\n  (Driver info: chromedriver\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6),platform\u003dMac OS X 10.11.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Poonams-MacBook-Pro-3.local\u0027, ip: \u002710.48.12.176\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.24.417412 (ac882d3ce7c0d99292439bf3405780058fcca0a6), userDataDir\u003d/var/folders/lr/8_0gjfnd13s7fwd7fw6jbkh40000gn/T/.org.chromium.Chromium.ebf0Gm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d54.0.2840.98, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 385e8862a5d98cef9b5dd4a1ebda20ca\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\n\tat Utilities.SeleniumUtils.takeScreenshot(SeleniumUtils.java:25)\n\tat com.FAAST.Test.SoFA_CapitalGrantsFREMRequirements.getValueFromTotalRowByColumnNameInCapitalGrantsFREMRequirementsPage(SoFA_CapitalGrantsFREMRequirements.java:112)\n\tat com.FAAST.Test.SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTotalAmount_GrantAllocationIncludedThatHasNotYetBeenReceived(SoFA_CapitalGrantsFREMRequirements_stepdefd.java:133)\n\tat ✽.And I see Total Amount 2015_16 grant allocation included that has not yet been received\"70\"(src/test/resources/SoFA_CapitalGrantsFREMRequirements.feature:29)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 65
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTotalExpenditureRecordedInTheAccountsFromThisGrant(String)"
});
formatter.result({
  "status": "skipped"
});
et": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 121435190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36985055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 35784167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 35670907,
  "status": "passed"
});
formatter.after({
  "duration": 176995177,
  "status": "passed"
});
formatter.before({
  "duration": 4882095939,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Checking happy path for donations page",
  "description": "",
  "id": "testing-donations-page;checking-happy-path-for-donations-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Donations section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Donated Fixed Assets with \"150\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"150\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"150\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"150\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"150\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"600\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"150\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"750\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 454435727,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 622087435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 159115123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 124158984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 128043476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 121899853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 126844039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalCapitalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 38508468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 34281683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "750",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 34926410,
  "status": "passed"
});
formatter.after({
  "duration": 128115251,
  "status": "passed"
});
formatter.uri("src/test/resources/SoFA_CapitalGrant.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"\u003cCondition Improvement Fund_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"\u003cPriority School Building Programme_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"\u003cAcademies Capital Maintenance Fund_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"\u003cDevolved Formula Capital Grant_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"\u003cCentrally Managed Programme_Free Schools_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"\u003cContinuing Commitments_Building Schools for the Future_value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"\u003cOther_value\u003e\" correct",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"\u003cTotals_value\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "# Below is the data set that would be used to run the test againast multiple data values."
    }
  ],
  "line": 18,
  "name": "Data for Happy Path",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path",
  "rows": [
    {
      "cells": [
        "Condition Improvement Fund_value",
        "Priority School Building Programme_value",
        "Academies Capital Maintenance Fund_value",
        "Devolved Formula Capital Grant_value",
        "Centrally Managed Programme_Free Schools_value",
        "Continuing Commitments_Building Schools for the Future_value",
        "Other_value",
        "Totals_value"
      ],
      "line": 20,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;1"
    },
    {
      "cells": [
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "70"
      ],
      "line": 21,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;2"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "100",
        "100",
        "100",
        "100",
        "700"
      ],
      "line": 22,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;3"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "7"
      ],
      "line": 23,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;4"
    },
    {
      "cells": [
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "14"
      ],
      "line": 24,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;5"
    },
    {
      "cells": [
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "350"
      ],
      "line": 25,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;6"
    },
    {
      "cells": [
        "150",
        "150",
        "150",
        "150",
        "150",
        "150",
        "150",
        "1050"
      ],
      "line": 26,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;7"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "3500"
      ],
      "line": 27,
      "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4861674586,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"10\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"70\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 486587887,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 456155292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 177988218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 123531513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 130738791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 122790439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 117741450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 132474686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 123921411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 39580908,
  "status": "passed"
});
formatter.after({
  "duration": 229281671,
  "status": "passed"
});
formatter.before({
  "duration": 4909697830,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"100\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"700\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 439284634,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 473432799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 177926498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 124736990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 123495434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 123998953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 126589703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 131067455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 125547794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 36162979,
  "status": "passed"
});
formatter.after({
  "duration": 127470007,
  "status": "passed"
});
formatter.before({
  "duration": 4645543313,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"1\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"7\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 444672423,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 479425847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 142190548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 122883291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 121573984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 128311768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 121837496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 128142495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 120504261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 40276146,
  "status": "passed"
});
formatter.after({
  "duration": 129402874,
  "status": "passed"
});
formatter.before({
  "duration": 4776715028,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"2\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"14\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 659221865,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 568025381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 145137841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 121802517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 127155149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 119284239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 119711864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 121349174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 121314809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 45217246,
  "status": "passed"
});
formatter.after({
  "duration": 180339783,
  "status": "passed"
});
formatter.before({
  "duration": 4800648476,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"50\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"50\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"350\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 479390798,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 437850110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 141549226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 132653407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 125153865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 122521958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 122571391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 122617328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 122962778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "350",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 45335165,
  "status": "passed"
});
formatter.after({
  "duration": 181061265,
  "status": "passed"
});
formatter.before({
  "duration": 4783403158,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"150\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"150\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"150\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"150\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"150\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"150\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"150\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"1050\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 626215611,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 479566199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 151718382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 117775914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 127510286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 121127942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 121802356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 126358451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 118081738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1050",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 42811966,
  "status": "passed"
});
formatter.after({
  "duration": 176519039,
  "status": "passed"
});
formatter.before({
  "duration": 4958464153,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Checking Happy Path for Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page;checking-happy-path-for-capital-grants-page;data-for-happy-path;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AW"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have navigated to SOFA",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Conditional Improvement Fund with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Priority School Building Programme with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Academies Capital Maintenance Fund with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Devolved Formula Capital Grant with \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Centrally Managed Programme Free School with \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Continuing Commitments Building School for the Future with  \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Other Values with \"500\" correct",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the value of Totals is \"3500\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToSOFA()"
});
formatter.result({
  "duration": 444081680,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 469040564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 52
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInConditionalImprovementFundWith(String)"
});
formatter.result({
  "duration": 156885870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInPrioritySchoolBuildingProgrammeWith(String)"
});
formatter.result({
  "duration": 123802848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 58
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInAcademiesCapitalMaintenanceFundWith(String)"
});
formatter.result({
  "duration": 126129459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 54
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInDevolvedFormulaCapitalGrantWith(String)"
});
formatter.result({
  "duration": 128252173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 63
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInCentrallyManagedProgrammeFreeSchoolWith(String)"
});
formatter.result({
  "duration": 125538574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 78
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInContinuingCommitmentsBuildingSchoolForTheFutureWith(String)"
});
formatter.result({
  "duration": 125932600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 36
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iEnterValueInOtherValuesWithCorrect(String)"
});
formatter.result({
  "duration": 127065429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3500",
      "offset": 30
    }
  ],
  "location": "SoFA_CapitalGrants_stepdefs.iSeeTheValueOfTotalsIs(String)"
});
formatter.result({
  "duration": 41353609,
  "status": "passed"
});
formatter.after({
  "duration": 136748559,
  "status": "passed"
});
});