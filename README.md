A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.

Users of this app will be able to use it whenever they want to view upcoming
events for a specific city.

It can be used even when the user is offline. As it’s responsive, it displays
well on any device.

KEY FEATURES:

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

USER STORIES:

1. Show/hide event details
   As a user
   I should be able to show and hide details of a specific event by click on it
   So that I can get more information about that event

2. Specify number of events   As a user
   I should be able to see the number of events
   So that I can see how many events are taking place in a specific city during a specific time period

3.Use the app when offline
As a user
I should be able to use the app when offline
So that I can see what events are taking place without an internet connect or data.

4. View a chart showing the number of upcoming events by city
   As a user
   I should be able to view a chart showing the numbers of upcoming events by city
   So that I can compare the number of events with other cities.

SCENARIOS:

Feature 2: Show/hide an events details
Scenario 1: An event element is collapsed by default
Given the user hasn’t clicked on any event
When the user is at the home page  Then the user should see a list of x amount of events

Scenario 2: User can expand an event to see its details
Given the user is at the home page with the list of events
When the user clicks on an event
Then the user should see an event element with details about the event

Scenario 3: User can collapse an event to hide its details
Given the event details element is prompted
When the user clicks on the X button
Then the user should see the home page with the list of events

Feature 3: Specify number of events
Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn’t modified the number of events on the home page
When the user views the home page
Then the user will see 32 events on the home page

Scenario 2: User can change the number of events they want to see
Given the home page is open
When the user modifies the number of events displayed on the home page
Then the number of events on the home page will change to the number the user has
modified it too.

Feature 4: Use the app when offline
Scenario 1: Show cached data when theres no internet connection
Given the user is not connected to the internet
When the user opens the app
Then the user should see a list of events that was cached last time the user was
connected to the internet while the app was open

Scenario 2: Show error when user changes the settings (city, time range)
Given the user is not connected to the internet and is at the home page
When a user changes cities or the time range
Then the user will see a prompt with an error saying that an internet connection is
required for these functions to work

Feature 5: Data visualization  
Scenario 1: Show a chart with the number of upcoming events in each city
Given the home page is open
When the user views a new city
Then the user will see a chart with the number of upcoming events happening in that
city.
