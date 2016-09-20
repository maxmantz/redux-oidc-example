import 'whatwg-fetch';

import {
  LOAD_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  SET_ERROR,
  REMOVE_ERROR
} from '../constants';
import store from '../store';
import apiRequest from '../utils/request';
import { push } from 'react-router-redux';

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

export function loadSubscriptions() {
    return function(dispatch) {
        dispatch(loadSubscriptionsStart());

        const url = 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true';
        const channels = [];

        apiRequest(url).then(result => {
             for (const channel of result.data.items) {
                channels.push({
                    id: channel.snippet.resourceId.channelId,
                    title: channel.snippet.title,
                    description: channel.snippet.description,
                    thumbnail: channel.snippet.thumbnails.default.url
                });
            }

            dispatch(loadSubscriptionsSuccess(channels));
        });
    }
}

export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error
  }
}

export function removeError(error) {
  return {
    type: REMOVE_ERROR
  }
}

// this will generate an error
export function errorRequest() {
  return (dispatch) => {
    const url = 'https://www.thisweirdurlhopefullydoesntexist.com';

    apiRequest(url)
      .then(result => {
        dispatch(setError(result.error));
        dispatch(push('/error'));
      });
  }
}
