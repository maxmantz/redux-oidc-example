import { take, put, select, call } from "redux-saga/effects";
import { loadSubscriptionsSuccess, LOAD_SUBSCRIPTIONS_START } from "../actions";
import { loadChannels } from "../utils/api";

export function* loadSubscriptionsSaga() {
  while (true) {
    yield take(LOAD_SUBSCRIPTIONS_START);

    const channels = yield loadChannels();

    yield put(loadSubscriptionsSuccess(channels));
  }
}
