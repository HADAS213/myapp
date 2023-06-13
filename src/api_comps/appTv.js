import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TvItem from './tvItem'
import { async } from 'q';

export default function AppTv() {
    const [ar, setar] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = "http://fs1.co.il/bus/tv.php";
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            setar(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }
    return (
        <div className='container'>
            <h1>List of vod</h1>
            <div className='row g-3'>
                {ar.map(item=>{
                    return(
                        <TvItem key={item.name}  item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

