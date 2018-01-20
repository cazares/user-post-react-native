import React from 'react';
import UserPost from './UserPost';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<UserPost />).toJSON();
  expect(rendered).toBeTruthy();
});
