import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPageAction from '../../../pageObjects/Login/actions';
import LoginPageAssertion from '../../../pageObjects/Login/assertions';

const loginPageAction = new LoginPageAction();
const loginPageAssertion = new LoginPageAssertion();

Given('User is on the login page', () => {
  loginPageAction.visitLoginPage();
});

Given('User is logged in to OrangeHRM', () => {
  loginPageAction.login();
});

When('User enters valid username and password', () => {
  loginPageAction.enterUsername('admin');
  loginPageAction.enterPassword('admin123');
});

And('User enters valid username and password', () => {
  loginPageAction.enterUsername('admin');
  loginPageAction.enterPassword('admin123');
});

And('clicks on the login button', () => {
  loginPageAction.clickLoginButton();
});

Then('User should be redirected to the dashboard', () => {
  loginPageAssertion.dashboardInUrl();
});

When('User enters invalid Username and password', () => {
  loginPageAction.enterUsername('invaliduser');
  loginPageAction.enterPassword('invalidpassword');
});

When('User enters valid username and invalid password', () => {
  loginPageAction.enterUsername('Admin');
  loginPageAction.enterPassword('invalidpassword');
});

When('User enters invalid username and valid password', () => {
  loginPageAction.enterUsername('invaliduser');
  loginPageAction.enterPassword('admin123');
});

When('User enters valid username', () => {
  loginPageAction.enterUsername('Admin');
});

When('User enters valid password', () => {
  loginPageAction.enterPassword('admin123');
});

Then('User should see an error message indicating invalid credentials', () => {
  loginPageAssertion.invalidcredentials();
});

When('User enters username in different cases and valid password', () => {
  loginPageAction.enterUsername('ADMAIN');
  loginPageAction.enterPassword('admin123');
});

Then('User should see an error message indicating Username Required', () => {
  loginPageAssertion.inputRequired();
});

When('User enters valid username and password in different cases', () => {
  loginPageAction.enterUsername('Admin');
  loginPageAction.enterPassword('ADMIN123');
});

Then('User should see an error message indicating password Required', () => {
  loginPageAssertion.inputRequired();
});

And('User should see an error message indicating password Required', () => {
  loginPageAssertion.inputRequired();
});

When('User clicks on the Forgot Password link', () => {
  loginPageAction.clickForgotPasswordLink();
});

When('User should be redirected to the reset password page', () => {
  loginPageAssertion.resetPassword();
});

When('User clicks on refresh page', () => {
  loginPageAction.clickOnRefresh();
});

Then('User should be redirected to the login page after reloading the page', () => {
  loginPageAssertion.loginPageUrl();
});

When('User clicks on the logout button', () => {
  loginPageAction.login();
});

Then('User should be redirected to the login page', () => {
  loginPageAssertion.loginPageUrl();
});