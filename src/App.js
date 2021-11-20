import React from 'react'

// import styling for the app 
import './App.css';

// import components 
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Footer, Possibility, Features, WhatGPT3, Header, Blogs } from './containers';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blogs />
            <Footer />
        </div>
    )
}

export default App
