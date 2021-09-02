describe('Latihan Soal', function() {
    it('tc-01', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('#et_pb_contact_name_0').type('Topan').should('have.value','Topan')
        cy.get('#et_pb_contact_email_0').type('emailtesting@gmail.com').should('have.value','emailtesting@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    }),

    it('tc-02',function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('[value="male"]').check().should('have.value',"male")
    }),

    it('tc-03',function (){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('[value="Bike"]').check().should('have.value',"Bike")
    }),

    it('tc-04',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('select').select('Audi').should('have.value',"audi")
    }),

    it('tc-05',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('have.text','Button success')
    })
    

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})