import React from "react";

function Wish(props){
return(
<React.Fragment>

<article className="wine">
    <img src={props.img} alt="" width='47px'
    loading="lazy"
    decoding="async"/>
    <h4 style={{color:'#6a6e73' , fontSize: '1 rem', 
    marginTop: '0.25rem'}}>{props.Title}</h4>
</article>



</React.Fragment>



)



}


export {Wish}