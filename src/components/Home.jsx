import React from 'react'
import TopHeader from './TopHeader'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import HomePage from './HomePage'
import Categories from './Categories'
import AboutEtgina from './AboutEtgina'
import Hiring from './Hiring'

const Home = () => {
  return (
    <div>
    <TopHeader/>
    <Header/>
    <div className="relative">
    <HomePage/>
    <SearchBar/>
    </div>
    <Categories/>
    <AboutEtgina/>
    <Hiring/>
    <Footer/>
    </div>
  )
}

export default Home;