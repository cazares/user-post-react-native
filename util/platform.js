import { Platform } from 'react-native';

const IOS_PLATFORM_OS = 'ios';

export function isAndroid() {
  return !isIOS();
}

export function isIOS() {
  return Platform.OS === IOS_PLATFORM_OS;
}
