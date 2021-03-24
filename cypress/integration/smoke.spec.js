describe('Smoke Test', () => {
    it('Display Hello message', ()=>{
        cy.visit('http://localhost:1234')
            .contains('Hello People')
    })
});