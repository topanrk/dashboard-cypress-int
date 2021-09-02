describe('kumpulan test case', function() {
    it('tc-1', function() {
        // cy.visit('https://bukalapak.com')
        // cy.get('.bl-link > .pr-4').click()
        // cy.get('.bl-text-field__inner').type('topan')
        // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        // cy.get('select').select('opel')
        // cy.get('[value="Bike"]').check()

        //akses halaman
        cy.visit('https://demoqa.com/automation-practice-form')

        //1. Input nama awal dan nama akhir.
        cy.get('#firstName').type('Topan')
        cy.get('#lastName').type('Ramdhanis')

        //2. Input email.
        cy.get('#userEmail').type('emailtesting@gmail.com')

        //3. Check gender.
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        //  > .custom-control-label').check()
        // cy.get('#genterWrapper > .col-md-3').check()

        //4. Input mobile number.
        cy.get('#userNumber').type('0808080808')

        //5. Check hobbies.
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

        //6. Isi current address.
        cy.get('#currentAddress').type('Jalan Kenangan')
        //7. Click button submit.
        cy.get('#submit').click()

    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})