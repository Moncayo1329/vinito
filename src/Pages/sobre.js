import React from "react";
import { Menu } from "../menu";
import vinitoImage from './Imagenes/Mike.jpg'; // Ajusta la ruta según donde esté tu imagen
import { Footer } from "../footer";
function About(){

    return (
<div>
    <Menu />
    <div className="container mt-5 pb-5 text-center className=gradientTitle" style={{ color: '#000' }}>
  <h2>Sobre Vinito.</h2>
  <img 
  loading="lazy"
   className="coolImage"
    decoding="async"
  src={vinitoImage} alt="Vinito" style={{  width: '100%', 
    maxWidth: '250px', 
    margin: '20px 0', 
    borderRadius: '15px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'  }} 
   />
  <p style={{ color: '#46526f' }}>Vinito es una website donde puedes ver mi viaje a través de una de mis pasiones:<br/> la degustación de vino.
  Podrás ver los vinos que voy tomando cada semana y mis futuras compras.<br/> Si quieres hacer alguna sugerencia o recomendarme algo, ¡este es el lugar!</p>
</div>


    <Footer />
    
    </div>


    )


}


export default About;