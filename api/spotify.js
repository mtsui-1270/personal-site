export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64')
    },
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`
  });

  const { access_token } = await tokenRes.json();

  const spotifyRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: { Authorization: `Bearer ${access_token}` }
  });

  const data = await spotifyRes.json();
  const track = data.items[0];

  return res.json({
    title: track.track.name,
    artist: track.track.artists[0].name,
    url: track.track.external_urls.spotify,
    played_at: track.played_at  // this should be on track, not track.track
  });
}