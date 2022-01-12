import React from 'react'
import './acard.css'

export default function AboutCard({Image,title,content}) {
    return (
        <div id="hacard" style={{display:"flex",flexDirection:"row",padding:"10px",alignItems:"center",width:"450px",maxWidth:"450px",flexWrap:"wrap",margin:"10px"}}>
            <div id="acard" style={{display:"flex",borderRadius:"100px",justifyContent:"center",alignItems:"center",border:"dashed black 1px",width:"75px",height:"75px"}}>
                {Image?<Image id="aicon" style={{fontSize:"25px"}}/>:null}
            </div>
            <div style={{display:"flex",flexDirection:"column",width:"300px",maxWidth:"300px",marginLeft:"20px"}}>
                <div style={{fontWeight:"600",fontSize:"20px"}}>{title}</div>
                <div style={{marginTop:"10px",fontSize:"17px"}}>{content}</div>
            </div>
        </div>
    )
}
