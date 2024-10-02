//your JS code here. If required.
cy.get('button').first().click();
cy.get('.modal').should('be.visible');
cy.wait(500);  // Wait for modal to be fully rendered
cy.get('.btn-close').click();
cy.get('.modal').should('not.be.visible');
