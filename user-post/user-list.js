import React from 'react';
import { Text, View } from 'react-native';

import style from '../style/user-post-style';
import UserRow from '../shared/user-row';
import NavButton from '../util/ui';
import { prettyPrint } from '../util/logging';

import { requestHandlerForMethod } from '../util/api';
import SimpleList from '../shared/simple-list';
import { LoadingIndicator } from '../util/loading-util';

const USERS_URL = 'users';
const SORT_TITLE = 'Sort';
const NAV_TITLE = 'Users';

export default class UserList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const params = state.params || {};
    return {
      // ...commonNavOptions,
      title: NAV_TITLE,
      // headerRight: <NavButton text={SORT_TITLE} onPress={params.onSortPressed} />,
    };
  }

  state = {
    loading: false,
    userRows: null,
  }

  componentDidMount() {
    const { navigation } = this.props;

    const params = {
      onSortPressed: this.onSortPressed,
    };
    navigation.setParams(params);

    this.loadUsers();
  }

  onSortPressed = () => {

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

  onUserPress = (user) => {
    const { navigate } = this.props.navigation;
    navigate('PostList', { userId: user.id });
  }

  onSuccessUsers = (users) => {
    console.log(`users from server: ${prettyPrint(users)}`);
    const userRows = users.map(user => (
      <UserRow
        user={user} onPress={() => this.onUserPress(user)} />
    ));
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
