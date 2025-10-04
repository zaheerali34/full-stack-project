import React from 'react'
import Header from '../Layout/Header'
import Home from '../Components/Home/Home'
import Card from '../Components/Home/Card'
import PriceCard from '../Components/Home/PriceCard'
import Templates from '../Components/Home/Templates'
import Section from '../Components/Home/Section'

function LandingPage() {
  return (
    <div>
        <Header />
        <Home />
        <Card />
        <PriceCard />
        <Templates />
        <Section />
    </div>
  )
}

export default LandingPage