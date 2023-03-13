export class SummaryPO {
    
    nameInput = "[id='name']";
    lastNameInput = "[id='last_name']";
    cardNumberInput = "[id='card_number']";
    emailInput = "[id='email']";
    
    provideName(name: string): void {
        cy.get(this.nameInput).type(name);
    }

    provideLastName(lastName: string): void {
        cy.get(this.lastNameInput).type(lastName);
    }

    provideCardNumber(cardNumber: string): void {
        cy.get(this.cardNumberInput).type(cardNumber);
    }

    provideEmail(email: string): void {
        cy.get(this.emailInput).type(email);
    }

    verifyNameInputValue(name: string): void {
        cy.get(this.nameInput).should('have.value', name);
    }
    
    verifyLastNameInputValue(lastName: string): void {
        cy.get(this.lastNameInput).should('have.value', lastName);
    }
    
    verifyCardNumberInputValue(cardNumber: string): void {
        cy.get(this.cardNumberInput).should('have.value', cardNumber);
    }
    
    verifyEmailInputValue(email: string): void {
        cy.get(this.emailInput).should('have.value', email);
    }
}