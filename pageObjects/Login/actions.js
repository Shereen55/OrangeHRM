
class LoginPageAction {
    visitLoginPage() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
  
    enterUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[type="password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('[type="submit"]').click();
    }

    clickLogoutButton() {
      cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
      cy.contains('Logout').click();
    }

    clickForgotPasswordLink() {
      cy.contains('Forgot your password? ').click();
    }

    clickOnRefresh() {
      cy.reload();      
    }
    
    login() {
      this.visitLoginPage();
      this.enterUsername('Admin');
      this.enterPassword('admin123');
      this.clickLoginButton();
    }
  }
  
  export default LoginPageAction;