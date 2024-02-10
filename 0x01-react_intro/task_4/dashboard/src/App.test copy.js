// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });

  it('renders the email input', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#email').exists()).toBe(true);
  });

  it('renders the password input', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#passwd').exists()).toBe(true);
  });

  it('renders the OK button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#okBtn').exists()).toBe(true);
  });
});
