import { take, put, select, call } from 'redux-saga/effects';
import { LOAD_SUBSCRIPTIONS_START } from '../constants';
import { loadSubscriptionsSuccess } from '../actions';
import apiRequest from '../utils/request';

export function* loadSubscriptionsSaga() {
  while (true) {
    yield take(LOAD_SUBSCRIPTIONS_START);

    const url = 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true';

    const result = yield call(apiRequest, url);

    console.log('Result', result);

    const channels = []

    for (const channel of result.data.items) {
      channels.push({
        id: channel.snippet.resourceId.channelId,
        title: channel.snippet.title,
        description: channel.snippet.description,
        thumbnail: channel.snippet.thumbnails.default.url
      });
    }

    yield put(loadSubscriptionsSuccess(channels));
  }
}
