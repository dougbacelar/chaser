import React from 'react';
import renderer from 'react-test-renderer';
import AppRoot from '../AppRoot';

it('renders without crashing', () => {
  const rendered = renderer.create(<AppRoot />).toJSON();
  expect(rendered).toBeTruthy();
});
