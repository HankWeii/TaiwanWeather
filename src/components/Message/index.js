import React from 'react'
import PubSub from 'pubsub-js'
import { useState, useEffect } from 'react'
import './index.css'

export default function Message() {
    const [apiData, setApiData] = useState()
    useEffect(()=>{
        PubSub.subscribe('api',(_,data)=>{
            setApiData(data)
        })
    },[])
    return (
        <div>
            <div style={{fontSize:'80px', color:'gray'}}>
                Taiwan
            </div>
            <div className='wearth'>Weather</div>
            {
                apiData && 
                <div className='message'>
                    <h1>{apiData.city}</h1>
                    <h2 style={{color: apiData.weather.search('雨') < 0 && 'yellow' }}>{apiData.weather}</h2>
                    <h3>降雨機率 : {apiData.rainy} %</h3>
                    <h3 style={{color: apiData.maxTem > 28 ? 'red' : 'aqua'}}>{apiData.minTem} ~ {apiData.maxTem} °C</h3>
                </div>
            }
        </div>
        
    )
}
