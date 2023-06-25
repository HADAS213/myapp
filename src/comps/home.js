import React, { useEffect } from 'react'
import VodInput from './vodInput'
import VodList from './vodList'
import Footer from './footer'
import VodStrip from './vodStrip'

import "./home.css"

function Home() {
    useEffect=()=>{
        doApi()
    }
    
    const doApi=async()=>{
        let myUrl="http://www.omdbapi.com/?i=tt3896198&apikey=f1d04a17"
        let resp=await fetch(myUrl);
        let data=await resp.json();
        console.log(data);
    }
    
    return (
        <React.Fragment>
            <VodStrip />
            <VodInput />
            <VodList />
            <Footer/>
        </React.Fragment>
    )
}

export default Home