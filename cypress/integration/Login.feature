Feature: Test OrangeHRM Login Page

  Scenario: Successful Login
    Given User is on the login page
    When User enters valid username and password
    And clicks on the login button
    Then User should be redirected to the dashboard

  Scenario: Redirected to the login page after logout
    Given User is logged in to OrangeHRM
    When User clicks on the logout button
    Then User should be redirected to the login page

  Scenario: Invalid Login - Invalid Username
    Given User is on the login page
    When User enters invalid username and valid password
    And clicks on the login button
    Then User should see an error message indicating invalid credentials

  Scenario: Invalid Login - Invalid password
    Given User is on the login page
    When User enters valid username and invalid password
    And clicks on the login button
    Then User should see an error message indicating invalid credentials

  Scenario: Invalid Login - Empty Username
    Given User is on the login page
    When User enters valid password
    And clicks on the login button
    Then User should see an error message indicating Username Required

  Scenario: Invalid Login - Empty password
    Given User is on the login page
    When User enters valid username
    And clicks on the login button
    Then User should see an error message indicating password Required

  Scenario: Invalid Login - Empty Username and password
    Given User is on the login page
    And clicks on the login button
    Then User should see an error message indicating Username Required
    And User should see an error message indicating password Required

  Scenario: Invalid Login - Invalid Username and password
    Given User is on the login page
    When User enters invalid Username and password
    And clicks on the login button
    Then User should see an error message indicating invalid credentials

  Scenario: Invalid Login - Case Sensitivity - Username
    Given User is on the login page
    When User enters username in different cases and valid password
    And clicks on the login button
    Then User should see an error message indicating invalid credentials

  Scenario: Invalid Login - Case Sensitivity - password
    Given User is on the login page
    When User enters valid username and password in different cases
    And clicks on the login button
    Then User should see an error message indicating invalid credentials

  Scenario: Forgot Password Link
    Given User is on the login page
    When User clicks on the Forgot Password link
    Then User should be redirected to the reset password page

  Scenario: Check behavior after page reload
    Given User is on the login page
    When User clicks on refresh page
    Then User should be redirected to the login page after reloading the page

  Scenario: Check Username and Password fields after page reload
    Given User is on the login page
    And User enters valid username and password
    When User clicks on refresh page
    And clicks on the login button
    Then User should see an error message indicating Username Required
    And User should see an error message indicating password Required








