import React from 'react'
import EventRequestForm from './EventRequestForm'

describe('<EventRequestForm />', () => {
  it('fills out the form and adds an event', () => {
    // Define a stub function for addEventProps
    const addEventPropsStub = cy.stub().as('addEventPropsStub');

    cy.mount(<EventRequestForm addEventProps={addEventPropsStub} />);

    // Type text into the Event Name input field
    cy.get('[aria-label="eventname"]').type('Event Name').wait(1000); // Wait for 1 second

    // Type text into the Client input field
    cy.get('[aria-label="client"]').type('Client Name').wait(1000); // Wait for 1 second

    // Type text into the Date input field
    cy.get('[aria-label="date"]').type('31.10.2023').wait(1000); // Wait for 1 second

    // Click the "Add" button
    cy.get('button').click().wait(2000); // Wait for 2 seconds

    // You can add assertions to check if the event was added as expected.
    // For example, you can check if the form fields are cleared after clicking "Add".

    // Verify that the addEventPropsStub was called
    cy.get('@addEventPropsStub').should('have.been.calledOnce');
  });
});
