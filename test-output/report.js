$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Verify user can view the products and prices by navigating from the home page"
    },
    {
      "line": 5,
      "value": "#\tGiven User Launch Chrome browser"
    },
    {
      "line": 6,
      "value": "#\tWhen User opens the URL \"https://aspiration.com/\""
    },
    {
      "line": 7,
      "value": "#And User clicks at Spend and Save link"
    },
    {
      "line": 8,
      "value": "#And User navigates to product page"
    },
    {
      "line": 9,
      "value": "#Then User see two card products - Aspiration and Aspiration Plus"
    },
    {
      "line": 10,
      "value": "#And User clicks Get Aspiration"
    },
    {
      "line": 11,
      "value": "##Then A modal containing an input field for an email address to sign up appears"
    },
    {
      "line": 12,
      "value": "#And User close the modal"
    },
    {
      "line": 13,
      "value": "##Then User clicks at Get Aspiration Plus"
    },
    {
      "line": 14,
      "value": "#And A modal with monthly and yearly plans appears"
    },
    {
      "line": 15,
      "value": "#Then Verify that yearly radio option is $71.88 paid once yearly"
    },
    {
      "line": 16,
      "value": "#And Verify that monthly radio option is $7.99 paid monthly"
    },
    {
      "line": 17,
      "value": "#And close browser"
    }
  ],
  "line": 20,
  "name": "Verify user can navigate from the home page to our products page",
  "description": "",
  "id": "homepage;verify-user-can-navigate-from-the-home-page-to-our-products-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens the URL \"https://aspiration.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks at Spend and Save link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User navigates to product page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User see two card products - Aspiration and Aspiration Plus",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 10754256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://aspiration.com/",
      "offset": 20
    }
  ],
  "location": "Step.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 17539970300,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_at_Spend_and_Save_link()"
});
formatter.result({
  "duration": 678257200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: Element \u003ca class\u003d\"Element-sc-1dc3ws0-0 Link__StyledLink-sc-17puyxl-0 duSMrm bwNrTn SiteMap__Link-sc-kspaz2-1 jNbZYr atom-link\" href\u003d\"https://www.aspiration.com/our-products\"\u003e is not clickable at point (742,568) because another element \u003cdiv id\u003d\"onetrust-group-container\" class\u003d\"ot-sdk-eight ot-sdk-columns\"\u003e obscures it\nBuild info: version: \u00273.10.0\u0027, revision: \u0027176b4a9\u0027, time: \u00272018-03-02T19:03:16.397Z\u0027\nSystem info: host: \u0027DESKTOP-OURGDUI\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 92.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210903235534, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 42716, moz:profile: C:\\Users\\manoj\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c3c42126-eb42-45b4-9cb9-a94fab2c960e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageObjects.Homepage.clicklink(Homepage.java:74)\r\n\tat stepDefinitions.Step.user_clicks_at_Spend_and_Save_link(Step.java:41)\r\n\tat ✽.And User clicks at Spend and Save link(./Features/Homepage.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step.user_navigates_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.user_see_two_card_products_Aspiration_and_Aspiration_Plus()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "User clicks at Get Aspiration card",
  "description": "",
  "id": "homepage;user-clicks-at-get-aspiration-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is at products page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User clicks Get Aspiration",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "A modal containing an input field for an email address to sign up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User close the modal",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_is_at_products_page()"
});
formatter.result({
  "duration": 1027400,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_Get_Aspiration()"
});
formatter.result({
  "duration": 298300,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.Step.user_clicks_Get_Aspiration(Step.java:87)\r\n\tat ✽.When User clicks Get Aspiration(./Features/Homepage.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step.a_modal_containing_an_input_field_for_an_email_address_to_sign_up_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.user_close_the_modal()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "User clicks at Get Aspiration Plus card",
  "description": "",
  "id": "homepage;user-clicks-at-get-aspiration-plus-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User is at products page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User clicks at Get Aspiration Plus",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "A modal with monthly and yearly plans appears",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Verify that yearly radio option is $71.88 paid once yearly",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify that monthly radio option is $7.99 paid monthly",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_is_at_products_page()"
});
formatter.result({
  "duration": 250000,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_at_Get_Aspiration_Plus()"
});
formatter.result({
  "duration": 326400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.Step.user_clicks_at_Get_Aspiration_Plus(Step.java:114)\r\n\tat ✽.When User clicks at Get Aspiration Plus(./Features/Homepage.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step.a_modal_with_monthly_and_yearly_plans_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "71",
      "offset": 36
    },
    {
      "val": "88",
      "offset": 39
    }
  ],
  "location": "Step.verify_that_yearly_radio_option_is_$_paid_once_yearly(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 37
    },
    {
      "val": "99",
      "offset": 39
    }
  ],
  "location": "Step.verify_that_monthly_radio_option_is_$_paid_monthly(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});