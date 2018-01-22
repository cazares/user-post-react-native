import React from 'react';
import { AppRegistry } from 'react-native';

import UserList from './user-list';
import PostList from './post-list';
import ModifyPost from './modify-post';
import { StackNavigator } from 'react-navigation';

// Note: wasn't able to get rid of missing key from list warning, disable warning box for now
console.disableYellowBox = true;

const commonNavOptions = {
  headerTintColor: 'white',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#CE1129',
  },
};

export const UserPostNav = StackNavigator({
  UserList: { screen: UserList, navigationOptions: commonNavOptions },
  PostList: { screen: PostList, navigationOptions: commonNavOptions },
  ModifyPost: { screen: ModifyPost, navigationOptions: commonNavOptions },
});

class UserPostNavWrapper extends React.Component {
  render() {
    return <UserPostNav screenProps={this.props} />
  }
}

AppRegistry.registerComponent('UserPost', () => UserPostNavWrapper);
