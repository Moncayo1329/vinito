import React from "react"; 
import { Menu } from "../menu";
import { Footer } from "../footer";
import {Wish} from '../deseos/renderdeseos'
import { Deseos  } from "../deseos/deseos";


function Future(){
    return (
      <div> 
        <Menu />
        <section className="Winelist">
          {Deseos.map((Future, index) => (
            <Wish
              key={Future.id} 
              img={Future.img} 
              Title={Future.Title} // O el valor correcto
            />
          ))}
        </section>
        <Footer />
      </div>
    );
  }
  


    <Footer />
  





export{Future};