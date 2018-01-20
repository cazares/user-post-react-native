import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import style from './style/user-post-style';

export default class UserPost extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>TEST</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('UserPost', () => UserPost);
