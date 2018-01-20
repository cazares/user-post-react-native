import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import style from '../style/user-post-style';
import SimpleList from '../shared/simple-list';
import UserRow from '../shared/user-row';

import { LoadingIndicator } from '../util/loading-util';
import { requestHandlerForMethod } from '../util/api';

const USERS_URL = 'users';

export default class UserPost extends React.Component {
  state = {
    loading: false,
    userRows: null,
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
    const userRows = users.map(user => (<UserRow user={user} />));
    this.setState({ userRows });
  }

  onErrorUsers = (error) => {
    console.warn(error);
  }

  onLoadingUsers = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading, userRows } = this.state;
    return (
      <LoadingIndicator loading={loading}>
        <SimpleList>
          {userRows}
        </SimpleList>
      </LoadingIndicator>
    );
  }
}

AppRegistry.registerComponent('UserPost', () => UserPost);
