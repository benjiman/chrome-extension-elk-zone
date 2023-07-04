const username=document.head.querySelector('meta[property="profile:username"]').content;

const url=document.head.querySelector('meta[property="og:url"]').content;

const isMastodon=document.getElementById('mastodon');

const ignored=['elk.zone','mastodon.social'].includes(document.location.host);

if (!ignored && username && url && isMastodon) {
  document.location.href='https://elk.zone/' + url;
}
