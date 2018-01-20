import { prettyPrint } from './logging';

function fullUrl(url) {
  const entireUrl = `https://mobile-code-test.ifactornotifi.com/json/${url}`;
  return entireUrl;
}

function fetchWithMethod(props) {
  const { method, url, params } = props;
  const fetchParams = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET') {
    fetchParams.body = JSON.stringify(params || {});
  }
  return fetch(fullUrl(url), fetchParams);
}

export function requestHandlerForMethod(props) {
  const { onSuccess, onError, onLoading } = props;

  onLoading(true);

  return fetchWithMethod(props).then((response) => {
    onLoading(false);
    return response.json();
  }).then((responseJson) => {
    console.log(`responseJson: ${prettyPrint(responseJson)}`);
    onSuccess(responseJson);
  }).catch((error) => {
    onLoading(false);
    onError(error);
  });
}
