import React from 'react';
import LoadingIndicator from '../util/loading-util';
import SimpleList from './simple-list';

export const ListWithLoading = (props) => (
  <LoadingIndicator loading={props.loading}>
    <SimpleList>
      {props.rows}
    </SimpleList>
  </LoadingIndicator>
);
