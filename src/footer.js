import React from "react"; 
import {  FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

function Footer(){ 

    return(

 <footer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://twitter.com/MichaelMoncay7" className="text-decoration-none" style={{ color: 'black', margin: '0 10px', fontFamily:'15px' }}> <BsTwitterX /></a> 
  <a href="https://github.com/Moncayo1329" className="text-decoration-none" style={{ color: 'black', margin: '0 10px' }}> <FaGithub /></a>
</div>
      <div className="derechos-de-autor">Creado con ❤️ por Michael Moncayo (2024) &#169; </div>
 </footer>


    )





}


export {Footer}