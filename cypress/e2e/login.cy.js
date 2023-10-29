describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    // Type User
    cy.get('[aria-label="Username"]').type('Admin').wait(1000); // Wait for 1 second

    // Type Password
    cy.get('[aria-label="Password"]').type('12345678').wait(1000); // Wait for 1 second

    // Click the "Login" button
    cy.get('button').click().wait(2000); // Wait for 2 seconds
  })
})