import React from 'react';
import ReactNative, {
  Text,
  View,
  Image,
} from 'react-native';
import style from '../style/user-post-style';

export default class UserRow extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View style={[style.userRowWrapper, style.columns]}>
        <Text style={style.listText}>{user.name}</Text>
      </View>
    );
  }
}
