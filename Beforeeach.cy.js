///<reference types = 'cypress' />
describe('', () => {
    afterEach(() => {
        // Clear cookies after each test
        cy.clearCookies();
      });
    beforeEach( () => {

        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get('[name="username"]').type("tomsmith");
        cy.get('[id="password"]').type("SuperSecretPassword!");
    })

    it('', () => {
        cy.get("[type='submit']").should("be.visible");
        cy.get("[type='submit']").click()
        cy.url().should("include","/secure")
    });
    
});
    