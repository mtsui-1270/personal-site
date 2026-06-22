'use client';
import Typewriter from './components/Typewriter';
import Spotify from './components/Spotify';
import Greeting from './components/Greeting';

export default function Home() {
  return (
    <main className="container">
      <Typewriter />
      <hr className="divider" />
      <Greeting />

      <p className="bio">
        I'm a rising sophomore based in both the Bay and LA<br />
        studying <a href="https://math.berkeley.edu/" className="bio-links">applied mathematics</a>
        {' '}@<a href="https://www.berkeley.edu/" className="bio-links">UCBerkeley</a> (go bears!).
        <br /><br />
        I am passionate about the intersection of technology,<br /> education, design, and finance.<br /><br />
        My interests lie in machine learning, artificial<br /> intelligence, and human computer interactions.
      </p>

      <div className="socials">
        <a href="mailto:mtsui0721@berkeley.edu" className="social-link">
          <img src="https://cdn.simpleicons.org/minutemailer/black" alt="email" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mtsui127/" className="social-link" target="_blank">
          <img src="/linkedin.png" alt="linkedin" className="social-icon" />
        </a>
        <a href="https://github.com/mtsui-1270" className="social-link" target="_blank">
          <img src="https://cdn.simpleicons.org/github/black" alt="github" className="social-icon" />
        </a>
        <a href="https://instagram.com/mariiah.t" className="social-link" target="_blank">
          <img src="https://cdn.simpleicons.org/instagram/black" alt="instagram" className="social-icon" />
        </a>
        <a href="https://strava.app.link/3iugifv5X3b" className="social-link" target="_blank">
          <img src="https://cdn.simpleicons.org/strava/black" alt="strava" className="social-icon" />
        </a>
      </div>

      <div className="under-socials">
        <Spotify />
        <p>built with love ♡</p>
      </div>

      <footer className="footer">
        <p>© 2026 mariah tsui</p>
      </footer>
    </main>
  );
}