$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/sofa_resources/SOFa_Donations.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Donations Page",
  "description": "",
  "id": "testing-donations-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DON"
    },
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
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
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;",
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;1"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;2"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;3"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;4"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;5"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;6"
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
      "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9215123387,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "duration": 2938483147,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 1058641591,
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
  "duration": 149909619,
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
  "duration": 88519351,
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
  "duration": 87574226,
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
  "duration": 84324825,
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
  "duration": 81211464,
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
  "duration": 37514052,
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
  "duration": 38357660,
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
  "duration": 37255628,
  "status": "passed"
});
formatter.after({
  "duration": 211342407,
  "status": "passed"
});
formatter.before({
  "duration": 4024220341,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "duration": 2304322009,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 549947427,
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
  "duration": 92631774,
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
  "duration": 91976937,
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
  "duration": 77030774,
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
  "duration": 77075870,
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
  "duration": 80536729,
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
  "duration": 42727997,
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
  "duration": 36438796,
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
  "duration": 39261633,
  "status": "passed"
});
formatter.after({
  "duration": 176377167,
  "status": "passed"
});
formatter.before({
  "duration": 3206652195,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "duration": 7886265340,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 505074693,
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
  "duration": 88348891,
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
  "duration": 81230440,
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
  "duration": 81794415,
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
  "duration": 75936458,
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
  "duration": 76835273,
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
  "duration": 36860104,
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
  "duration": 35129900,
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
  "duration": 36973466,
  "status": "passed"
});
formatter.after({
  "duration": 132565770,
  "status": "passed"
});
formatter.before({
  "duration": 3265565777,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "duration": 2729519073,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 1121911391,
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
  "duration": 89224302,
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
  "duration": 91217618,
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
  "duration": 85921580,
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
  "duration": 77158657,
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
  "duration": 72701796,
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
  "duration": 37273325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalRevenueFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 36262006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 41
    }
  ],
  "location": "SoFa_Donations_stepdefs.iSeeTheTotalFieldIsPopulatedWith(String)"
});
formatter.result({
  "duration": 37199999,
  "status": "passed"
});
formatter.after({
  "duration": 127089682,
  "status": "passed"
});
formatter.before({
  "duration": 8076327004,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "name": "I enter value in Donated Fixed Assets with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Fixed Assets Donated with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Donated Intangible Assets with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Other Donations Capital with \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Other Donations Revenue \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see the Total Capital field is populated with \"2000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the Total Revenue field is populated with \"500\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see the Total field is populated with \"2500\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2603818301,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 527769023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedFixedAssetsWith(String)"
});
formatter.result({
  "duration": 99791051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 44
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInFixedAssetsDonatedWith(String)"
});
formatter.result({
  "duration": 92905442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 49
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInDonatedIntangibleAssetsWith(String)"
});
formatter.result({
  "duration": 98413461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 47
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsCapitalWith(String)"
});
formatter.result({
  "duration": 83974802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 42
    }
  ],
  "location": "SoFa_Donations_stepdefs.iEnterValueInOtherDonationsRevenue(String)"
});
formatter.result({
  "duration": 87749594,
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
  "duration": 39447589,
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
  "duration": 35571860,
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
  "duration": 37484296,
  "status": "passed"
});
formatter.after({
  "duration": 128940775,
  "status": "passed"
});
formatter.before({
  "duration": 3340655795,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Checking Donations Section with Valid Credentials",
  "description": "",
  "id": "testing-donations-page;checking-donations-section-with-valid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DEMO"
    },
    {
      "line": 4,
      "name": "@TOM"
    },
    {
      "line": 4,
      "name": "@DON"
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
  "duration": 2203159514,
  "status": "passed"
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iNavigateToDonationsSection()"
});
formatter.result({
  "duration": 535495287,
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
  "duration": 97190624,
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
  "duration": 91599430,
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
  "duration": 79708967,
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
  "duration": 79902992,
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
  "duration": 78189407,
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
  "duration": 37656507,
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
  "duration": 37263011,
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
  "duration": 35086281,
  "status": "passed"
});
formatter.after({
  "duration": 130492013,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_CapitalGrant.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Capital Grants Page",
  "description": "",
  "id": "testing-capital-grants-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path",
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;1"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;2"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;3"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;4"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;5"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;6"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;7"
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
      "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3496110712,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 7645297129,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 573651463,
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
  "duration": 93564726,
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
  "duration": 81991308,
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
  "duration": 74773407,
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
  "duration": 73649333,
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
  "duration": 73393300,
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
  "duration": 80052542,
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
  "duration": 76259588,
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
  "duration": 36252202,
  "status": "passed"
});
formatter.after({
  "duration": 177697436,
  "status": "passed"
});
formatter.before({
  "duration": 3731311603,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 2276329056,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 533509864,
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
  "duration": 90809533,
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
  "duration": 85775175,
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
  "duration": 76302454,
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
  "duration": 73587586,
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
  "duration": 81470034,
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
  "duration": 76188975,
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
  "duration": 77385532,
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
  "duration": 36386819,
  "status": "passed"
});
formatter.after({
  "duration": 181403099,
  "status": "passed"
});
formatter.before({
  "duration": 3819726303,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 2212315323,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 518674013,
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
  "duration": 86570751,
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
  "duration": 83047643,
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
  "duration": 81166918,
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
  "duration": 76213934,
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
  "duration": 72137606,
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
  "duration": 75001386,
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
  "duration": 70906802,
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
  "duration": 36515154,
  "status": "passed"
});
formatter.after({
  "duration": 179817586,
  "status": "passed"
});
formatter.before({
  "duration": 8807293835,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 2246827918,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 519759853,
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
  "duration": 87899300,
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
  "duration": 88475488,
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
  "duration": 79766385,
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
  "duration": 73273014,
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
  "duration": 76103969,
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
  "duration": 79010217,
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
  "duration": 78213341,
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
  "duration": 35750922,
  "status": "passed"
});
formatter.after({
  "duration": 193898367,
  "status": "passed"
});
formatter.before({
  "duration": 3715030514,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 7701092683,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 540351153,
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
  "duration": 88867207,
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
  "duration": 85979037,
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
  "duration": 73618731,
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
  "duration": 77529144,
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
  "duration": 78408179,
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
  "duration": 77786206,
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
  "duration": 76971845,
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
  "duration": 36425966,
  "status": "passed"
});
formatter.after({
  "duration": 181798272,
  "status": "passed"
});
formatter.before({
  "duration": 3217273551,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 2099420343,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 514767231,
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
  "duration": 87526855,
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
  "duration": 90186708,
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
  "duration": 76217467,
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
  "duration": 77737739,
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
  "duration": 76151163,
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
  "duration": 75912477,
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
  "duration": 78026579,
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
  "duration": 36565751,
  "status": "passed"
});
formatter.after({
  "duration": 126352900,
  "status": "passed"
});
formatter.before({
  "duration": 3489904133,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Checking Capital Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-capital-grants-page;checking-capital-grants-section-with-valid-credentials;data-for-happy-path;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Debbie"
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
  "duration": 2456184718,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrants_stepdefs.iHaveNavigatedToCapitalGrantsSection()"
});
formatter.result({
  "duration": 535762202,
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
  "duration": 91742958,
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
  "duration": 86008756,
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
  "duration": 71791552,
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
  "duration": 75327483,
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
  "duration": 76354912,
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
  "duration": 81794805,
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
  "duration": 81340093,
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
  "duration": 37258643,
  "status": "passed"
});
formatter.after({
  "duration": 131041080,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_CapitalGrantsFREMRequirements.feature");
formatter.feature({
  "line": 1,
  "name": "DfE/EFA Capital Grant FREM Requirement Page",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing the Capital Grants FREM Page with Valid Credentials",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants FREM section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter in row Conditional Improvement funds with column Value Cash Received In Period \"\u003cCIF_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cCIF_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter in row Priority School Building Programme with column Value Cash Received In Period \"\u003cPSBP_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cPSBP_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"\u003cACMF_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cACMF_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"\u003cDFC_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cDFC_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"\u003cCMP_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cCMP_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"\u003cBSF_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cBSF_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter in row Others with column Value Cash Received In Period \"\u003cOth_CRIP\u003e\" and Column Expendituire Recorded with \"\u003cOth_ER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the Totals for column name Cash Received In Period is \"\u003cT_CRIP\u003e\" and column name Expendituire Recorded with \"\u003cT_ER\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "CIF_CRIP",
        "CIF_ER",
        "PSBP_CRIP",
        "PSBP_ER",
        "ACMF_CRIP",
        "ACMF_ER",
        "DFC_CRIP",
        "DFC_ER",
        "CMP_CRIP",
        "CMP_ER",
        "BSF_CRIP",
        "BSF_ER",
        "Oth_CRIP",
        "Oth_ER",
        "T_CRIP",
        "T_ER"
      ],
      "line": 19,
      "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;1"
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
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "7",
        "7"
      ],
      "line": 20,
      "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;2"
    },
    {
      "cells": [
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "35",
        "35"
      ],
      "line": 21,
      "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;3"
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
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "70",
        "70"
      ],
      "line": 22,
      "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;4"
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
        "100",
        "100",
        "100",
        "100",
        "100",
        "100",
        "100",
        "700",
        "700"
      ],
      "line": 23,
      "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8112271067,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Testing the Capital Grants FREM Page with Valid Credentials",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants FREM section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter in row Conditional Improvement funds with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter in row Priority School Building Programme with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter in row Others with column Value Cash Received In Period \"1\" and Column Expendituire Recorded with \"1\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the Totals for column name Cash Received In Period is \"7\" and column name Expendituire Recorded with \"7\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2128882804,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iHaveNavigatedToCapitalGrantsFREMSection()"
});
formatter.result({
  "duration": 89133919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 88
    },
    {
      "val": "1",
      "offset": 130
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowConditionalImprovementFundsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 703363853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 93
    },
    {
      "val": "1",
      "offset": 135
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowPrioritySchoolBuildingProgrammeWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 177126056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 94
    },
    {
      "val": "1",
      "offset": 136
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowAcademiesCapitalMaintenanceFundWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 179511962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 89
    },
    {
      "val": "1",
      "offset": 131
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowDevolvedFormulaCapitalGrantWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 175121392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 99
    },
    {
      "val": "1",
      "offset": 141
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowCentrallyManagedProgrammeFreeSchoolsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 185448449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 113
    },
    {
      "val": "1",
      "offset": 155
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowContinuingCommitmentsBuildingSchoolsForTheFutureWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 184168464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 107
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowOthersWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 185254779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 61
    },
    {
      "val": "7",
      "offset": 108
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTheTotalsForColumnNameCashReceivedInPeriodIsAndColumnNameExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 84903143,
  "status": "passed"
});
formatter.after({
  "duration": 127615524,
  "status": "passed"
});
formatter.before({
  "duration": 3636579325,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Testing the Capital Grants FREM Page with Valid Credentials",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants FREM section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter in row Conditional Improvement funds with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter in row Priority School Building Programme with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter in row Others with column Value Cash Received In Period \"5\" and Column Expendituire Recorded with \"5\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the Totals for column name Cash Received In Period is \"35\" and column name Expendituire Recorded with \"35\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 7723654430,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iHaveNavigatedToCapitalGrantsFREMSection()"
});
formatter.result({
  "duration": 86822226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 88
    },
    {
      "val": "5",
      "offset": 130
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowConditionalImprovementFundsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 840026967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 93
    },
    {
      "val": "5",
      "offset": 135
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowPrioritySchoolBuildingProgrammeWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 180245090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 94
    },
    {
      "val": "5",
      "offset": 136
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowAcademiesCapitalMaintenanceFundWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 181001450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 89
    },
    {
      "val": "5",
      "offset": 131
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowDevolvedFormulaCapitalGrantWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 171477408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 99
    },
    {
      "val": "5",
      "offset": 141
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowCentrallyManagedProgrammeFreeSchoolsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 191345842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 113
    },
    {
      "val": "5",
      "offset": 155
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowContinuingCommitmentsBuildingSchoolsForTheFutureWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 187622450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 65
    },
    {
      "val": "5",
      "offset": 107
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowOthersWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 197259419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 61
    },
    {
      "val": "35",
      "offset": 109
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTheTotalsForColumnNameCashReceivedInPeriodIsAndColumnNameExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 85961960,
  "status": "passed"
});
formatter.after({
  "duration": 127595165,
  "status": "passed"
});
formatter.before({
  "duration": 3832066866,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Testing the Capital Grants FREM Page with Valid Credentials",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants FREM section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter in row Conditional Improvement funds with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter in row Priority School Building Programme with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter in row Others with column Value Cash Received In Period \"10\" and Column Expendituire Recorded with \"10\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the Totals for column name Cash Received In Period is \"70\" and column name Expendituire Recorded with \"70\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2198807562,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iHaveNavigatedToCapitalGrantsFREMSection()"
});
formatter.result({
  "duration": 94357445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 88
    },
    {
      "val": "10",
      "offset": 131
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowConditionalImprovementFundsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 698285406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 93
    },
    {
      "val": "10",
      "offset": 136
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowPrioritySchoolBuildingProgrammeWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 175779120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 94
    },
    {
      "val": "10",
      "offset": 137
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowAcademiesCapitalMaintenanceFundWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 181892070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 89
    },
    {
      "val": "10",
      "offset": 132
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowDevolvedFormulaCapitalGrantWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 196248637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 99
    },
    {
      "val": "10",
      "offset": 142
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowCentrallyManagedProgrammeFreeSchoolsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 186594860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 113
    },
    {
      "val": "10",
      "offset": 156
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowContinuingCommitmentsBuildingSchoolsForTheFutureWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 183929055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 65
    },
    {
      "val": "10",
      "offset": 108
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowOthersWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 197259112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 61
    },
    {
      "val": "70",
      "offset": 109
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTheTotalsForColumnNameCashReceivedInPeriodIsAndColumnNameExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 87458081,
  "status": "passed"
});
formatter.after({
  "duration": 231143158,
  "status": "passed"
});
formatter.before({
  "duration": 3489325909,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Testing the Capital Grants FREM Page with Valid Credentials",
  "description": "",
  "id": "dfe/efa-capital-grant-frem-requirement-page;testing-the-capital-grants-frem-page-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Capital Grants FREM section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter in row Conditional Improvement funds with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter in row Priority School Building Programme with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter in row Academies Capital  Maintenance Fund with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter in row Devolved Formula Capital Grant with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter in row Centrally Managed Programme Free Schools with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in row Continuing Commitments Building Schools for the Future with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter in row Others with column Value Cash Received In Period \"100\" and Column Expendituire Recorded with \"100\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see the Totals for column name Cash Received In Period is \"700\" and column name Expendituire Recorded with \"700\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 8635173494,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iHaveNavigatedToCapitalGrantsFREMSection()"
});
formatter.result({
  "duration": 92972465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 88
    },
    {
      "val": "100",
      "offset": 132
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowConditionalImprovementFundsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 749701426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 93
    },
    {
      "val": "100",
      "offset": 137
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowPrioritySchoolBuildingProgrammeWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 209057250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 94
    },
    {
      "val": "100",
      "offset": 138
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowAcademiesCapitalMaintenanceFundWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 189417604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 89
    },
    {
      "val": "100",
      "offset": 133
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowDevolvedFormulaCapitalGrantWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 196446328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 99
    },
    {
      "val": "100",
      "offset": 143
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowCentrallyManagedProgrammeFreeSchoolsWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 209287896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 113
    },
    {
      "val": "100",
      "offset": 157
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowContinuingCommitmentsBuildingSchoolsForTheFutureWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 203496908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 65
    },
    {
      "val": "100",
      "offset": 109
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iEnterInRowOthersWithColumnValueCashReceivedInPeriodAndColumnExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 217988711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 61
    },
    {
      "val": "700",
      "offset": 110
    }
  ],
  "location": "SoFA_CapitalGrantsFREMRequirements_stepdefd.iSeeTheTotalsForColumnNameCashReceivedInPeriodIsAndColumnNameExpendituireRecordedWith(String,String)"
});
formatter.result({
  "duration": 89371614,
  "status": "passed"
});
formatter.after({
  "duration": 179599875,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_CharitableActivities_DirectCost.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"\u003cTEducSupportStaff\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"\u003cStaffExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"\u003cOtherStaffCosts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"\u003cDepreciation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"\u003cAmortisation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"\u003cImpairment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"\u003cEducationalSupp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"\u003cExaminationFees\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"\u003cStaffRelatedInsurance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"\u003cTechnologyCosts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"\u003cEducationalConsultancy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"\u003cOtherDirectCosts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"\u003cTotal\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;",
  "rows": [
    {
      "cells": [
        "TEducSupportStaff",
        "StaffExp",
        "OtherStaffCosts",
        "Depreciation",
        "Amortisation",
        "Impairment",
        "EducationalSupp",
        "ExaminationFees",
        "StaffRelatedInsurance",
        "TechnologyCosts",
        "EducationalConsultancy",
        "OtherDirectCosts",
        "Total"
      ],
      "line": 23,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;1"
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
        "10",
        "10",
        "10",
        "10",
        "10",
        "120"
      ],
      "line": 24,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;2"
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
        "500",
        "500",
        "500",
        "500",
        "500",
        "6000"
      ],
      "line": 25,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;3"
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
        "1",
        "1",
        "1",
        "1",
        "1",
        "12"
      ],
      "line": 26,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;4"
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
        "50",
        "50",
        "50",
        "50",
        "50",
        "600"
      ],
      "line": 27,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;5"
    },
    {
      "cells": [
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "200",
        "2400"
      ],
      "line": 28,
      "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3322283893,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"10\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"10\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"10\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"10\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"10\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"10\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"120\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2182940583,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iNavigateToCharitableActivitiesDirectCostPage()"
});
formatter.result({
  "duration": 625251170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTeachingAndEducationalSupportStaffWith(String)"
});
formatter.result({
  "duration": 91633488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 38
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffExpensesWith(String)"
});
formatter.result({
  "duration": 86075403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 74071061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInDepreciationWith(String)"
});
formatter.result({
  "duration": 74507938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInAmortisationWith(String)"
});
formatter.result({
  "duration": 79908498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInImpairmentWit(String)"
});
formatter.result({
  "duration": 74885439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalSuppliesWith(String)"
});
formatter.result({
  "duration": 75264875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInExaminationFeesWith(String)"
});
formatter.result({
  "duration": 73808685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffRelatedInsuranceWith(String)"
});
formatter.result({
  "duration": 79689498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTechnologyCostsWith(String)"
});
formatter.result({
  "duration": 80757039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 74091012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherDirectCostsWith(String)"
});
formatter.result({
  "duration": 76454314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iCanSeeTheTotalFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 48956912,
  "status": "passed"
});
formatter.after({
  "duration": 139150355,
  "status": "passed"
});
formatter.before({
  "duration": 3470977099,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"500\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"500\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"500\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"500\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"500\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"500\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"6000\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2219085844,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iNavigateToCharitableActivitiesDirectCostPage()"
});
formatter.result({
  "duration": 527563155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTeachingAndEducationalSupportStaffWith(String)"
});
formatter.result({
  "duration": 93074797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 38
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffExpensesWith(String)"
});
formatter.result({
  "duration": 98545208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 73898287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInDepreciationWith(String)"
});
formatter.result({
  "duration": 72943772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInAmortisationWith(String)"
});
formatter.result({
  "duration": 77440421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInImpairmentWit(String)"
});
formatter.result({
  "duration": 79088715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 44
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalSuppliesWith(String)"
});
formatter.result({
  "duration": 73090266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInExaminationFeesWith(String)"
});
formatter.result({
  "duration": 79175474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffRelatedInsuranceWith(String)"
});
formatter.result({
  "duration": 73708947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTechnologyCostsWith(String)"
});
formatter.result({
  "duration": 79289325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 79782916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherDirectCostsWith(String)"
});
formatter.result({
  "duration": 79598382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iCanSeeTheTotalFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 39134601,
  "status": "passed"
});
formatter.after({
  "duration": 129430523,
  "status": "passed"
});
formatter.before({
  "duration": 8921368218,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"1\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"1\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"1\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"12\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2332934271,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iNavigateToCharitableActivitiesDirectCostPage()"
});
formatter.result({
  "duration": 586376404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTeachingAndEducationalSupportStaffWith(String)"
});
formatter.result({
  "duration": 87799363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffExpensesWith(String)"
});
formatter.result({
  "duration": 90980884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 70895293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInDepreciationWith(String)"
});
formatter.result({
  "duration": 69763634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInAmortisationWith(String)"
});
formatter.result({
  "duration": 71807722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInImpairmentWit(String)"
});
formatter.result({
  "duration": 72724095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalSuppliesWith(String)"
});
formatter.result({
  "duration": 71820130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInExaminationFeesWith(String)"
});
formatter.result({
  "duration": 76677342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffRelatedInsuranceWith(String)"
});
formatter.result({
  "duration": 72850557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTechnologyCostsWith(String)"
});
formatter.result({
  "duration": 94884068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 78969066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherDirectCostsWith(String)"
});
formatter.result({
  "duration": 84788402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iCanSeeTheTotalFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 41430471,
  "status": "passed"
});
formatter.after({
  "duration": 177977118,
  "status": "passed"
});
formatter.before({
  "duration": 3413441069,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"50\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"50\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"50\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"50\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"50\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"50\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"50\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"600\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2263958279,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iNavigateToCharitableActivitiesDirectCostPage()"
});
formatter.result({
  "duration": 6350959070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTeachingAndEducationalSupportStaffWith(String)"
});
formatter.result({
  "duration": 86112168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffExpensesWith(String)"
});
formatter.result({
  "duration": 86533913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 74037751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInDepreciationWith(String)"
});
formatter.result({
  "duration": 73654735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInAmortisationWith(String)"
});
formatter.result({
  "duration": 78591084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInImpairmentWit(String)"
});
formatter.result({
  "duration": 74028847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 44
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalSuppliesWith(String)"
});
formatter.result({
  "duration": 79052312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInExaminationFeesWith(String)"
});
formatter.result({
  "duration": 71676314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffRelatedInsuranceWith(String)"
});
formatter.result({
  "duration": 85423957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTechnologyCostsWith(String)"
});
formatter.result({
  "duration": 73764868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 78526129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherDirectCostsWith(String)"
});
formatter.result({
  "duration": 72267036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iCanSeeTheTotalFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 35932829,
  "status": "passed"
});
formatter.after({
  "duration": 182618530,
  "status": "passed"
});
formatter.before({
  "duration": 3294406188,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Testing Happy path for Charitable Activities Direct Cost Page",
  "description": "",
  "id": "testing-the-charitable-activities-direct-cost-page;testing-happy-path-for-charitable-activities-direct-cost-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@Sanity_Test"
    },
    {
      "line": 3,
      "name": "@Live"
    },
    {
      "line": 3,
      "name": "@UAT"
    },
    {
      "line": 3,
      "name": "@CADC"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Anish"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Charitable Activities Direct Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Teaching and Educational Support Staff with \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Staff Expenses with \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other Staff Costs with \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Depreciation with \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Amortisation with \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Impairment wit \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Educational Supplies with \"200\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Examination Fees with \"200\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Staff Related Insurance with \"200\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Technology Costs with \"200\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Educational Consultancy with \"200\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Other Direct Costs with \"200\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see the Total field is now populated with \"2400\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2144471599,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iNavigateToCharitableActivitiesDirectCostPage()"
});
formatter.result({
  "duration": 540657513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTeachingAndEducationalSupportStaffWith(String)"
});
formatter.result({
  "duration": 91853862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffExpensesWith(String)"
});
formatter.result({
  "duration": 83779434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 76492829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInDepreciationWith(String)"
});
formatter.result({
  "duration": 78377244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInAmortisationWith(String)"
});
formatter.result({
  "duration": 91294719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInImpairmentWit(String)"
});
formatter.result({
  "duration": 80359801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalSuppliesWith(String)"
});
formatter.result({
  "duration": 76077624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInExaminationFeesWith(String)"
});
formatter.result({
  "duration": 77524222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInStaffRelatedInsuranceWith(String)"
});
formatter.result({
  "duration": 72893461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInTechnologyCostsWith(String)"
});
formatter.result({
  "duration": 74033571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 79913203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iEnterValueInOtherDirectCostsWith(String)"
});
formatter.result({
  "duration": 77366239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2400",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesDirectCostPage_stepdefs.iCanSeeTheTotalFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 38190745,
  "status": "passed"
});
formatter.after({
  "duration": 179370442,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_CharitableActivities_SupportCosts.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the Charitable Activities Support Cost page",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checking the Charitable Activities Support page with valid credentials",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@CASC"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Charitable Activities Support Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter value in Support Staff Pay Costs with \"\u003cSSPC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Staff Related Insurance field with \"\u003cSRI\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Staff costs with \"\u003cOSC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Depreciation field with \"\u003cDepri\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Amortisation field with \"\u003cAmor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Impairment field with \"\u003cImpa\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Maintenance of Premises with \"\u003cMOP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Special Facilities with \"\u003cSpFaci\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Cleaning and CareTaking with \"\u003cCAC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Operating  Lease Rentals Land B with \"\u003cOpLR_LB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Operating Lease Rentals Others with \"\u003cOpLR_Other\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Rates wit \"\u003cRates\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Energy with \"\u003cenergy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter value in Risk Protection Arrangement Fees with \"\u003cRPAF\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter value in Security with \"\u003cSecurity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter value in Transport with \"\u003cTransport\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter value in Catering with \"\u003ccat\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter value in Technology Cost with \"\u003cTC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value in other premises cost with \"\u003cOPC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter value in PFI_Services Costs with \"\u003cPFI\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter value in Loan Interest paid to Dfe_EFA Family with \"\u003cLI_Fam\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter value in  Loan Interest paid to others with \"\u003cLI_Oth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter value in Finance Leases Interest with \"\u003cFLI\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter value in Non Educational Consultancy with \"\u003cNEC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter value in Legal and Professional with \"\u003cLAP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter value in Auditor Costs Audit Fees with \"\u003cACAF\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter value in Auditor Costs Internal Audit Fees with \"\u003cACIAF\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter value in Auditor Costs Other fees with \"\u003cACOAF\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter value in Governors Reimbursement Travel and Subsistence with \"\u003cGRTS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter value in Travel expenses Travel and Subsistence with \"\u003cTE_TS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter value in Governors Reimbursement Other with \"\u003cGRO\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter value in Trustees  Expenses Others  with \"\u003cTEO\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter value in Net Movement in Provisions During the year with \"\u003cNMP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter gain or loss on Disposal of Tangible Fixed Assets \"\u003cGL_TFA\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter gain or loss on Disposal of Intangible fixed assets \"\u003cGL_IFA\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Gain Or Loss on Disposal of Investments \"\u003cGL_I\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Other Support Costs with \"\u003cOSP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the total to be \"\u003cTOTAL\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "SSPC",
        "SRI",
        "OSC",
        "Depri",
        "Amor",
        "Impa",
        "MOP",
        "SpFaci",
        "CAC",
        "OpLR_LB",
        "OpLR_Other",
        "Rates",
        "energy",
        "RPAF",
        "Security",
        "Transport",
        "cat",
        "TC",
        "OPC",
        "PFI",
        "LI_Fam",
        "LI_Oth",
        "FLI",
        "NEC",
        "LAP",
        "ACAF",
        "ACIAF",
        "ACOAF",
        "GRTS",
        "TE_TS",
        "GRO",
        "TEO",
        "NMP",
        "GL_TFA",
        "GL_IFA",
        "GL_I",
        "OSP",
        "TOTAL"
      ],
      "line": 48,
      "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;1"
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
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "37"
      ],
      "line": 49,
      "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;2"
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
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "74"
      ],
      "line": 50,
      "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;3"
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
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "370"
      ],
      "line": 51,
      "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;4"
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
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "50",
        "1850"
      ],
      "line": 52,
      "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3422406248,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Checking the Charitable Activities Support page with valid credentials",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@CASC"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Charitable Activities Support Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter value in Support Staff Pay Costs with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Staff Related Insurance field with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Staff costs with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Depreciation field with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Amortisation field with \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Impairment field with \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Maintenance of Premises with \"1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Special Facilities with \"1\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Cleaning and CareTaking with \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Operating  Lease Rentals Land B with \"1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Operating Lease Rentals Others with \"1\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Rates wit \"1\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Energy with \"1\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter value in Risk Protection Arrangement Fees with \"1\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter value in Security with \"1\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter value in Transport with \"1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter value in Catering with \"1\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter value in Technology Cost with \"1\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value in other premises cost with \"1\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter value in PFI_Services Costs with \"1\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter value in Loan Interest paid to Dfe_EFA Family with \"1\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter value in  Loan Interest paid to others with \"1\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter value in Finance Leases Interest with \"1\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter value in Non Educational Consultancy with \"1\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter value in Legal and Professional with \"1\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter value in Auditor Costs Audit Fees with \"1\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter value in Auditor Costs Internal Audit Fees with \"1\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter value in Auditor Costs Other fees with \"1\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter value in Governors Reimbursement Travel and Subsistence with \"1\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter value in Travel expenses Travel and Subsistence with \"1\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter value in Governors Reimbursement Other with \"1\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter value in Trustees  Expenses Others  with \"1\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter value in Net Movement in Provisions During the year with \"1\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter gain or loss on Disposal of Tangible Fixed Assets \"1\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter gain or loss on Disposal of Intangible fixed assets \"1\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Gain Or Loss on Disposal of Investments \"1\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Other Support Costs with \"1\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the total to be \"37\"",
  "matchedColumns": [
    37
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2243836070,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iNavigateToCharitableActivitiesSupportCostPage()"
});
formatter.result({
  "duration": 82608206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSupportStaffPayCostsWith(String)"
});
formatter.result({
  "duration": 672944085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInStaffRelatedInsuranceFieldWith(String)"
});
formatter.result({
  "duration": 105590850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 76475314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInDepreciationFieldWith(String)"
});
formatter.result({
  "duration": 78096043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAmortisationFieldWith(String)"
});
formatter.result({
  "duration": 188804130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInImpairmentFieldWith(String)"
});
formatter.result({
  "duration": 77164573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInMaintenanceOfPremisesWith(String)"
});
formatter.result({
  "duration": 78988043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSpecialFacilitiesWith(String)"
});
formatter.result({
  "duration": 85749459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCleaningAndCareTakingWith(String)"
});
formatter.result({
  "duration": 86227036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsLandBWith(String)"
});
formatter.result({
  "duration": 75830953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsOthersWith(String)"
});
formatter.result({
  "duration": 84261301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRatesWit(String)"
});
formatter.result({
  "duration": 87731786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInEnergyWith(String)"
});
formatter.result({
  "duration": 78530446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRiskProtectionArrangementFeesWith(String)"
});
formatter.result({
  "duration": 78204138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSecurityWith(String)"
});
formatter.result({
  "duration": 72836012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTransportWith(String)"
});
formatter.result({
  "duration": 73785359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCateringWith(String)"
});
formatter.result({
  "duration": 77970882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTechnologyCostWith(String)"
});
formatter.result({
  "duration": 71358214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherPremisesCostWith(String)"
});
formatter.result({
  "duration": 80027388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInPFI_ServicesCostsWith(String)"
});
formatter.result({
  "duration": 71301419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToDfe_EFAFamilyWith(String)"
});
formatter.result({
  "duration": 74639117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToOthersWith(String)"
});
formatter.result({
  "duration": 74872340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInFinanceLeasesInterestWith(String)"
});
formatter.result({
  "duration": 69828653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNonEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 75755946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLegalAndProfessionalWith(String)"
});
formatter.result({
  "duration": 79264233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsAuditFeesWith(String)"
});
formatter.result({
  "duration": 87763508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsInternalAuditFeesWith(String)"
});
formatter.result({
  "duration": 74707033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsOtherFeesWith(String)"
});
formatter.result({
  "duration": 73884506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 70
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 72017433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTravelExpensesTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 79603674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementOtherWith(String)"
});
formatter.result({
  "duration": 75498883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTrusteesExpensesOthersWith(String)"
});
formatter.result({
  "duration": 77230699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNetMovementInProvisionsDuringTheYearWith(String)"
});
formatter.result({
  "duration": 73278645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfTangibleFixedAssets(String)"
});
formatter.result({
  "duration": 72572175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfIntangibleFixedAssets(String)"
});
formatter.result({
  "duration": 74792010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfInvestments(String)"
});
formatter.result({
  "duration": 71703247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterOtherSupportCostsWith(String)"
});
formatter.result({
  "duration": 73320067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "37",
      "offset": 27
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iCanSeeTheTotalToBe(String)"
});
formatter.result({
  "duration": 38199507,
  "status": "passed"
});
formatter.after({
  "duration": 179472449,
  "status": "passed"
});
formatter.before({
  "duration": 3192896880,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Checking the Charitable Activities Support page with valid credentials",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@CASC"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Charitable Activities Support Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter value in Support Staff Pay Costs with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Staff Related Insurance field with \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Staff costs with \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Depreciation field with \"2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Amortisation field with \"2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Impairment field with \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Maintenance of Premises with \"2\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Special Facilities with \"2\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Cleaning and CareTaking with \"2\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Operating  Lease Rentals Land B with \"2\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Operating Lease Rentals Others with \"2\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Rates wit \"2\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Energy with \"2\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter value in Risk Protection Arrangement Fees with \"2\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter value in Security with \"2\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter value in Transport with \"2\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter value in Catering with \"2\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter value in Technology Cost with \"2\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value in other premises cost with \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter value in PFI_Services Costs with \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter value in Loan Interest paid to Dfe_EFA Family with \"2\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter value in  Loan Interest paid to others with \"2\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter value in Finance Leases Interest with \"2\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter value in Non Educational Consultancy with \"2\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter value in Legal and Professional with \"2\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter value in Auditor Costs Audit Fees with \"2\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter value in Auditor Costs Internal Audit Fees with \"2\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter value in Auditor Costs Other fees with \"2\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter value in Governors Reimbursement Travel and Subsistence with \"2\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter value in Travel expenses Travel and Subsistence with \"2\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter value in Governors Reimbursement Other with \"2\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter value in Trustees  Expenses Others  with \"2\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter value in Net Movement in Provisions During the year with \"2\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter gain or loss on Disposal of Tangible Fixed Assets \"2\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter gain or loss on Disposal of Intangible fixed assets \"2\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Gain Or Loss on Disposal of Investments \"2\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Other Support Costs with \"2\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the total to be \"74\"",
  "matchedColumns": [
    37
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 7860675583,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iNavigateToCharitableActivitiesSupportCostPage()"
});
formatter.result({
  "duration": 99769620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSupportStaffPayCostsWith(String)"
});
formatter.result({
  "duration": 620238819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInStaffRelatedInsuranceFieldWith(String)"
});
formatter.result({
  "duration": 98985722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 77174785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInDepreciationFieldWith(String)"
});
formatter.result({
  "duration": 72533806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAmortisationFieldWith(String)"
});
formatter.result({
  "duration": 74787631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInImpairmentFieldWith(String)"
});
formatter.result({
  "duration": 75218133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInMaintenanceOfPremisesWith(String)"
});
formatter.result({
  "duration": 77515787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSpecialFacilitiesWith(String)"
});
formatter.result({
  "duration": 78038087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCleaningAndCareTakingWith(String)"
});
formatter.result({
  "duration": 83804171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsLandBWith(String)"
});
formatter.result({
  "duration": 75434969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsOthersWith(String)"
});
formatter.result({
  "duration": 79183261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRatesWit(String)"
});
formatter.result({
  "duration": 75446634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInEnergyWith(String)"
});
formatter.result({
  "duration": 73155264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 56
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRiskProtectionArrangementFeesWith(String)"
});
formatter.result({
  "duration": 77886053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSecurityWith(String)"
});
formatter.result({
  "duration": 73655891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTransportWith(String)"
});
formatter.result({
  "duration": 77310724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCateringWith(String)"
});
formatter.result({
  "duration": 75437053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTechnologyCostWith(String)"
});
formatter.result({
  "duration": 71299134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherPremisesCostWith(String)"
});
formatter.result({
  "duration": 89745301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInPFI_ServicesCostsWith(String)"
});
formatter.result({
  "duration": 74971172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 60
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToDfe_EFAFamilyWith(String)"
});
formatter.result({
  "duration": 76288927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToOthersWith(String)"
});
formatter.result({
  "duration": 73954148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInFinanceLeasesInterestWith(String)"
});
formatter.result({
  "duration": 76932755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 51
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNonEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 80382407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 46
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLegalAndProfessionalWith(String)"
});
formatter.result({
  "duration": 75966116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsAuditFeesWith(String)"
});
formatter.result({
  "duration": 78396945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 57
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsInternalAuditFeesWith(String)"
});
formatter.result({
  "duration": 74770994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsOtherFeesWith(String)"
});
formatter.result({
  "duration": 83424999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 70
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 74052908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTravelExpensesTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 71922748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementOtherWith(String)"
});
formatter.result({
  "duration": 79748993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTrusteesExpensesOthersWith(String)"
});
formatter.result({
  "duration": 78377750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 66
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNetMovementInProvisionsDuringTheYearWith(String)"
});
formatter.result({
  "duration": 91298038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 59
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfTangibleFixedAssets(String)"
});
formatter.result({
  "duration": 78040592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 61
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfIntangibleFixedAssets(String)"
});
formatter.result({
  "duration": 74511744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfInvestments(String)"
});
formatter.result({
  "duration": 74387440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterOtherSupportCostsWith(String)"
});
formatter.result({
  "duration": 71298648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "74",
      "offset": 27
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iCanSeeTheTotalToBe(String)"
});
formatter.result({
  "duration": 36628823,
  "status": "passed"
});
formatter.after({
  "duration": 139003467,
  "status": "passed"
});
formatter.before({
  "duration": 3109118581,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Checking the Charitable Activities Support page with valid credentials",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@CASC"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Charitable Activities Support Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter value in Support Staff Pay Costs with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Staff Related Insurance field with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Staff costs with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Depreciation field with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Amortisation field with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Impairment field with \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Maintenance of Premises with \"10\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Special Facilities with \"10\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Cleaning and CareTaking with \"10\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Operating  Lease Rentals Land B with \"10\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Operating Lease Rentals Others with \"10\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Rates wit \"10\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Energy with \"10\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter value in Risk Protection Arrangement Fees with \"10\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter value in Security with \"10\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter value in Transport with \"10\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter value in Catering with \"10\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter value in Technology Cost with \"10\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value in other premises cost with \"10\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter value in PFI_Services Costs with \"10\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter value in Loan Interest paid to Dfe_EFA Family with \"10\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter value in  Loan Interest paid to others with \"10\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter value in Finance Leases Interest with \"10\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter value in Non Educational Consultancy with \"10\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter value in Legal and Professional with \"10\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter value in Auditor Costs Audit Fees with \"10\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter value in Auditor Costs Internal Audit Fees with \"10\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter value in Auditor Costs Other fees with \"10\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter value in Governors Reimbursement Travel and Subsistence with \"10\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter value in Travel expenses Travel and Subsistence with \"10\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter value in Governors Reimbursement Other with \"10\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter value in Trustees  Expenses Others  with \"10\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter value in Net Movement in Provisions During the year with \"10\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter gain or loss on Disposal of Tangible Fixed Assets \"10\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter gain or loss on Disposal of Intangible fixed assets \"10\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Gain Or Loss on Disposal of Investments \"10\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Other Support Costs with \"10\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the total to be \"370\"",
  "matchedColumns": [
    37
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2194767527,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iNavigateToCharitableActivitiesSupportCostPage()"
});
formatter.result({
  "duration": 84838470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSupportStaffPayCostsWith(String)"
});
formatter.result({
  "duration": 604805574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInStaffRelatedInsuranceFieldWith(String)"
});
formatter.result({
  "duration": 102588709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 86514030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInDepreciationFieldWith(String)"
});
formatter.result({
  "duration": 76530207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAmortisationFieldWith(String)"
});
formatter.result({
  "duration": 75976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInImpairmentFieldWith(String)"
});
formatter.result({
  "duration": 74954398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInMaintenanceOfPremisesWith(String)"
});
formatter.result({
  "duration": 76058012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSpecialFacilitiesWith(String)"
});
formatter.result({
  "duration": 73930228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCleaningAndCareTakingWith(String)"
});
formatter.result({
  "duration": 78622513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsLandBWith(String)"
});
formatter.result({
  "duration": 75761108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 54
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsOthersWith(String)"
});
formatter.result({
  "duration": 79202301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 28
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRatesWit(String)"
});
formatter.result({
  "duration": 89205549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInEnergyWith(String)"
});
formatter.result({
  "duration": 76898737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 56
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRiskProtectionArrangementFeesWith(String)"
});
formatter.result({
  "duration": 77674898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSecurityWith(String)"
});
formatter.result({
  "duration": 75080553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTransportWith(String)"
});
formatter.result({
  "duration": 78936488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCateringWith(String)"
});
formatter.result({
  "duration": 70282097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTechnologyCostWith(String)"
});
formatter.result({
  "duration": 78566274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 43
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherPremisesCostWith(String)"
});
formatter.result({
  "duration": 73285642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInPFI_ServicesCostsWith(String)"
});
formatter.result({
  "duration": 75012779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 60
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToDfe_EFAFamilyWith(String)"
});
formatter.result({
  "duration": 76869162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToOthersWith(String)"
});
formatter.result({
  "duration": 76155216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInFinanceLeasesInterestWith(String)"
});
formatter.result({
  "duration": 82310280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNonEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 180137479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 46
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLegalAndProfessionalWith(String)"
});
formatter.result({
  "duration": 92100249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsAuditFeesWith(String)"
});
formatter.result({
  "duration": 78813836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 57
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsInternalAuditFeesWith(String)"
});
formatter.result({
  "duration": 72808340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsOtherFeesWith(String)"
});
formatter.result({
  "duration": 75627510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 70
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 73940123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTravelExpensesTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 73009959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementOtherWith(String)"
});
formatter.result({
  "duration": 78502203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 50
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTrusteesExpensesOthersWith(String)"
});
formatter.result({
  "duration": 77600263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNetMovementInProvisionsDuringTheYearWith(String)"
});
formatter.result({
  "duration": 75781058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfTangibleFixedAssets(String)"
});
formatter.result({
  "duration": 78804828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 61
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfIntangibleFixedAssets(String)"
});
formatter.result({
  "duration": 78014936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfInvestments(String)"
});
formatter.result({
  "duration": 81985894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 34
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterOtherSupportCostsWith(String)"
});
formatter.result({
  "duration": 76064327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "370",
      "offset": 27
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iCanSeeTheTotalToBe(String)"
});
formatter.result({
  "duration": 35068775,
  "status": "passed"
});
formatter.after({
  "duration": 183654432,
  "status": "passed"
});
formatter.before({
  "duration": 3365157371,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Checking the Charitable Activities Support page with valid credentials",
  "description": "",
  "id": "testing-the-charitable-activities-support-cost-page;checking-the-charitable-activities-support-page-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@CASC"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Charitable Activities Support Cost Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter value in Support Staff Pay Costs with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Staff Related Insurance field with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Staff costs with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Depreciation field with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Amortisation field with \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Impairment field with \"50\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Maintenance of Premises with \"50\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Special Facilities with \"50\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Cleaning and CareTaking with \"50\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Operating  Lease Rentals Land B with \"50\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter value in Operating Lease Rentals Others with \"50\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter value in Rates wit \"50\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter value in Energy with \"50\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter value in Risk Protection Arrangement Fees with \"50\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter value in Security with \"50\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter value in Transport with \"50\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter value in Catering with \"50\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter value in Technology Cost with \"50\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value in other premises cost with \"50\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter value in PFI_Services Costs with \"50\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter value in Loan Interest paid to Dfe_EFA Family with \"50\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter value in  Loan Interest paid to others with \"50\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter value in Finance Leases Interest with \"50\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter value in Non Educational Consultancy with \"50\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter value in Legal and Professional with \"50\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter value in Auditor Costs Audit Fees with \"50\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter value in Auditor Costs Internal Audit Fees with \"50\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter value in Auditor Costs Other fees with \"50\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter value in Governors Reimbursement Travel and Subsistence with \"50\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter value in Travel expenses Travel and Subsistence with \"50\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter value in Governors Reimbursement Other with \"50\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter value in Trustees  Expenses Others  with \"50\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter value in Net Movement in Provisions During the year with \"50\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter gain or loss on Disposal of Tangible Fixed Assets \"50\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter gain or loss on Disposal of Intangible fixed assets \"50\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter Gain Or Loss on Disposal of Investments \"50\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Other Support Costs with \"50\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the total to be \"1850\"",
  "matchedColumns": [
    37
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 7768959953,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iNavigateToCharitableActivitiesSupportCostPage()"
});
formatter.result({
  "duration": 94071734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSupportStaffPayCostsWith(String)"
});
formatter.result({
  "duration": 575929977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInStaffRelatedInsuranceFieldWith(String)"
});
formatter.result({
  "duration": 100720938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 41
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherStaffCostsWith(String)"
});
formatter.result({
  "duration": 75097357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInDepreciationFieldWith(String)"
});
formatter.result({
  "duration": 70447141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAmortisationFieldWith(String)"
});
formatter.result({
  "duration": 75082508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInImpairmentFieldWith(String)"
});
formatter.result({
  "duration": 74003386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInMaintenanceOfPremisesWith(String)"
});
formatter.result({
  "duration": 74605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSpecialFacilitiesWith(String)"
});
formatter.result({
  "duration": 75170004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCleaningAndCareTakingWith(String)"
});
formatter.result({
  "duration": 80577654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 55
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsLandBWith(String)"
});
formatter.result({
  "duration": 78508249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 54
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOperatingLeaseRentalsOthersWith(String)"
});
formatter.result({
  "duration": 72944362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 28
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRatesWit(String)"
});
formatter.result({
  "duration": 76743907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInEnergyWith(String)"
});
formatter.result({
  "duration": 84189680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 56
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInRiskProtectionArrangementFeesWith(String)"
});
formatter.result({
  "duration": 91566380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInSecurityWith(String)"
});
formatter.result({
  "duration": 79192357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTransportWith(String)"
});
formatter.result({
  "duration": 83387726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 32
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInCateringWith(String)"
});
formatter.result({
  "duration": 79656081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 39
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTechnologyCostWith(String)"
});
formatter.result({
  "duration": 80716753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 43
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInOtherPremisesCostWith(String)"
});
formatter.result({
  "duration": 74673538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInPFI_ServicesCostsWith(String)"
});
formatter.result({
  "duration": 82215443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 60
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToDfe_EFAFamilyWith(String)"
});
formatter.result({
  "duration": 76595540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLoanInterestPaidToOthersWith(String)"
});
formatter.result({
  "duration": 75775734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInFinanceLeasesInterestWith(String)"
});
formatter.result({
  "duration": 81869054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 51
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNonEducationalConsultancyWith(String)"
});
formatter.result({
  "duration": 74437607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 46
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInLegalAndProfessionalWith(String)"
});
formatter.result({
  "duration": 73923152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsAuditFeesWith(String)"
});
formatter.result({
  "duration": 81643873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 57
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsInternalAuditFeesWith(String)"
});
formatter.result({
  "duration": 88325462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 48
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInAuditorCostsOtherFeesWith(String)"
});
formatter.result({
  "duration": 77142519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 70
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 76542710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 62
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTravelExpensesTravelAndSubsistenceWith(String)"
});
formatter.result({
  "duration": 73259148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 53
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInGovernorsReimbursementOtherWith(String)"
});
formatter.result({
  "duration": 83268652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 50
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInTrusteesExpensesOthersWith(String)"
});
formatter.result({
  "duration": 75200991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 66
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterValueInNetMovementInProvisionsDuringTheYearWith(String)"
});
formatter.result({
  "duration": 78404363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 59
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfTangibleFixedAssets(String)"
});
formatter.result({
  "duration": 79663290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 61
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfIntangibleFixedAssets(String)"
});
formatter.result({
  "duration": 86780023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 49
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterGainOrLossOnDisposalOfInvestments(String)"
});
formatter.result({
  "duration": 78978720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 34
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iEnterOtherSupportCostsWith(String)"
});
formatter.result({
  "duration": 82477638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1850",
      "offset": 27
    }
  ],
  "location": "SoFA_CharitableActivitiesSupportCosts_stepdefs.iCanSeeTheTotalToBe(String)"
});
formatter.result({
  "duration": 35678728,
  "status": "passed"
});
formatter.after({
  "duration": 127384012,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_CostOfRaisingFunds.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Cost Of Raising Funds Page",
  "description": "",
  "id": "testing-cost-of-raising-funds-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"\u003cPayCosts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"\u003cPremiseCosts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"\u003cOther\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"\u003cTotals\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "# Below is the data set that would be used to run the test againast multiple data values."
    }
  ],
  "line": 14,
  "name": "Checking Cost Of Raising Funds Page With valid Cedentials .",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.",
  "rows": [
    {
      "cells": [
        "PayCosts",
        "PremiseCosts",
        "Other",
        "Totals"
      ],
      "line": 16,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;1"
    },
    {
      "cells": [
        "10",
        "10",
        "10",
        "30"
      ],
      "line": 17,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;2"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "300"
      ],
      "line": 18,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;3"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "3"
      ],
      "line": 19,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;4"
    },
    {
      "cells": [
        "2",
        "2",
        "2",
        "6"
      ],
      "line": 20,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;5"
    },
    {
      "cells": [
        "50",
        "50",
        "50",
        "150"
      ],
      "line": 21,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;6"
    },
    {
      "cells": [
        "150",
        "150",
        "150",
        "450"
      ],
      "line": 22,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;7"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "1500"
      ],
      "line": 23,
      "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3430643340,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2156380227,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 502621538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 84131560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 77653341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 74028875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 36625836,
  "status": "passed"
});
formatter.after({
  "duration": 130254947,
  "status": "passed"
});
formatter.before({
  "duration": 3431993055,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2102643265,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 508138777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 83102997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 78812489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 71465189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 33893680,
  "status": "passed"
});
formatter.after({
  "duration": 176867040,
  "status": "passed"
});
formatter.before({
  "duration": 8625422607,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2263166743,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 492057809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 81216069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 80874350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 75480369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 35650785,
  "status": "passed"
});
formatter.after({
  "duration": 178095509,
  "status": "passed"
});
formatter.before({
  "duration": 3638275020,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2583001213,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 548068909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 87249880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 78542378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 80804394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 34847437,
  "status": "passed"
});
formatter.after({
  "duration": 137468441,
  "status": "passed"
});
formatter.before({
  "duration": 9303706230,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"150\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2248762905,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 521199747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 85203630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 78088537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 73515182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 35023930,
  "status": "passed"
});
formatter.after({
  "duration": 177831311,
  "status": "passed"
});
formatter.before({
  "duration": 3171175753,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"150\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"150\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"150\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"450\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2104368682,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 6329774356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 84975546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 89874394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 72868763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 37266427,
  "status": "passed"
});
formatter.after({
  "duration": 324899156,
  "status": "passed"
});
formatter.before({
  "duration": 3932053832,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Checking Cost Of Raising Funds Section with Valid Credentials",
  "description": "",
  "id": "testing-cost-of-raising-funds-page;checking-cost-of-raising-funds-section-with-valid-credentials;checking-cost-of-raising-funds-page-with-valid-cedentials-.;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have navigated to Cost Of Raising Funds section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Pay Cost with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Premise Costs with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Other \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the value of Totals in Cost Of Raising Funds is \"1500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2782559653,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iHaveNavigatedToCostOfRaisingFundsSection()"
});
formatter.result({
  "duration": 502804948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPayCostWith(String)"
});
formatter.result({
  "duration": 96361888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 37
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInPremiseCostsWith(String)"
});
formatter.result({
  "duration": 84479260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 24
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iEnterValueInOther(String)"
});
formatter.result({
  "duration": 76366526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 55
    }
  ],
  "location": "SoFA_CostOfRaisingFunds_stepdefs.iSeeTheValueOfTotalsInCostOfRaisingFundsIs(String)"
});
formatter.result({
  "duration": 35891903,
  "status": "passed"
});
formatter.after({
  "duration": 178438040,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_DfE_EFARevenueGrants.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the DfE/EFA Revenue Grants Page",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"\u003cGAG\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"\u003cRR\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"\u003cSSS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"\u003cPupilPremium\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"\u003cPupilNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"\u003cUniversalInfant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"\u003cInsurance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"\u003cSponsorCapacityGrant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"\u003cOther\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"\u003cTotal\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "GAG",
        "RR",
        "SSS",
        "PupilPremium",
        "PupilNumber",
        "UniversalInfant",
        "Insurance",
        "SponsorCapacityGrant",
        "Other",
        "Total"
      ],
      "line": 21,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;1"
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
        "10",
        "10",
        "90"
      ],
      "line": 22,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;2"
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
        "1",
        "1",
        "9"
      ],
      "line": 23,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;3"
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
        "100",
        "100",
        "900"
      ],
      "line": 24,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;4"
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
        "50",
        "50",
        "450"
      ],
      "line": 25,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;5"
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
        "500",
        "500",
        "4500"
      ],
      "line": 26,
      "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9073697385,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"10\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"10\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"10\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"90\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2143555952,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iNavigateToTheDfE_EFARevenueGrantsPage()"
});
formatter.result({
  "duration": 82939048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInGeneralAnnualGrantWith(String)"
});
formatter.result({
  "duration": 453639766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInRatesReclaimWith(String)"
});
formatter.result({
  "duration": 87949233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 48
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInStudentSupportServicesWith(String)"
});
formatter.result({
  "duration": 81686752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 57
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilPremiumAndServicePremiumWith(String)"
});
formatter.result({
  "duration": 73242816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilNumberAdjustmentWith(String)"
});
formatter.result({
  "duration": 74796471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 58
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInUniversalInfantFreeSchoolMealsWith(String)"
});
formatter.result({
  "duration": 74203952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInInsuranceWith(String)"
});
formatter.result({
  "duration": 74740119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 46
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInSponsorCapacityGrantWith(String)"
});
formatter.result({
  "duration": 71408705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 29
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInOtherWith(String)"
});
formatter.result({
  "duration": 69940041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 49
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iCanSeeTheTotalPopulatedInTotalFieldIs(String)"
});
formatter.result({
  "duration": 763260985,
  "status": "passed"
});
formatter.after({
  "duration": 178354769,
  "status": "passed"
});
formatter.before({
  "duration": 3297061993,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"1\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"9\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 7585161379,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iNavigateToTheDfE_EFARevenueGrantsPage()"
});
formatter.result({
  "duration": 82659409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInGeneralAnnualGrantWith(String)"
});
formatter.result({
  "duration": 602689527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInRatesReclaimWith(String)"
});
formatter.result({
  "duration": 84002025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInStudentSupportServicesWith(String)"
});
formatter.result({
  "duration": 68034056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilPremiumAndServicePremiumWith(String)"
});
formatter.result({
  "duration": 68471830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilNumberAdjustmentWith(String)"
});
formatter.result({
  "duration": 73566475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInUniversalInfantFreeSchoolMealsWith(String)"
});
formatter.result({
  "duration": 77393696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInInsuranceWith(String)"
});
formatter.result({
  "duration": 68012807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInSponsorCapacityGrantWith(String)"
});
formatter.result({
  "duration": 70031761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInOtherWith(String)"
});
formatter.result({
  "duration": 68410987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 49
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iCanSeeTheTotalPopulatedInTotalFieldIs(String)"
});
formatter.result({
  "duration": 895061616,
  "status": "passed"
});
formatter.after({
  "duration": 127692353,
  "status": "passed"
});
formatter.before({
  "duration": 4194942466,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"100\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"100\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"100\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"900\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2944897479,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iNavigateToTheDfE_EFARevenueGrantsPage()"
});
formatter.result({
  "duration": 90322344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 44
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInGeneralAnnualGrantWith(String)"
});
formatter.result({
  "duration": 495540054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 37
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInRatesReclaimWith(String)"
});
formatter.result({
  "duration": 91855465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 48
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInStudentSupportServicesWith(String)"
});
formatter.result({
  "duration": 76967045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 57
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilPremiumAndServicePremiumWith(String)"
});
formatter.result({
  "duration": 70434491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 47
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilNumberAdjustmentWith(String)"
});
formatter.result({
  "duration": 72115827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 58
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInUniversalInfantFreeSchoolMealsWith(String)"
});
formatter.result({
  "duration": 75737472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 33
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInInsuranceWith(String)"
});
formatter.result({
  "duration": 82896393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 46
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInSponsorCapacityGrantWith(String)"
});
formatter.result({
  "duration": 77047104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInOtherWith(String)"
});
formatter.result({
  "duration": 80272321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900",
      "offset": 49
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iCanSeeTheTotalPopulatedInTotalFieldIs(String)"
});
formatter.result({
  "duration": 766747009,
  "status": "passed"
});
formatter.after({
  "duration": 127069081,
  "status": "passed"
});
formatter.before({
  "duration": 3311994395,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"50\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"50\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"50\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"50\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"450\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2147315342,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iNavigateToTheDfE_EFARevenueGrantsPage()"
});
formatter.result({
  "duration": 93298462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 44
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInGeneralAnnualGrantWith(String)"
});
formatter.result({
  "duration": 470878530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 37
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInRatesReclaimWith(String)"
});
formatter.result({
  "duration": 83125896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 48
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInStudentSupportServicesWith(String)"
});
formatter.result({
  "duration": 71542509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 57
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilPremiumAndServicePremiumWith(String)"
});
formatter.result({
  "duration": 68994398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 47
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilNumberAdjustmentWith(String)"
});
formatter.result({
  "duration": 74758209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 58
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInUniversalInfantFreeSchoolMealsWith(String)"
});
formatter.result({
  "duration": 71919670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInInsuranceWith(String)"
});
formatter.result({
  "duration": 72137700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 46
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInSponsorCapacityGrantWith(String)"
});
formatter.result({
  "duration": 70304324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 29
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInOtherWith(String)"
});
formatter.result({
  "duration": 70096334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 49
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iCanSeeTheTotalPopulatedInTotalFieldIs(String)"
});
formatter.result({
  "duration": 649983333,
  "status": "passed"
});
formatter.after({
  "duration": 130742942,
  "status": "passed"
});
formatter.before({
  "duration": 3110398909,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Testing DfE/EFA Revenue Grants Section with Valid Credentials",
  "description": "",
  "id": "testing-the-dfe/efa-revenue-grants-page;testing-dfe/efa-revenue-grants-section-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the DfE_EFA Revenue Grants Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in General Annual Grant with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Rates Reclaim with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Student Support Services with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter value in Pupil Premium and Service Premium with \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter value in Pupil Number Adjustment with \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter value in Universal Infant Free School Meals with \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter value in Insurance with \"500\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter value in Sponsor Capacity Grant with \"500\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter value in Other with \"500\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the total populated in Total field is \"4500\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2257582200,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iNavigateToTheDfE_EFARevenueGrantsPage()"
});
formatter.result({
  "duration": 88459081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 44
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInGeneralAnnualGrantWith(String)"
});
formatter.result({
  "duration": 646129411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 37
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInRatesReclaimWith(String)"
});
formatter.result({
  "duration": 91000395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 48
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInStudentSupportServicesWith(String)"
});
formatter.result({
  "duration": 75558868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 57
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilPremiumAndServicePremiumWith(String)"
});
formatter.result({
  "duration": 77794147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 47
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInPupilNumberAdjustmentWith(String)"
});
formatter.result({
  "duration": 77657696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 58
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInUniversalInfantFreeSchoolMealsWith(String)"
});
formatter.result({
  "duration": 71781111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 33
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInInsuranceWith(String)"
});
formatter.result({
  "duration": 75621321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 46
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInSponsorCapacityGrantWith(String)"
});
formatter.result({
  "duration": 73540237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iEnterValueInOtherWith(String)"
});
formatter.result({
  "duration": 75246549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 49
    }
  ],
  "location": "SoFA_DfE_EFARevenueGrants_stepdefs.iCanSeeTheTotalPopulatedInTotalFieldIs(String)"
});
formatter.result({
  "duration": 640724193,
  "status": "passed"
});
formatter.after({
  "duration": 179210862,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_OtherIncome.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Other Income Page",
  "description": "",
  "id": "testing-other-income-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"\u003cAcademies\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"\u003cGovernment Sources_Non Grant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"\u003cNon-Government Revenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"\u003cTotal\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "Happy Path Data",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data",
  "rows": [
    {
      "cells": [
        "Academies",
        "Government Sources_Non Grant",
        "Non-Government Revenue",
        "Total"
      ],
      "line": 14,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;1"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 15,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;2"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "3"
      ],
      "line": 16,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;3"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "300"
      ],
      "line": 17,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;4"
    },
    {
      "cells": [
        "200",
        "200",
        "200",
        "600"
      ],
      "line": 18,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;5"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "1500"
      ],
      "line": 19,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;6"
    },
    {
      "cells": [
        "111",
        "222",
        "333",
        "666"
      ],
      "line": 20,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;7"
    },
    {
      "cells": [
        "150",
        "250",
        "350",
        "750"
      ],
      "line": 21,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;8"
    },
    {
      "cells": [
        "250",
        "250",
        "250",
        "750"
      ],
      "line": 22,
      "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8801193649,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"0\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"0\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2338196526,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 519932075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 83613098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 83964952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 74961188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5038625785,
  "status": "passed"
});
formatter.after({
  "duration": 170083938,
  "status": "passed"
});
formatter.before({
  "duration": 3375080409,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2255502950,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 515627125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 86449373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 77335088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 68640474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5038963798,
  "status": "passed"
});
formatter.after({
  "duration": 179137129,
  "status": "passed"
});
formatter.before({
  "duration": 8024341195,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2214786760,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 502236042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 89677041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 79806314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 76459020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5041272162,
  "status": "passed"
});
formatter.after({
  "duration": 154614853,
  "status": "passed"
});
formatter.before({
  "duration": 3036803183,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"600\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2326493222,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 561800794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 87245539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 84325767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 79337410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5042459106,
  "status": "passed"
});
formatter.after({
  "duration": 180137384,
  "status": "passed"
});
formatter.before({
  "duration": 8270166020,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"1500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2245222986,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 484741515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 89374251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 79210306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 70737463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5037576097,
  "status": "passed"
});
formatter.after({
  "duration": 139337210,
  "status": "passed"
});
formatter.before({
  "duration": 3147957254,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"222\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"666\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 8043288143,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 497362730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 82964602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 79699054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "333",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 72257528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "666",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5038457312,
  "status": "passed"
});
formatter.after({
  "duration": 181066740,
  "status": "passed"
});
formatter.before({
  "duration": 3685420274,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"150\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"250\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"350\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"750\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2094243592,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 474918257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 84893543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 83889437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "350",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 71126611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "750",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5034280170,
  "status": "passed"
});
formatter.after({
  "duration": 139345315,
  "status": "passed"
});
formatter.before({
  "duration": 7442598387,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "testing Happy path for Other Income Page",
  "description": "",
  "id": "testing-other-income-page;testing-happy-path-for-other-income-page;happy-path-data;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@DEMO"
    },
    {
      "line": 2,
      "name": "@OI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Other Income Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the value in Academies with \"250\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Government Sources - Non Grant with \"250\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value inNon-Government Revenue with \"250\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see the Total field is now \"750\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2398809529,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherIncome_stepdefs.iNavigateToTheOtherIncomePage()"
});
formatter.result({
  "duration": 606901194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 37
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInAcademiesWith(String)"
});
formatter.result({
  "duration": 86745788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 58
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInGovernmentSourcesNonGrantWith(String)"
});
formatter.result({
  "duration": 88210886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 49
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iEnterTheValueInNonGovernmentRevenueWith(String)"
});
formatter.result({
  "duration": 71814786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "750",
      "offset": 34
    }
  ],
  "location": "SoFA_OtherIncome_stepdefs.iCanSeeTheTotalFieldIsNow(String)"
});
formatter.result({
  "duration": 5037372174,
  "status": "passed"
});
formatter.after({
  "duration": 181940603,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_OtherRevenueGrants.feature");
formatter.feature({
  "line": 2,
  "name": "testing the Other Revenue Grants Page",
  "description": "",
  "id": "testing-the-other-revenue-grants-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"\u003cLA_SpecialEducationalNeeds\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"\u003cLA_EarlyYears\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"\u003cOtherLARevenueGrants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"\u003cOtherGovernmentRevenueGrants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"\u003cNonGovernment_RevenueGrants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"\u003cTotal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "testing Happy Path",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path",
  "rows": [
    {
      "cells": [
        "LA_SpecialEducationalNeeds",
        "LA_EarlyYears",
        "OtherLARevenueGrants",
        "OtherGovernmentRevenueGrants",
        "NonGovernment_RevenueGrants",
        "Total"
      ],
      "line": 17,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;1"
    },
    {
      "cells": [
        "10",
        "10",
        "10",
        "10",
        "10",
        "50"
      ],
      "line": 18,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;2"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "1",
        "1",
        "5"
      ],
      "line": 19,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;3"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "100",
        "100",
        "500"
      ],
      "line": 20,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;4"
    },
    {
      "cells": [
        "200",
        "200",
        "200",
        "200",
        "200",
        "1000"
      ],
      "line": 21,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;5"
    },
    {
      "cells": [
        "50",
        "50",
        "50",
        "50",
        "50",
        "250"
      ],
      "line": 22,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;6"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "500",
        "500",
        "2500"
      ],
      "line": 23,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;7"
    },
    {
      "cells": [
        "123",
        "234",
        "50",
        "156",
        "75",
        "638"
      ],
      "line": 24,
      "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2883465586,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"50\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 7783996453,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 93011973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 472882929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 85922722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 70357622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 69121967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 82515916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5035017401,
  "status": "passed"
});
formatter.after({
  "duration": 159468615,
  "status": "passed"
});
formatter.before({
  "duration": 3474016640,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"5\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2772428158,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 102257495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 456211600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 83024281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 74531570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 72056249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 76035527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5049980535,
  "status": "passed"
});
formatter.after({
  "duration": 184020255,
  "status": "passed"
});
formatter.before({
  "duration": 3519497906,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2900940708,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 95123322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 6288891347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 81273306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 70107342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 72972012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 72023332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5046682714,
  "status": "passed"
});
formatter.after({
  "duration": 133863013,
  "status": "passed"
});
formatter.before({
  "duration": 4042181080,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"1000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2318138400,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 127813672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 472316380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 94375951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 79747711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 70121090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 77095905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5042365321,
  "status": "passed"
});
formatter.after({
  "duration": 183385394,
  "status": "passed"
});
formatter.before({
  "duration": 8200195885,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"250\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2183870925,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 89606842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 440126820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 85925040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 76251160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 76245716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 77818710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5034676489,
  "status": "passed"
});
formatter.after({
  "duration": 140672873,
  "status": "passed"
});
formatter.before({
  "duration": 3380010777,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"2500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 8151640359,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 88651042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 482897847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 85473132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 84636978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 81802420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 82426885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5041184705,
  "status": "passed"
});
formatter.after({
  "duration": 183123796,
  "status": "passed"
});
formatter.before({
  "duration": 3293267088,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "testing the happy path for Other Revenue Grants",
  "description": "",
  "id": "testing-the-other-revenue-grants-page;testing-the-happy-path-for-other-revenue-grants;testing-happy-path;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@ORG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Other Revenue Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the value in Local Authority- Special Educational Needs with \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the value in Local Authority-Early Years with \"234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the value in Other Local Authority Revenue Grants with \"50\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the value in Other Government Revenue Grants with \"156\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the value in Non-Government-Revenue Grants with \"75\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see the totals field is now populated with \"638\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2154820547,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iNavigateToTheOtherRevenueGrantsPage()"
});
formatter.result({
  "duration": 93925816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 70
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthoritySpecialEducationalNeedsWith(String)"
});
formatter.result({
  "duration": 436914780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInLocalAuthorityEarlyYearsWith(String)"
});
formatter.result({
  "duration": 82201304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 64
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherLocalAuthorityRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 79150914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 59
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInOtherGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 78084475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 57
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iEnterTheValueInNonGovernmentRevenueGrantsWith(String)"
});
formatter.result({
  "duration": 73767356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "638",
      "offset": 46
    }
  ],
  "location": "SoFA_OtherRevenueGrantsPage_stepdefs.iSeeTheTotalsFieldIsNowPopulatedWith(String)"
});
formatter.result({
  "duration": 5042122025,
  "status": "passed"
});
formatter.after({
  "duration": 193482902,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_RelatedPartyTransactions.feature");
formatter.feature({
  "line": 1,
  "name": "testing Related Party Transactions Page",
  "description": "",
  "id": "testing-related-party-transactions-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "testing related Party Transaction with valid Credentials",
  "description": "",
  "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@RPT"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Related Party Transactions section",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select a value \"\u003cvalue1\u003e\" from the drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Number paid as Trustees with \"\u003cNum_Paid_Trustees1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Number paid as staff with \"\u003cNum_Paid_Staff1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Then  I can see the Total column is \"\u003cTotal1\u003e\""
    }
  ],
  "line": 12,
  "name": "I can see the Row named Total value for Paid as Trustees is \"\u003cTotal_Trustees\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the Row named Total value for Paid as Staff is \"\u003cTotal_Staff\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "# Then  I can see the Row named Total value for Column named Total os \"\u003cTotal_Total\u003e\""
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "value1",
        "Num_Paid_Trustees1",
        "Num_Paid_Staff1",
        "Total1",
        "Total_Trustees",
        "Total_Staff",
        "Total_Total"
      ],
      "line": 18,
      "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;1"
    },
    {
      "cells": [
        "£60,001-£70,000",
        "1",
        "1",
        "2",
        "1",
        "1",
        "2"
      ],
      "line": 19,
      "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;2"
    },
    {
      "cells": [
        "£60,001-£70,000",
        "2",
        "2",
        "4",
        "2",
        "2",
        "4"
      ],
      "line": 20,
      "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;3"
    },
    {
      "cells": [
        "£60,001-£70,000",
        "4",
        "4",
        "8",
        "4",
        "4",
        "8"
      ],
      "line": 21,
      "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3526033103,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "testing related Party Transaction with valid Credentials",
  "description": "",
  "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@RPT"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Related Party Transactions section",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select a value \"£60,001-£70,000\" from the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Number paid as Trustees with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Number paid as staff with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Then  I can see the Total column is \"\u003cTotal1\u003e\""
    }
  ],
  "line": 12,
  "name": "I can see the Row named Total value for Paid as Trustees is \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the Row named Total value for Paid as Staff is \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 6640674951,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iNavigateToRelatedPartyTransactionsSection()"
});
formatter.result({
  "duration": 573296513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£60,001-£70,000",
      "offset": 18
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iSelectAValueFromTheDropDownMenu(String)"
});
formatter.result({
  "duration": 91932227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsTrusteesWith(String)"
});
formatter.result({
  "duration": 122055831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsStaffWith(String)"
});
formatter.result({
  "duration": 96051147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsTrusteesIs(String)"
});
formatter.result({
  "duration": 39067118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsStaffIs(String)"
});
formatter.result({
  "duration": 39063937,
  "status": "passed"
});
formatter.after({
  "duration": 130105857,
  "status": "passed"
});
formatter.before({
  "duration": 2841577460,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "testing related Party Transaction with valid Credentials",
  "description": "",
  "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@RPT"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Related Party Transactions section",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select a value \"£60,001-£70,000\" from the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Number paid as Trustees with \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Number paid as staff with \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Then  I can see the Total column is \"\u003cTotal1\u003e\""
    }
  ],
  "line": 12,
  "name": "I can see the Row named Total value for Paid as Trustees is \"2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the Row named Total value for Paid as Staff is \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2140296680,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iNavigateToRelatedPartyTransactionsSection()"
});
formatter.result({
  "duration": 90540887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£60,001-£70,000",
      "offset": 18
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iSelectAValueFromTheDropDownMenu(String)"
});
formatter.result({
  "duration": 448783786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsTrusteesWith(String)"
});
formatter.result({
  "duration": 120304831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsStaffWith(String)"
});
formatter.result({
  "duration": 96788395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 61
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsTrusteesIs(String)"
});
formatter.result({
  "duration": 34821406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsStaffIs(String)"
});
formatter.result({
  "duration": 33187694,
  "status": "passed"
});
formatter.after({
  "duration": 127300342,
  "status": "passed"
});
formatter.before({
  "duration": 3431340845,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "testing related Party Transaction with valid Credentials",
  "description": "",
  "id": "testing-related-party-transactions-page;testing-related-party-transaction-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@RPT"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Related Party Transactions section",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select a value \"£60,001-£70,000\" from the drop down menu",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Number paid as Trustees with \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Number paid as staff with \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Then  I can see the Total column is \"\u003cTotal1\u003e\""
    }
  ],
  "line": 12,
  "name": "I can see the Row named Total value for Paid as Trustees is \"4\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the Row named Total value for Paid as Staff is \"4\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2221799767,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iNavigateToRelatedPartyTransactionsSection()"
});
formatter.result({
  "duration": 87185687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£60,001-£70,000",
      "offset": 18
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iSelectAValueFromTheDropDownMenu(String)"
});
formatter.result({
  "duration": 522168904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 47
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsTrusteesWith(String)"
});
formatter.result({
  "duration": 131335266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iEnterValueInNumberPaidAsStaffWith(String)"
});
formatter.result({
  "duration": 84529971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 61
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsTrusteesIs(String)"
});
formatter.result({
  "duration": 36031576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 58
    }
  ],
  "location": "SoFA_RelatedPartyTransactions_stepdefs.iCanSeeTheRowNamedTotalValueForPaidAsStaffIs(String)"
});
formatter.result({
  "duration": 35877199,
  "status": "passed"
});
formatter.after({
  "duration": 131405705,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFA_StaffCosts.feature");
formatter.feature({
  "line": 1,
  "name": "testing the Staff Costs section in SoFA",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "testing Staff Costes section with valid credentials",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@SC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Staff Costs section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in row wages and salaries WS and column PE with \"\u003cWS_PE\u003e\" and column TE with \"\u003cWS_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the Total Value for row  wages and salaries WS to be \"\u003cWS_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in row Social Security Costs SSC  and column PE with \"\u003cSSC_PE\u003e\" and column TE with \"\u003cSSC_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Total Value for row SSC to be \"\u003cSSC_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in row Pension Costs PC  and column PE with \"\u003cPC_PE\u003e\" and column TE with \"\u003cPC_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see the Total Value for row PC to be \"\u003cPC_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter value in row Agency Staff Costs ASC  and TE with \"\u003cASC_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see the Total Value for row ASC to be \"\u003cASC_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter value in row Redundancy payment RP  and column PE with \"\u003cRP_PE\u003e\" and column TE with \"\u003cRP_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the Total Value for row RP to be \"\u003cRP_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter value in row Severance Payments SP  and column PE with \"\u003cSP_PE\u003e\" and column TE with \"\u003cSP_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see the Total Value for row SP to be \"\u003cSP_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter value in row Other Restructuring Costs ORC  and column PE with \"\u003cORC_PE\u003e\" and column TE with \"\u003cORC_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can see the Total Value for row ORC to be \"\u003cORC_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter value in row Less Recoveries of Staff Costs LR  and column PE with \"\u003cLR_PE\u003e\" and column TE with \"\u003cLR_TE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see the Total Value for row LR to be \"\u003cLR_T\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the Final Total Column for Column PE to be \"\u003cT_PE\u003e\"  Column TE to be \"\u003cT_TE\u003e\" and column total to be \"\u003cT_T\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "WS_PE",
        "WS_TE",
        "WS_T",
        "SSC_PE",
        "SSC_TE",
        "SSC_T",
        "PC_PE",
        "PC_TE",
        "PC_T",
        "ASC_TE",
        "ASC_T",
        "RP_PE",
        "RP_TE",
        "RP_T",
        "SP_PE",
        "SP_TE",
        "SP_T",
        "ORC_PE",
        "ORC_TE",
        "ORC_T",
        "LR_PE",
        "LR_TE",
        "LR_T",
        "T_PE",
        "T_TE",
        "T_T"
      ],
      "line": 29,
      "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "2",
        "1",
        "1",
        "2",
        "1",
        "1",
        "2",
        "1",
        "1",
        "1",
        "1",
        "2",
        "1",
        "1",
        "2",
        "1",
        "1",
        "2",
        "1",
        "1",
        "2",
        "7",
        "8",
        "15"
      ],
      "line": 30,
      "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4",
        "2",
        "2",
        "4",
        "2",
        "2",
        "4",
        "2",
        "2",
        "2",
        "2",
        "4",
        "2",
        "2",
        "4",
        "2",
        "2",
        "4",
        "2",
        "2",
        "4",
        "14",
        "16",
        "30"
      ],
      "line": 31,
      "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;3"
    },
    {
      "cells": [
        "10",
        "10",
        "20",
        "10",
        "10",
        "20",
        "10",
        "10",
        "20",
        "10",
        "10",
        "10",
        "10",
        "20",
        "10",
        "10",
        "20",
        "10",
        "10",
        "20",
        "10",
        "10",
        "20",
        "70",
        "80",
        "150"
      ],
      "line": 32,
      "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3056147048,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "testing Staff Costes section with valid credentials",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SC"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Staff Costs section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in row wages and salaries WS and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the Total Value for row  wages and salaries WS to be \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in row Social Security Costs SSC  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Total Value for row SSC to be \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in row Pension Costs PC  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see the Total Value for row PC to be \"2\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter value in row Agency Staff Costs ASC  and TE with \"1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see the Total Value for row ASC to be \"1\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter value in row Redundancy payment RP  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the Total Value for row RP to be \"2\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter value in row Severance Payments SP  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see the Total Value for row SP to be \"2\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter value in row Other Restructuring Costs ORC  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    17,
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can see the Total Value for row ORC to be \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter value in row Less Recoveries of Staff Costs LR  and column PE with \"1\" and column TE with \"1\"",
  "matchedColumns": [
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see the Total Value for row LR to be \"2\"",
  "matchedColumns": [
    22
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the Final Total Column for Column PE to be \"7\"  Column TE to be \"8\" and column total to be \"15\"",
  "matchedColumns": [
    23,
    24,
    25
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2557295045,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_StaffCosts_stepdefs.iNavigateToStaffCostsSection()"
});
formatter.result({
  "duration": 577842924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 86
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowWagesAndSalariesWSAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 264518491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 64
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowWagesAndSalariesWSToBe(String)"
});
formatter.result({
  "duration": 61820091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 91
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSocialSecurityCostsSSCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 192280713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSSCToBe(String)"
});
formatter.result({
  "duration": 55206284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowPensionCostsPCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 196063540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowPCToBe(String)"
});
formatter.result({
  "duration": 61727863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowAgencyStaffCostsASCAndTEWith(String)"
});
formatter.result({
  "duration": 94462035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowASCToBe(String)"
});
formatter.result({
  "duration": 56482416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 64
    },
    {
      "val": "1",
      "offset": 87
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowRedundancyPaymentRPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 203677999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowRPToBe(String)"
});
formatter.result({
  "duration": 68225536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 64
    },
    {
      "val": "1",
      "offset": 87
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSeverancePaymentsSPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 192790948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSPToBe(String)"
});
formatter.result({
  "duration": 170583201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowOtherRestructuringCostsORCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 183200898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowORCToBe(String)"
});
formatter.result({
  "duration": 55785461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "1",
      "offset": 99
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowLessRecoveriesOfStaffCostsLRAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 205000191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowLRToBe(String)"
});
formatter.result({
  "duration": 56201631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 54
    },
    {
      "val": "8",
      "offset": 75
    },
    {
      "val": "15",
      "offset": 102
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheFinalTotalColumnForColumnPEToBeColumnTEToBeAndColumnTotalToBe(String,String,String)"
});
formatter.result({
  "duration": 5163736563,
  "status": "passed"
});
formatter.after({
  "duration": 186296339,
  "status": "passed"
});
formatter.before({
  "duration": 9036429275,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "testing Staff Costes section with valid credentials",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SC"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Staff Costs section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in row wages and salaries WS and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the Total Value for row  wages and salaries WS to be \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in row Social Security Costs SSC  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Total Value for row SSC to be \"4\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in row Pension Costs PC  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see the Total Value for row PC to be \"4\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter value in row Agency Staff Costs ASC  and TE with \"2\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see the Total Value for row ASC to be \"2\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter value in row Redundancy payment RP  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the Total Value for row RP to be \"4\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter value in row Severance Payments SP  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see the Total Value for row SP to be \"4\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter value in row Other Restructuring Costs ORC  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    17,
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can see the Total Value for row ORC to be \"4\"",
  "matchedColumns": [
    19
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter value in row Less Recoveries of Staff Costs LR  and column PE with \"2\" and column TE with \"2\"",
  "matchedColumns": [
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see the Total Value for row LR to be \"4\"",
  "matchedColumns": [
    22
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the Final Total Column for Column PE to be \"14\"  Column TE to be \"16\" and column total to be \"30\"",
  "matchedColumns": [
    23,
    24,
    25
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2269075194,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_StaffCosts_stepdefs.iNavigateToStaffCostsSection()"
});
formatter.result({
  "duration": 98949616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 63
    },
    {
      "val": "2",
      "offset": 86
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowWagesAndSalariesWSAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 738952276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 64
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowWagesAndSalariesWSToBe(String)"
});
formatter.result({
  "duration": 58878157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 68
    },
    {
      "val": "2",
      "offset": 91
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSocialSecurityCostsSSCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 200792831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSSCToBe(String)"
});
formatter.result({
  "duration": 57296397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 59
    },
    {
      "val": "2",
      "offset": 82
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowPensionCostsPCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 192568293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowPCToBe(String)"
});
formatter.result({
  "duration": 59966768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowAgencyStaffCostsASCAndTEWith(String)"
});
formatter.result({
  "duration": 96484553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowASCToBe(String)"
});
formatter.result({
  "duration": 55631012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 64
    },
    {
      "val": "2",
      "offset": 87
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowRedundancyPaymentRPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 201218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowRPToBe(String)"
});
formatter.result({
  "duration": 71218743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 64
    },
    {
      "val": "2",
      "offset": 87
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSeverancePaymentsSPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 199362422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSPToBe(String)"
});
formatter.result({
  "duration": 56255675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 95
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowOtherRestructuringCostsORCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 197231750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowORCToBe(String)"
});
formatter.result({
  "duration": 55006054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 76
    },
    {
      "val": "2",
      "offset": 99
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowLessRecoveriesOfStaffCostsLRAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 184475095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowLRToBe(String)"
});
formatter.result({
  "duration": 67013728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 54
    },
    {
      "val": "16",
      "offset": 76
    },
    {
      "val": "30",
      "offset": 104
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheFinalTotalColumnForColumnPEToBeColumnTEToBeAndColumnTotalToBe(String,String,String)"
});
formatter.result({
  "duration": 5169542764,
  "status": "passed"
});
formatter.after({
  "duration": 143532309,
  "status": "passed"
});
formatter.before({
  "duration": 7831769727,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "testing Staff Costes section with valid credentials",
  "description": "",
  "id": "testing-the-staff-costs-section-in-sofa;testing-staff-costes-section-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SC"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Staff Costs section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in row wages and salaries WS and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the Total Value for row  wages and salaries WS to be \"20\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter value in row Social Security Costs SSC  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Total Value for row SSC to be \"20\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter value in row Pension Costs PC  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see the Total Value for row PC to be \"20\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter value in row Agency Staff Costs ASC  and TE with \"10\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see the Total Value for row ASC to be \"10\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter value in row Redundancy payment RP  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the Total Value for row RP to be \"20\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter value in row Severance Payments SP  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see the Total Value for row SP to be \"20\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter value in row Other Restructuring Costs ORC  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    17,
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can see the Total Value for row ORC to be \"20\"",
  "matchedColumns": [
    19
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter value in row Less Recoveries of Staff Costs LR  and column PE with \"10\" and column TE with \"10\"",
  "matchedColumns": [
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see the Total Value for row LR to be \"20\"",
  "matchedColumns": [
    22
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the Final Total Column for Column PE to be \"70\"  Column TE to be \"80\" and column total to be \"150\"",
  "matchedColumns": [
    23,
    24,
    25
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2169468113,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_StaffCosts_stepdefs.iNavigateToStaffCostsSection()"
});
formatter.result({
  "duration": 96083540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 63
    },
    {
      "val": "10",
      "offset": 87
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowWagesAndSalariesWSAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 727200213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 64
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowWagesAndSalariesWSToBe(String)"
});
formatter.result({
  "duration": 56061521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 68
    },
    {
      "val": "10",
      "offset": 92
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSocialSecurityCostsSSCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 195408800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSSCToBe(String)"
});
formatter.result({
  "duration": 56747039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    },
    {
      "val": "10",
      "offset": 83
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowPensionCostsPCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 197886770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowPCToBe(String)"
});
formatter.result({
  "duration": 62969381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 58
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowAgencyStaffCostsASCAndTEWith(String)"
});
formatter.result({
  "duration": 96073558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowASCToBe(String)"
});
formatter.result({
  "duration": 58618671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 64
    },
    {
      "val": "10",
      "offset": 88
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowRedundancyPaymentRPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 210129905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowRPToBe(String)"
});
formatter.result({
  "duration": 59912713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 64
    },
    {
      "val": "10",
      "offset": 88
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowSeverancePaymentsSPAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 195141777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowSPToBe(String)"
});
formatter.result({
  "duration": 56526727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 72
    },
    {
      "val": "10",
      "offset": 96
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowOtherRestructuringCostsORCAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 202529527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 45
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowORCToBe(String)"
});
formatter.result({
  "duration": 55162757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 76
    },
    {
      "val": "10",
      "offset": 100
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iEnterValueInRowLessRecoveriesOfStaffCostsLRAndColumnPEWithAndColumnTEWith(String,String)"
});
formatter.result({
  "duration": 198174089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheTotalValueForRowLRToBe(String)"
});
formatter.result({
  "duration": 61159152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 54
    },
    {
      "val": "80",
      "offset": 76
    },
    {
      "val": "150",
      "offset": 104
    }
  ],
  "location": "SoFA_StaffCosts_stepdefs.iCanSeeTheFinalTotalColumnForColumnPEToBeColumnTEToBeAndColumnTotalToBe(String,String,String)"
});
formatter.result({
  "duration": 5172513849,
  "status": "passed"
});
formatter.after({
  "duration": 184943427,
  "status": "passed"
});
formatter.uri("src/test/resources/sofa_resources/SoFa_OtherCapitalGrants.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the Other Capital Grants Page",
  "description": "",
  "id": "testing-the-other-capital-grants-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OCG"
    },
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"\u003cLocal Authority Capital Grants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"\u003cOther Government Capital Grants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"\u003cNon-Government Capital Grants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"\u003cTotal\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "Data for Happy Path",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path",
  "rows": [
    {
      "cells": [
        "Local Authority Capital Grants",
        "Other Government Capital Grants",
        "Non-Government Capital Grants",
        "Total"
      ],
      "line": 14,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;1"
    },
    {
      "cells": [
        "10",
        "10",
        "10",
        "30"
      ],
      "line": 15,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;2"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "3"
      ],
      "line": 16,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;3"
    },
    {
      "cells": [
        "100",
        "100",
        "100",
        "300"
      ],
      "line": 17,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;4"
    },
    {
      "cells": [
        "200",
        "200",
        "200",
        "600"
      ],
      "line": 18,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;5"
    },
    {
      "cells": [
        "300",
        "300",
        "300",
        "900"
      ],
      "line": 19,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;6"
    },
    {
      "cells": [
        "500",
        "500",
        "500",
        "1500"
      ],
      "line": 20,
      "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8120982284,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2338100646,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 517874403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 91891073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 84168565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 75404134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5038939642,
  "status": "passed"
});
formatter.after({
  "duration": 152512267,
  "status": "passed"
});
formatter.before({
  "duration": 3236752503,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 8254702249,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 494062396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 95444440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 79383371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 68243843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5045599402,
  "status": "passed"
});
formatter.after({
  "duration": 264043995,
  "status": "passed"
});
formatter.before({
  "duration": 3763187429,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2468785035,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 548818561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 96028218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 81406405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 79249782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5045209428,
  "status": "passed"
});
formatter.after({
  "duration": 181389519,
  "status": "passed"
});
formatter.before({
  "duration": 7398235082,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"600\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2268258754,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 724158732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 97525610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 88992074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 78222127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5044277658,
  "status": "passed"
});
formatter.after({
  "duration": 186517647,
  "status": "passed"
});
formatter.before({
  "duration": 3070877433,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"300\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"300\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"300\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"900\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 8123866418,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 531730351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 95098453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 79039614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 86554772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5041317380,
  "status": "passed"
});
formatter.after({
  "duration": 175505307,
  "status": "passed"
});
formatter.before({
  "duration": 3098421034,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Checking Other Capital Grants with Valid Credentials",
  "description": "",
  "id": "testing-the-other-capital-grants-page;checking-other-capital-grants-with-valid-credentials;data-for-happy-path;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    },
    {
      "line": 3,
      "name": "@OCG"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SoFA section",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to Other Capital Grants page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter value in Local Authority Capital Grant with \"500\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter value in Other Government Capital Grants with \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter value in Non-Government Capital Grants with \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the value populated in the Total field to be \"1500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SoFa_Donations_stepdefs.iAmOnSoFASection()"
});
formatter.result({
  "duration": 2434617388,
  "status": "passed"
});
formatter.match({
  "location": "SoFA_OtherCapitalGrants_stepdefs.iNavigateToOtherCapitalGrantsPage()"
});
formatter.result({
  "duration": 573675639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInLocalAuthorityCapitalGrantWith(String)"
});
formatter.result({
  "duration": 91440313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 55
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInOtherGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 98115032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 53
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iEnterValueInNonGovernmentCapitalGrantsWith(String)"
});
formatter.result({
  "duration": 85670408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 56
    }
  ],
  "location": "SoFA_OtherCapitalGrants_stepdefs.iCanSeeTheValuePopulatedInTheTotalFieldToBe(String)"
});
formatter.result({
  "duration": 5043028878,
  "status": "passed"
});
formatter.after({
  "duration": 183158749,
  "status": "passed"
});
});