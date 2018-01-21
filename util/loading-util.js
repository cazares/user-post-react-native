import React from 'react';
import { ActivityIndicator } from 'react-native';

export const Spinner = () => (
  <ActivityIndicator
    animating
    style={{ flex: 1 }}
    size="large"
    color={"#A9A9A9"}
  />
);

export const LoadingIndicator = (props) => {
  const { loading, children } = props;
  return loading ? <Spinner /> : children;
}
