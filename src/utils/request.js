import request from 'superagent';
import store from '../store';

export default function apiRequest(url) {
  const token = store.getState().oidc.user.access_token;
  return request.get(url)
                .set('Authorization', `Bearer ${token}`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                  return err ? { error: err } : { data: res.body }
                });
}
