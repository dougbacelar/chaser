import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { AppRoot } from '../AppRoot';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<AppRoot />);

  expect(toJson(component)).toMatchSnapshot();
});
