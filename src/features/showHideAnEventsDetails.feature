Feature: SHOW/HIDE AN EVENTS DETAILS

Scenario: An event element is collapsed by default
Given the user hasn’t clicked on any event
And the user is at the home page
When the user hasnt clicked on any event
Then the events element will be collapsed by default

Scenario: User can expand an event to see its details
Given the user is at the home page 
And the details button of an event hasnt been clicked yet
When the user clicks on the details button of an event
Then the user should see an event element with details about the event

Scenario: User can collapse an event to hide its details
Given the app is open
And the event details element is prompted
When the user clicks on the details button
Then the details element will be collapsed