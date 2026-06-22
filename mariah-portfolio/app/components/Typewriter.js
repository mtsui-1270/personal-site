'use client';
import { useState, useEffect } from 'react';

const phrases = [
  "Hello World, I'm Mariah.",
  "你好世界，我是 Mariah."
];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let speed = isDeleting ? 90 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) speed = 1500;
    else if (isDeleting && charIndex === 0) speed = 400;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <h1 className="title">
      <span>{text}</span>
      <span className="cursor">|</span>
    </h1>
  );
}