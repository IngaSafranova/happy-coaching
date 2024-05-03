import React from 'react'
import HeroCard from '../components/heroCard';

const text = {
  title: " Self Esteem Therapy",
  text: `I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?`,
};

export default function SalesHeroCard(props) {
  return <HeroCard title={text.title} text={text.text} />;
}
