export class DetailsPO {
    
    carModelName = ".card-header";
    companyName = ".card-title";
    priceText = "Price";
    locationText = "Location";
    licenseText = "License";
    pickupDateText = "Pickup";
    dropoffDateText = "Dropoff";
    rentButtonText = "Rent";

    verifyCarModelName(carModelName: string): void {
        cy.get(this.carModelName).should('contain.text', carModelName);
    }
    
    verifyCompanyName(companyName: string): void {
        cy.get(this.companyName).should('contain.text', companyName);
    }
    
    verifyPricePerDay(priceAmount: string): void {
        cy.contains(this.priceText).should('contain.text', priceAmount);
    }
    
    verifyLocation(locationText: string): void {
        cy.contains(this.locationText).should('contain.text', locationText);
    }
    
    verifyLicensePlate(licensePlateText: string): void {
        cy.contains(this.licenseText).should('contain.text', licensePlateText);
    }
    
    verifyPickupDate(pickupDate: string): void {
        cy.contains(this.pickupDateText).should('contain.text', pickupDate);
    }
    
    verifyDropoffDate(dropoffDate: string): void {
        cy.contains(this.dropoffDateText).should('contain.text', dropoffDate);
    }
    
    clickRentButton(): void {
        cy.contains(this.rentButtonText).click();
    }
}