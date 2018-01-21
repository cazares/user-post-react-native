import { StyleSheet } from 'react-native';

const USER_ROW_HEIGHT = 280;
const USER_ROW_LINE_HEIGHT = 20;
const USER_ROW_TITLE_HEIGHT = 35;
const DEFAULT_FONT_SIZE = 16;
const WHITE = 'white';
const DEFAULT_NAV_PADDING = 15;

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
    backgroundColor: WHITE,
    height: USER_ROW_HEIGHT,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    height: USER_ROW_TITLE_HEIGHT,
    lineHeight: USER_ROW_TITLE_HEIGHT,
  },
  listText: {
    paddingLeft: 15,
    color: 'black',
    flex: 0,
    textAlignVertical: 'center',
    height: USER_ROW_LINE_HEIGHT,
    lineHeight: USER_ROW_LINE_HEIGHT,
    fontSize: DEFAULT_FONT_SIZE,
  },
  navButton: {
    fontSize: DEFAULT_FONT_SIZE,
    color: WHITE,
    paddingLeft: DEFAULT_NAV_PADDING,
    paddingRight: DEFAULT_NAV_PADDING,
  }
});
