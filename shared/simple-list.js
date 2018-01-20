import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';

import style from '../style/user-post-style';
import { prettyPrint } from '../util/logging';

export default class SimpleList extends React.Component {
  renderItem = (item) => {
    return (<TouchableOpacity onPress={item.props.onPress}>
      {item}
    </TouchableOpacity>);
  }

  render() {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    const data = children.map(child => child.props);
    return (
      <FlatList
        data={data}
        renderItem={(item) => this.renderItem(children[item.index])}
        ItemSeparatorComponent={() => <View style={style.separator} />} />
    );
  }
}
