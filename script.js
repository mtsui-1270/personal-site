const phrases = [
  "Hello World, I'm Mariah.",
  "你好世界，我是 Mariah."
];

const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // remove one character
    typedEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;
  } else {
    // add one character
    typedEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 90 : 100; // deleting is faster than typing

  if (!isDeleting && charIndex === currentPhrase.length) {
    // finished typing, pause then start deleting
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // finished deleting, move to next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400; // pause before typing next phrase
  }

  setTimeout(type, speed);
}

setTimeout(type, 600);

const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
document.getElementById('last-updated').textContent = date.toLocaleDateString('en-US', options);

const hour = new Date().getHours();
let greeting;
if (hour < 12) greeting = "good morning,";
else if (hour < 18) greeting = "good afternoon,";
else greeting = "good evening,";
document.getElementById('greeting').textContent = greeting;

//spotify api
async function fetchSpotify() {
  const res = await fetch('https://mariaht.vercel.app/api/spotify');
  const data = await res.json();

  const trackEl = document.getElementById('spotify-track');
  const linkEl = document.getElementById('spotify-link');

  const playedAt = new Date(data.played_at);
  const now = new Date();
  const diffMins = Math.floor((now - playedAt) / 60000);
  console.log('played_at:', data.played_at);
  console.log('playedAt:', playedAt);
  console.log('diffMins:', diffMins);
  
  let timeAgo;
  if (diffMins < 1) timeAgo = 'just now';
  else if (diffMins < 60) timeAgo = `${diffMins}m ago`;
  else if (diffMins < 1440) timeAgo = `${Math.floor(diffMins / 60)}h ago`;
  else timeAgo = `${Math.floor(diffMins / 1440)}d ago`;

  trackEl.textContent = `${data.title} — ${data.artist} ~ ${timeAgo}`;
  linkEl.href = data.url;
}

fetchSpotify();
setInterval(fetchSpotify, 30000);

// easter egg - click anywhere for fish
document.addEventListener('click', (e) => {
  const fishEmojis = ['🐟', '🐠', '🐡', '🐙'];
  const count = Math.floor(Math.random() * 3) + 2; // 2-4 fish per click

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const fish = document.createElement('div');
      fish.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
      const yPos = e.clientY + (Math.random() * 60 - 30); // near where you clicked
      fish.style.cssText = `
        position: fixed;
        left: -60px;
        top: ${yPos}px;
        font-size: ${1 + Math.random() * 1.5}rem;
        z-index: 9999;
        pointer-events: none;
        transition: left ${5 + Math.random() * 2}s linear;
        transform: scaleX(-1)
        
      `;
      document.body.appendChild(fish);
      setTimeout(() => fish.style.left = '110vw', 50);
      setTimeout(() => fish.remove(), 5000);
    }, i * 150);
  }
});

// floating bubbles
function spawnBubble() {
  const bubble = document.createElement('div');
  const size = 10 + Math.random() * 30;
  bubble.style.cssText = `
    position: fixed;
    bottom: -60px;
    left: ${Math.random() * 100}vw;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    border: 0px;
    background: rgba(21, 110, 225, 0.1);
    z-index: 9999;
    pointer-events: none;
    transition: bottom ${5 + Math.random() * 5}s ease-in, opacity ${20 + Math.random() * 5}s ease-in;
    opacity: 1;
  `;
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.style.bottom = '110vh';
    bubble.style.opacity = '0';
  }, 100);

  setTimeout(() => bubble.remove(), 12000);
}

// spawn a bubble every 1.5 seconds
setInterval(spawnBubble, 1500);