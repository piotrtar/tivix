import { Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { HomePO } from '../../pages/home.po';
import { City } from '../../enums/cities';
import { getDateInGivenDaysFromNowAsString } from "../../support/dateUtil";
import { Country } from "../../enums/countries";

let homePage: HomePO;

Before(() => {
    homePage = new HomePO();
});

Given("the user vists the home page", () => {
    cy.visit('/');
});

When('the user selects country {string}', (country: Country) => {
    homePage.selectCountry(country);
});

When('the user selects city {string}', (city: City) => {
    homePage.selectCity(city);
});

When('the user selects pick up date as {string} days from now', (days: number) => {
    const pickupDate = getDateInGivenDaysFromNowAsString(days);
    homePage.selectPickupDate(pickupDate);
});

When('the user selects drop off date as {string} days from now', (days: number) => {
    const dropoffDate = getDateInGivenDaysFromNowAsString(days);
    homePage.selectDropoffDate(dropoffDate);
});

When('the user clicks search button', () => {
    homePage.clickOnSearchButton();
});

Then('the user can see the search results', () => {
    homePage.validateIfSearchResultsAreVisible();
});

When('the user clicks on rent button of the car of license plate {string}', (licensePlate: string) => {
    homePage.clickRentButtonOfLicensePlate(licensePlate);
});

Given('the user searches for car in country {string}, city {string}, pickup date {string} days and dropoff {string} days from now', (country: Country, city: City, pickupDays: number, dropoffDays: number) => {
    cy.visit('/');
    homePage.selectCountry(country);
    homePage.selectCity(city);
    const pickupDate = getDateInGivenDaysFromNowAsString(pickupDays);
    homePage.selectPickupDate(pickupDate);
    const dropoffDate = getDateInGivenDaysFromNowAsString(dropoffDays);
    homePage.selectDropoffDate(dropoffDate);
    homePage.clickOnSearchButton();
});