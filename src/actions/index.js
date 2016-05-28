import { LOAD_VIDEOS_START, LOAD_VIDEOS_SUCCESS } from '../constants';

export function loadVideosStart() {
  return {
    type: LOAD_VIDEOS_START
  };
}

export function loadVideosSuccess(videos) {
  return {
    type: LOAD_VIDEOS_SUCCESS,
    payload: videos
  };
}
