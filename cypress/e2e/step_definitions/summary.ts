import { Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { SummaryPO } from "../../pages/summary.po";

let summaryPage: SummaryPO;

Before(() => {
    summaryPage = new SummaryPO();
});

When('the user inputs name {string}', (name: string) => {
    summaryPage.provideName(name);
});

When('the user inputs last name {string}', (lastName: string) => {
    summaryPage.provideLastName(lastName);
});

When('the user inputs card number {string}', (cardNumber: string) => {
    summaryPage.provideCardNumber(cardNumber);
});

When('the user inputs email {string}', (email: string) => {
    summaryPage.provideEmail(email);
});

Then('the user can see the name of {string} provided', (name: string) => {
    summaryPage.verifyNameInputValue(name);
});

Then('the user can see the last name of {string} provided', (lastName: string) => {
    summaryPage.verifyLastNameInputValue(lastName);
});

Then('the user can see the card number of {string} provided', (cardNumber: string) => {
    summaryPage.verifyCardNumberInputValue(cardNumber);
});

Then('the user can see the email of {string} provided', (email: string) => {
    summaryPage.verifyEmailInputValue(email);
});
