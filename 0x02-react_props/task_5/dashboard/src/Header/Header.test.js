import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders header correctly', () => {
    const wrapper = shallow(<Header />);

    // Check if the component renders the logo and h1 correctly
    expect(wrapper.find('.App-logo').exists()).toBeTruthy();
    expect(wrapper.find('h1').text()).toEqual('School dashboard');

    // Optional: Snapshot testing
    expect(wrapper).toMatchSnapshot();
  });
});
