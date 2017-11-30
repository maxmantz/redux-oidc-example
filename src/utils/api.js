import store from "../store";

export async function loadChannels() {
  const url =
    "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true";

  const result = await apiRequest(url);

  const channels = [];

  for (const channel of result.data.items) {
    channels.push({
      id: channel.snippet.resourceId.channelId,
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnail: channel.snippet.thumbnails.default.url
    });
  }

  return channels;
}

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
function apiRequest(url, method = "GET") {
  const token = store.getState().oidc.user.access_token;
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}
