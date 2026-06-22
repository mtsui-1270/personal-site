'use client';
import { useState, useEffect } from 'react';

export default function Spotify() {
  const [track, setTrack] = useState(null);
  const [timeAgo, setTimeAgo] = useState('');

  async function fetchSpotify() {
    const res = await fetch('/api/spotify');
    const data = await res.json();

    const playedAt = new Date(data.played_at);
    const now = new Date();
    const diffMins = Math.floor((now - playedAt) / 60000);

    let time;
    if (diffMins < 1) time = 'just now';
    else if (diffMins < 60) time = `${diffMins}m ago`;
    else if (diffMins < 1440) time = `${Math.floor(diffMins / 60)}h ago`;
    else time = `${Math.floor(diffMins / 1440)}d ago`;

    setTrack(data);
    setTimeAgo(time);
  }

  useEffect(() => {
    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      <img src="https://cdn.simpleicons.org/spotify/black" style={{width:'14px', height:'14px', verticalAlign:'middle', marginRight:'4px'}} />
      last played:{' '}
      {track ? (
        <a href={track.url} className="bio-links" target="_blank">
          {track.title} — {track.artist} · {timeAgo}
        </a>
      ) : 'loading...'}
    </p>
  );
}