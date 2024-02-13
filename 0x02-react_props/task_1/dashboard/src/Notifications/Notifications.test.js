import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders notifications correctly', () => {
    const wrapper = shallow(<Notifications />);

    // Check if the component renders the list items correctly
    expect(wrapper.contains('New course available')).toBeTruthy();
    expect(wrapper.contains('New resume available')).toBeTruthy();
    expect(wrapper.containsMatchingElement('p')).toBeTruthy();

    // Check if the close button is present
    const closeButton = wrapper.find('#iconClose');
    expect(closeButton.exists()).toBeTruthy();

    // Mock the console.log function and simulate a click on the close button
    const consoleSpy = jest.spyOn(console, 'log');
    closeButton.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    // Optional: Snapshot testing
    expect(wrapper).toMatchSnapshot();
  });
});
