export async function GET() {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    console.log('client_id:', client_id);
    console.log('refresh_token:', refresh_token);

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64')
      },
      body: `grant_type=refresh_token&refresh_token=${refresh_token}`
    });

    const { access_token } = await tokenRes.json();
    console.log('access_token:', access_token);

    const spotifyRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    const data = await spotifyRes.json();
    const track = data.items[0];

    return Response.json({
      title: track.track.name,
      artist: track.track.artists[0].name,
      url: track.track.external_urls.spotify,
      played_at: track.played_at
    });
  } catch (error) {
    console.error('Spotify API error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}