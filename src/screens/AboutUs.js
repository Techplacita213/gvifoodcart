import React from 'react'
import AboutCard from '../components/AboutCard'
import {FaLeaf,FaHollyBerry,FaBug, FaUser} from 'react-icons/fa'

export default function AboutUs() {
    return (
        <div style={{display:"flex",flexDirection:"column",padding:"10px",justifyContent:"center"}}>
            <div style={{textAlign:"center"}}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exce est laborum et dolorum Et harum tatibus maiores alias consequatur repellat."
            </div>
            <div style={{display:'flex',justifyContent:"space-around",flexWrap:"wrap",marginTop:"30px"}}>
                <AboutCard Image={FaLeaf} title="Fresh & Pesticide Free" content="On the other hand, we denounce with righteous indignation and pleasure of the moment."/>
                <AboutCard Image={FaHollyBerry} title="Live A Healthier Life" content="On the other hand, we denounce with righteous indignation and pleasure of the moment."/>
                <AboutCard Image={FaBug} title="Live A Healthier Life" content="On the other hand, we denounce with righteous indignation and pleasure of the moment."/>
                <AboutCard Image={FaUser} title="Live A Healthier Life" content="On the other hand, we denounce with righteous indignation and pleasure of the moment."/>
            </div>
        </div>
    )
}
