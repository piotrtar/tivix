import { Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { getDateInGivenDaysFromNowAsString } from "../../support/dateUtil";
import { DetailsPO } from "../../pages/details.po";

let detailsPage: DetailsPO;

Before(() => {
    detailsPage = new DetailsPO();
});

Then('the user can see the proper car model name of {string}', (carModelName: string) => {
    detailsPage.verifyCarModelName(carModelName);
});

Then('the user can see the proper company name of {string}', (companyName: string) => {
    detailsPage.verifyCompanyName(companyName);
});

Then('the user can see the proper price per day of {string}', (priceAmount: string) => {
    detailsPage.verifyPricePerDay(priceAmount);
});

Then('the user can see the proper location {string}', (locationText: string) => {
    detailsPage.verifyLocation(locationText);
});

Then('the user can see the proper license plate {string}', (licensePlateText: string) => {
    detailsPage.verifyLicensePlate(licensePlateText);
});

Then('the user can see the proper pickup date {string} days from now', (pickupDays: number) => {
    const pickupDate = getDateInGivenDaysFromNowAsString(pickupDays);
    detailsPage.verifyPickupDate(pickupDate);
});

Then('the user can see the proper dropoff date {string} days from now', (dropoffDays: number) => {
    const dropoffDate = getDateInGivenDaysFromNowAsString(dropoffDays);
    detailsPage.verifyDropoffDate(dropoffDate);
});

When('the user clicks rent button', () => {
    detailsPage.clickRentButton();
});