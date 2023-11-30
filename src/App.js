import React from 'react'
import Navbar from './components/Navbar'
// import Navbar from './components2/navbar/Navbar'
import Hero from './components/Hero'
// import Hero from './components2/hero/Hero'
// import HeadlineCards from './components/HeadlineCards'
import HeadlineCard from './components2/headlineCard/HeadlineCard'
import Food from './components/Food'
import Category from './components/Category'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCard />
        <Food />
        <Category />
    </div>
  );
}

export default App;
