import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
import {mockData} from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        
        given('the user did not specify the number of events being shown', () => {

    	});

        let AppWrapper;
    	when('the app is open', () => {
            AppWrapper = mount(<App />);
    	});

    	then('the default number of events shown is 32', () => {
            AppWrapper.update();
            expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        
        let AppWrapper;
        given('the list of elements have been loaded and the user did not specify a number of events', () => {
            AppWrapper = mount(<App />);
            expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    	});

    	when('the user specifies a number', () => {
            const numberOfEvents = {target: {value: 20}};
            AppWrapper.find('.number-of-events').simulate('change', NumberOfEvents);
    	});

    	then('the maximum of events listed should be the specified number', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({numberOfEvents: 20}); 
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBeLessThanOrEqual(20);
    	});
    });

});