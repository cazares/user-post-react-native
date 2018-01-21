import React from 'react';
import ReactNative, { Text, View } from 'react-native';

import style from '../style/user-post-style';

export default class PostRow extends React.Component {
  render() {
    const { title, body } = this.props.post;
    return (
      <View style={[style.postRowWrapper, style.columns]}>
        <Text style={[style.listText, style.listTitle]}>{title}</Text>
        <Text style={[style.listText, style.postBody]}>{body}</Text>
      </View>
    );
  }
}
