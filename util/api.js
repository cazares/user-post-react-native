import { prettyPrint } from './logging';

function fullUrl(url) {
  const entireUrl = 'https://mobile-code-test.ifactornotifi.com/json';
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
    onSuccess(response.json());
  }).catch((error) => {
    onLoading(false);
    onError(error);
  });
}
