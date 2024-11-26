import React from "react";
import { Wines } from "../data/wines";
import {Wine} from "../data/wine";




function Inicio(){
return(
<div> 
    <div className="about">
    <h1>Bievenidos al Vinito 🍷</h1>
    <p>Soy un aficionado</p> 
    <h2>You can see every wine that I open every week and my future purchases.</h2>
    </div>
<section className='Winelist'>
    {Wines.map((Inicio,index) => (
    <Wine 
    key={Inicio.id} 
    img={Inicio.img}
    Title={Inicio.Title}
    Description={Inicio.Description} 
    Rate={Inicio.Rate}
    
    />
))}

</section>

</div>


)




}


export {Inicio}