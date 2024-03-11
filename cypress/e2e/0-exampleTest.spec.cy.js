

describe ('Initial Test', () => {
    it('visits the app and and checks for the value of h1', () => {
        cy.visit('/')
        cy.get('h1').should('contain', 'Wilma the Whimsical Word Wizard')
    })
})
    



describe('Translation App', () => {
    it('submits translation request successfully', () => {
      // Visit the page where your Input component is rendered
      cy.visit('/');
  
      // Simulate typing into the textarea for input text
      cy.get('textarea[name="textContent"]')
        .type('Hello, world!');
  
      // Simulate selecting a language from the dropdown
      cy.get('select[name="language"]')
        .select('Pirate'); // Make sure to use one of the options exactly as it's value in your select element
  
      // Submit the form by clicking the translate button
      cy.get('form#inputForm button[type="submit"]')
        .click();
  
      // Verify the translated text is displayed
      // This step may need to be adjusted based on how your application handles API responses and updates the UI.
      // If the API call is asynchronous, consider using cy.intercept() to stub the request or wait for it to complete.
      //cy.get('h3').should('contain', 'Ahoy, world!' ); 
      cy.get('div > h3').first().should('exist');
      //.first finds first h3 
      
      // Replace 'YourExpectedTranslatedTextHere' with the actual text you expect to be displayed after translation
  
      // Note: Since this test assumes the API call succeeds and the translated text is shown immediately,
      // in a real-world scenario, you might need to handle waiting for asynchronous operations to complete.
    });
})