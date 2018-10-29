import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import App from '../components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';
const fetch = require('node-fetch');

configure({adapter: new Adapter()});

test('Text changes on hover', () => {
  // const component = shallow(<App />);
  // const leftArrowButton = component.find('button');
  const fetchSpy = jest.spyOn(App, 'fetch')
    .mockImplementation(() => Promise.resolve({
      json: () => {},
    }));
  expect(fetchSpy).toHaveBeenCalledWith('http://localhost:3001/products');
});