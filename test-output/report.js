$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user can view the products and prices by navigating from the home page",
  "description": "",
  "id": "homepage;verify-user-can-view-the-products-and-prices-by-navigating-from-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens the URL \"https://aspiration.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks at Spend and Save link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User navigates to product page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see two card products - Aspiration and Aspiration Plus",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks Get Aspiration",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "A modal containing an input field for an email address to sign up appears",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User close the modal",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks at Get Aspiration Plus",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "A modal with monthly and yearly plans appears",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that yearly radio option is $71.88 paid once yearly",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify that monthly radio option is $7.99 paid monthly",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Step.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 11375798900,
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
  "duration": 7347431099,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_at_Spend_and_Save_link()"
});
formatter.result({
  "duration": 10154383900,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_navigates_to_product_page()"
});
formatter.result({
  "duration": 4863500,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_see_two_card_products_Aspiration_and_Aspiration_Plus()"
});
formatter.result({
  "duration": 98980999,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_Get_Aspiration()"
});
formatter.result({
  "duration": 4407888900,
  "status": "passed"
});
formatter.match({
  "location": "Step.a_modal_containing_an_input_field_for_an_email_address_to_sign_up_appears()"
});
formatter.result({
  "duration": 19810700,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_close_the_modal()"
});
formatter.result({
  "duration": 286670100,
  "status": "passed"
});
formatter.match({
  "location": "Step.user_clicks_at_Get_Aspiration_Plus()"
});
formatter.result({
  "duration": 2295215600,
  "status": "passed"
});
formatter.match({
  "location": "Step.a_modal_with_monthly_and_yearly_plans_appears()"
});
formatter.result({
  "duration": 12304900,
  "status": "passed"
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
  "duration": 37514200,
  "status": "passed"
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
  "duration": 38431700,
  "status": "passed"
});
formatter.match({
  "location": "Step.close_browser()"
});
formatter.result({
  "duration": 2777657000,
  "status": "passed"
});
});