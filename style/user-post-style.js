import { StyleSheet } from 'react-native';

const USER_ROW_HEIGHT = 100;

export default StyleSheet.create({
  separator: {
    backgroundColor: '#E0E0E0',
    height: 1,
  },
  columns: {
    flexDirection: 'column',
    flex: 1,
  },
  userRowWrapper: {
    backgroundColor: 'white',
    height: USER_ROW_HEIGHT,
  },
  listText: {
    paddingLeft: 15,
    color: 'black',
    flex: 0,
    textAlignVertical: 'center',
    height: USER_ROW_HEIGHT,
    lineHeight: USER_ROW_HEIGHT,
    fontSize: 16,
  },
});
