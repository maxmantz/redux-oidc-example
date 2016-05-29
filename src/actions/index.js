import { LOAD_SUBSCRIPTIONS_START, LOAD_SUBSCRIPTIONS_SUCCESS } from '../constants';

export function loadSubscriptionsStart() {
  return {
    type: LOAD_SUBSCRIPTIONS_START
  };
}

export function loadSubscriptionsSuccess(channels) {
  return {
    type: LOAD_SUBSCRIPTIONS_SUCCESS,
    payload: channels
  };
}
