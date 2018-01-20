import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import style from '../style/user-post-style';
import SimpleList from '../shared/simple-list';
import UserRow from '../shared/user-row';
import { prettyPrint } from '../util/logging';

import { LoadingIndicator } from '../util/loading-util';
import { requestHandlerForMethod } from '../util/api';

const USERS_URL = 'users';

// Note: wasn't able to get rid of missing key from list warning, disable warning box for now
console.disableYellowBox = true;

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
    console.log(`users from server: ${prettyPrint(users)}`);
    const userRows = users.map(user => (<UserRow user={user} />));
    this.setState({ userRows });
  }

  onErrorUsers = (error) => {
    console.error(error);
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
