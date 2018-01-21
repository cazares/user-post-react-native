import React from 'react';
import UserPost from '../user-post/user-post';

import renderer from 'react-test-renderer';

function getUserPost() {
  return (
    <UserPost />
  );
}

it('renders without crashing', () => {
  const rendered = renderer.create(getUserPost).toJSON();
  expect(rendered).toBeTruthy();
});
