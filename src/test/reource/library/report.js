$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "End to End test cases for Amazon application",
  "description": "Contains test scenarios includes login the application, search product",
  "id": "end-to-end-test-cases-for-amazon-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2796800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User login the applciation and verify user name in the header",
  "description": "",
  "id": "end-to-end-test-cases-for-amazon-application;user-login-the-applciation-and-verify-user-name-in-the-header",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launch the applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User moushover to the Hello sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on sign in button on ajax call",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter the username \u00279486294120\u0027 in the emailid/mobile number",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the entered mobile number \u0027+919486294120\u0027 displays on the mobile number feild",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enter the password \u0027643003\u0027 in the password feild",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify the username \u0027Hello, Akshaya\u0027 in the header page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_launch_the_applciation()"
});
formatter.result({
  "duration": 15106230300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 3012799500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_moushover_to_the_Hello_sign_in()"
});
formatter.result({
  "duration": 421238800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 3014640400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_click_on_sign_in_button_on_ajax_call()"
});
formatter.result({
  "duration": 2220018200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9486294120",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_enter_the_username_in_the_emailid_mobile_number(String)"
});
formatter.result({
  "duration": 1041033900,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_click_on_continue_button()"
});
formatter.result({
  "duration": 1398227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+919486294120",
      "offset": 39
    }
  ],
  "location": "Step_definition.user_verify_the_entered_mobile_number_displays_on_the_mobile_number_feild(String)"
});
formatter.result({
  "duration": 118035700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "643003",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_enter_the_password_in_the_password_feild(String)"
});
formatter.result({
  "duration": 459277600,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_click_on_login_button()"
});
formatter.result({
  "duration": 207733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 3011383900,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_verify_the_username_Hello_Akshaya_in_the_header_page()"
});
formatter.result({
  "duration": 64787509600,
  "error_message": "java.lang.RuntimeException\r\n\tat com.amazon.baseclass.BaseClass.getElementText(BaseClass.java:191)\r\n\tat com.amazon.stepdefinition.Step_definition.user_verify_the_username_Hello_Akshaya_in_the_header_page(Step_definition.java:98)\r\n\tat ✽.Then User verify the username \u0027Hello, Akshaya\u0027 in the header page(AmazonLogin.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 779742600,
  "status": "passed"
});
});