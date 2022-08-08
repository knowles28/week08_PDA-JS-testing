describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should show 2 add 4 equals 6', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should show 4 minus 1 equals 3', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should show 4 multipled by 2 equals 8', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should show 9 divided by 3 equals 3', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should show 2 add 4, multipled by 3 equals 18', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '18')
  })

  it('should show 4 minus 5 equals -1', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should show 2.2 add 3.3 equals 5.5', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.5')
  })

  it('should show 2 multipled by 4,000,000,000,000 equals 8,000,000,000,000', () => {
    cy.get('#number2').click();

    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();

  
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8000000000000')
    })


    it('should show 4 divided by 0 displays an error', () => {
      cy.get('#number4').click();
      cy.get('#operator-divide').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('.display').should('contain', 'ERROR')
  })

})