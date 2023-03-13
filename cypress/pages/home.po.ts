import { City } from "../enums/cities";
import { Country } from "../enums/countries";

export class HomePO {

    countryDropdown = "[id='country']";
    cityDropdown = "[id='city']";
    modelInput = "[id='city']";
    pickupDateInput = "[id='pickup']";
    dropoffDateInput = "[id='dropoff']";
    searchButton = "[type='submit']";
    searchResults = "[id='search-results']";

    selectCountry(country: Country): void {
        switch (country) {
            case Country.France:
                cy.get(this.countryDropdown).select(Country.France);
                break;
            case Country.Germany:
                cy.get(this.countryDropdown).select(Country.Germany);
                break;
            case Country.Poland:
                cy.get(this.countryDropdown).select(Country.Poland);
                break;
        }
    }
    selectCity(city: City): void {
        switch (city) {
            case City.Berlin:
                cy.get(this.cityDropdown).select(City.Berlin);
                break;
            case City.Cracow:
                cy.get(this.cityDropdown).select(City.Cracow);
                break;
            case City.Paris:
                cy.get(this.cityDropdown).select(City.Paris);
                break;
            case City.Wroclaw:
                cy.get(this.cityDropdown).select(City.Wroclaw);
                break;
        }
    }

    selectPickupDate(date: string): void {
        cy.get(this.pickupDateInput).type(date);
    }

    selectDropoffDate(date: string): void {
        cy.get(this.dropoffDateInput).type(date);
    }

    clickOnSearchButton(): void {
        cy.get(this.searchButton).click();
    }

    validateIfSearchResultsAreVisible(): void {
        cy.get(this.searchResults).should('be.visible');
    }

    clickRentButtonOfLicensePlate(licensePlate: string): void {
        cy.contains(licensePlate).parent().contains('Rent').click()
    }
}