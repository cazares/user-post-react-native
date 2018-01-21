import { TouchableOpacity, Text } from 'react-native';
import style from '../style/user-post-style';

export const NavButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={style.navButton}>{props.text}</Text>
  </TouchableOpacity>
);
