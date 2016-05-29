import store from '../store';

export default function apiRequest(url, method = 'GET') {
  const token = store.getState().oidc.user.access_token;
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);

  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => ({data}))
    .catch((error) => ({ error }));
}
