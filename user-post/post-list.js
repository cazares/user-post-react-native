import React from 'react';
import { Text, View } from 'react-native';

import style from '../style/user-post-style';
import PostRow from '../shared/post-row';
import { prettyPrint } from '../util/logging';

import { requestHandlerForMethod } from '../util/api';
import SimpleList from '../shared/simple-list';
import { LoadingIndicator } from '../util/loading-util';

const POSTS_URL = 'posts';
const NAV_TITLE = 'Posts';

export default class PostList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: NAV_TITLE,
    };
  }

  state = {
    loading: false,
  }

  componentDidMount() {
    console.log('didmount called in post-list');
    this.loadPosts();
  }

  componentDidUpdate() {
    console.log('didupdate called in post-list');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate called in post-list');
  }

  loadPosts = () => {
    const { userId } = this.props.navigation.state.params;
    const url = `${POSTS_URL}?userId=${userId}`;
    const props = {
      method: `GET`,
      url,
      onSuccess: this.onSuccessPosts,
      onError: this.onErrorPosts,
      onLoading: this.onLoadingPosts,
    }
    console.log(`loadPosts props: ${prettyPrint(props)}`);
    requestHandlerForMethod(props);
  }

  onPostPress = (post) => {
    const { navigate } = this.props.navigation;
    navigate('ModifyPost', { post });
  }

  onSuccessPosts = (posts) => {
    const postRows = posts.map(post => (
      <PostRow
        post={post} onPress={() => this.onPostPress(post)} />
    ));
    this.setState({ postRows });
  }

  onErrorPosts = (error) => {
    console.error(error);
  }

  onLoadingPosts = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading, postRows } = this.state;
    return (
      <LoadingIndicator loading={loading}>
        <SimpleList>
          {postRows}
        </SimpleList>
      </LoadingIndicator>
    );
  }
}
