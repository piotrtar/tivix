Feature: Summary
    Scenario: Validating if user can provide personal data in rent form
        Given the user searches for car in country 'Poland', city 'Cracow', pickup date '2' days and dropoff '4' days from now
            And the user clicks on rent button of the car of license plate 'SU3 8563'
            And the user clicks rent button
        When the user inputs name 'ExampleName'
            And the user inputs last name 'ExampleLastName'
            And the user inputs card number '340479518238055'
            And the user inputs email 'example@example.com'
        Then the user can see the name of 'ExampleName' provided
            And the user can see the last name of 'ExampleLastName' provided
            And the user can see the card number of '340479518238055' provided
            And the user can see the email of 'example@example.com' provided