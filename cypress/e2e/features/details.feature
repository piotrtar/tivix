Feature: Details
    Scenario: Validating if user can see car details after clicking rent button
        Given the user searches for car in country 'Poland', city 'Cracow', pickup date '2' days and dropoff '4' days from now
        When the user clicks on rent button of the car of license plate 'SU3 8563'
        Then the user can see the proper car model name of 'Ursus C360'
            And the user can see the proper company name of 'Young-Wyatt'
            And the user can see the proper price per day of '80$'
            And the user can see the proper location 'Poland, Cracow'
            And the user can see the proper license plate 'SU3 8563'
            And the user can see the proper pickup date '2' days from now
            And the user can see the proper dropoff date '4' days from now