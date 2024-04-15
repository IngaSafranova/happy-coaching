import React from 'react'
import HeroCard from './heroCard';

const text = {
  title: " Live life at the full potential",
  text: `I help people to discover their true potential and live a fulfiling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and is backed by science. Wanna transform
        your life?`,
};
function HomePageHeroCard(props) {

    

  return (
   <HeroCard title={text.title} text={text.text} />
  )
}

export default HomePageHeroCard