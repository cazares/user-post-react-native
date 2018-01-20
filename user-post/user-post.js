import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import style from '../style/user-post-style';
import SimpleList from '../util/simple-list';

import { LoadingIndicator } from '../util/loading-util';
import { requestHandlerForMethod } from '../util/api';

const USERS_URL = 'users';

export default class UserPost extends React.Component {
  state = {
    loading: false,
    users: null,
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    const props = {
      method: 'GET',
      url: USERS_URL,
      onSuccess: this.onSuccessUsers,
      onError: this.onErrorUsers,
      onLoading: this.onLoadingUsers,
    }
    requestHandlerForMethod(props);
  }

  onSuccessUsers = (users) => {
    const userRows = users.map((user) => {
      return (<)
    });
  }

  onErrorUsers = (error) => {
    console.warn(error);
  }

  onLoadingUsers = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading } = this.state;
    return (
      <LoadingIndicator loading={loading}>
        <SimpleList>
          {users}
        </SimpleList>
      </LoadingIndicator>
    );
  }
}

AppRegistry.registerComponent('UserPost', () => UserPost);
