Feature: Search
    Scenario: Validating if user can search for a  car in a specific country/city
        Given the user vists the home page
        When the user selects country 'Poland'
            And the user selects city 'Cracow'
            And the user selects pick up date as '2' days from now
            And the user selects drop off date as '4' days from now
            And the user clicks search button
        Then the user can see the search results