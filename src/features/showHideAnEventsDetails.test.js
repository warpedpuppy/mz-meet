import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../App';
import {mockData} from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then, and}) => {
    	given('the user hasn’t clicked on any event', () => {

        });
        
        let AppWrapper;
        and('the user is at the home page', () => {
            AppWrapper = mount(<App />);
        })

    	when('the user hasnt clicked on any event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    	});

    	then('the events element will be collapsed by default', () => {
            expect(AppWrapper.find('.showDetails')).toHaveLength(0);
    	});
    });

    test('User can expand an event to see its details', ({ given, when, then, and }) => {
        let AppWrapper;
        given('the user is at the home page', () => {
            AppWrapper = mount(<App />);
        });
        
        and('the details button of an event hasnt been clicked yet', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

    	when('the user clicks on the details button of an event', () => {
            AppWrapper.find('.event .details-button').at(0).simulate('click');
    	});

    	then('the user should see an event element with details about the event', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, when, then, and}) => {
        let AppWrapper;
        given('the app is open', () => {
            AppWrapper = mount(<App />);
        });
        
        and('the event details element is prompted', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });

    	when('the user clicks on the details button', () => {
            AppWrapper.find('.event .details-button').at(0).simulate('click');
    	});

    	then('the details element will be collapsed', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    	});
    });
});
