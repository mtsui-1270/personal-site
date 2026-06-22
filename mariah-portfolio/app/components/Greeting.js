'use client';
import { useState, useEffect } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('good morning,');
    else if (hour < 18) setGreeting('good afternoon,');
    else setGreeting('good evening,');
  }, []);

  return <p className="greeting">{greeting}</p>;
}