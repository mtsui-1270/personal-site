'use client';
import { useEffect } from 'react';

export default function Whimsy() {
  useEffect(() => {
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
        border: 1px solid rgba(235, 150, 180, 0.4);
        background: rgba(235, 150, 180, 0.1);
        z-index: 9999;
        pointer-events: none;
        transition: bottom ${5 + Math.random() * 5}s ease-in, opacity ${5 + Math.random() * 5}s ease-in;
        opacity: 1;
      `;
      document.body.appendChild(bubble);
      setTimeout(() => {
        bubble.style.bottom = '110vh';
        bubble.style.opacity = '0';
      }, 100);
      setTimeout(() => bubble.remove(), 12000);
    }
    const bubbleInterval = setInterval(spawnBubble, 1500);

    // fish on click left to right
    function spawnFish(e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') return;
      const fishEmojis = ['🐟', '🐠', '🐡', '🦈', '🐬'];
      const count = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const fish = document.createElement('div');
          fish.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
          const yPos = e.clientY + (Math.random() * 60 - 30);
          fish.style.cssText = `
            position: fixed;
            left: -60px;
            top: ${yPos}px;
            font-size: ${1 + Math.random() * 1.5}rem;
            z-index: 9999;
            pointer-events: none;
            transition: left ${5 + Math.random() * 3}s linear;
          `;
          document.body.appendChild(fish);
          setTimeout(() => fish.style.left = '110vw', 50);
          setTimeout(() => fish.remove(), 10000);
        }, i * 150);
      }
    }
    document.addEventListener('click', spawnFish);

    return () => {
      clearInterval(bubbleInterval);
      document.removeEventListener('click', spawnFish);
    };
  }, []);

  return null;
}