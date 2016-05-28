import { take, select, call } from 'redux-saga/effects';
import { LOAD_VIDEOS_START } from '../constants';
import apiRequest from '../utils/request';

export function* loadVideosSaga() {
  while (true) {
    yield take(LOAD_VIDEOS_START);

    const url = 'https://www.googleapis.com/youtube/v3/subscriptions?part=subscriberSnippet&mine=true';

    const result = yield call(apiRequest, url);

    console.log('Result', result);
  }
}
