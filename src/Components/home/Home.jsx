import React from 'react'
import Navigation from '../NavigationBar/Navigation'
import ImageContainer from '../ImageContainer/ImageContainer'
import Context from '../context/Context'
import FeatureSection from '../FeatureSection/FeatureSection'
import Ribbon from '../Ribbion/Ribbon'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'









function Home() {
  return (
    <div>
        <Navigation></Navigation>
        <ImageContainer></ImageContainer>
        <Context></Context>
        <FeatureSection></FeatureSection>
        <Ribbon></Ribbon>
        <Cards></Cards>
        <Footer></Footer>
        
    </div>
  )
}

export default Home