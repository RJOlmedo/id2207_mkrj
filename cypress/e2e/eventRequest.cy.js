describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
  
      // Type User
      cy.get('[aria-label="Username"]').type('Admin').wait(1000); // Wait for 1 second
  
      // Type Password
      cy.get('[aria-label="Password"]').type('12345678').wait(1000); // Wait for 1 second
  
      // Click the "Login" button
      cy.get('button').click().wait(2000); // Wait for 2 seconds

      // CLick the Events tab
      cy.get(':nth-child(3) > a').click().wait(1000);

      // Type text into the Event Name input field
    cy.get('[aria-label="eventname"]').type('Event Name').wait(1000); // Wait for 1 second

    // Type text into the Client input field
    cy.get('[aria-label="client"]').type('Client Name').wait(1000); // Wait for 1 second

    // Type text into the Date input field
    cy.get('[aria-label="date"]').type('31.10.2023').wait(1000); // Wait for 1 second

    // Click the "Add" button
    cy.get('button').click().wait(2000); // Wait for 2 seconds
    })
  })