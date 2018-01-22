import React from 'react';
import { Text, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';

import style from '../style/user-post-style';

const IPHONE_VERTICAL_OFFSET = 64;
const ANDROID_VERTICAL_OFFSET = 80;

export default class ModifyPost extends React.Component {

  componentDidMount() {
    console.log('didmount called in post-list');
    const { title, body } = this.props.navigation.state.params.post;
    this.setState({ title, body });
  }

  componentDidUpdate() {
    console.log('didupdate called in post-list');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate called in post-list');
  }

  getKeyboardVerticalOffset = () => {
    if (isAndroid()) {
      return ANDROID_VERTICAL_OFFSET;
    }
    return IPHONE_VERTICAL_OFFSET;
  }

  onChangeTitle = (title) => {
    this.setState({ title });
  }

  onChangeBody = (body) => {
    this.setState({ body });
  }

  render() {
    const { keyboardAvoidingViewKey, title, body } = this.state;

    <KeyboardAvoidingView
      style={baseStyle.columns}
      behavior="height"
      keyboardVerticalOffset={this.getKeyboardVerticalOffset}
      key={keyboardAvoidingViewKey}>
      <Text style={style.defaultLabel}>Title:</Text>
      <TextInput
        onChangeText={this.onChangeTitle}
        underlineColorAndroid='transparent'
        blurOnSubmit={false}
        value={title}
        style={style.postInput}
      />
      <Text style={style.defaultLabel}>Body:</Text>
      <TextInput
        onChangeText={this.onChangeBody}
        multiline
        underlineColorAndroid='transparent'
        blurOnSubmit={false}
        value={body}
        style={[style.postInput, style.postBodyInput]}
      />
    </KeyboardAvoidingView>
  }
}
