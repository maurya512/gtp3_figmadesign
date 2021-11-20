import React from 'react'
// import components 
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

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
            <Blog />
            <Footer />
        </div>
    )
}

export default App
