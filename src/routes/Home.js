import React from 'react'
import Navbar from "../components/Navbar"
import Heroimg from "../components/Heroimg"
import Footer from "../components/Footer"
import Work from "../components/Work"
import AboutContent from "../components/AboutContent"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Heroimg />
            <AboutContent />
            <Work />
            <Footer />
        </div>
    )
}

export default Home