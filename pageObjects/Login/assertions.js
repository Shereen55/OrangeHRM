class LoginPageAssertion {

    dashboardInUrl() {
        cy.url().should("include", "/dashboard");
        cy.wait(3000);
        return this;
    }

    invalidcredentials() {
        cy.contains('Invalid credentials').should('be.visible');
        return this;
    }

    inputRequired() {
        cy.contains('Required').should('be.visible');
        return this;
    }

    resetPassword() {
        cy.url().should('include', '/requestPasswordResetCode');
        cy.contains(' Cancel ').click();
        return this;
    }

    loginPageUrl() {
        cy.contains('Username : Admin').should('be.visible');
        return this;
    }
}

export default LoginPageAssertion;
