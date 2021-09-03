describe('Home (index.js)', () => {
  it('should render "Matthew"', () => {
    // Visit local index page and check for 'Matthew'
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Matthew');
  });
});
