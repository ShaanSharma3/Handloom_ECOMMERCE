import React from 'react'
import "./Home.scss"
import Slider from '../components/Slider/Slider'
import Feature from '../components/Feature/Feature'
import Categories from '../components/Categories/Categories'
import Contact from '../Contact/Contact'
const Home = () => {
    return (
       <div className="home">
        <Slider />
         <Feature type="featured"/>
         <Categories/>
         <Feature type="trending"/>
         <Contact/>
         
       </div>

    )
}

export default Home