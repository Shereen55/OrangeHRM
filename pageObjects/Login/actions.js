
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
      cy.get('.oxd-icon bi-caret-down-fill oxd-userdropdown-icon').click();
      cy.get('[href="/web/index.php/auth/logout"]').click();
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
      this.enterPassword('admin 123');
      this.clickLoginButton();
    }
  }
  
  export default LoginPageAction;