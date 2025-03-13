import React from "react";
import { Wines } from "../data/wines";
import {Wine} from "../data/wine";
import { WiLunarEclipse } from "react-icons/wi";




function Inicio(){
return(
<div> 
    <div className="about">
    <h1>Bievenidos al Vinito 🍷</h1>
    <h2>Puedes ver todos los vinos que abro cada semana y mis futuras compras.</h2>
    </div>
<section className='Winelist'>
    {Wines.map((Inicio,index) => (
    <Wine 
    key={Inicio.id} 
    img={Inicio.img}
    Title={Inicio.Title}
    Description={Inicio.Description} 
   rating={Inicio.rating}
    
    />
))}

</section>

</div>


)




}


export {Inicio}