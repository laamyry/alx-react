import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders login form correctly', () => {
    const wrapper = shallow(<Login />);

    // Check if the component renders the login form correctly
    expect(wrapper.find('.App-Login').exists()).toBeTruthy();
    expect(wrapper.find('p').text()).toEqual('Login to access the full dashboard');
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('#okBtn').exists()).toBeTruthy();

    // Optional: Snapshot testing
    expect(wrapper).toMatchSnapshot();
  });
});
