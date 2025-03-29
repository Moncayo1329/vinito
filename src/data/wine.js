import React from "react"; 
import ReactStarts from "react-rating-stars-component";

function Wine(props){
return(
    <React.Fragment>
   <article className='wine'>
      <img src={props.img} alt='' width='47px' 
      loading="lazy"
      decoding="async"/>
      <h3>{props.Title}</h3>
      <h4 style={{color:'#6a6e73' , fontSize: '0.75rem', 
    marginTop: '0.25rem'}}>{props.Description}</h4>
  <ReactStarts 
  count={5}
  value={props.rating}
  size={24}
  activeColor="#ffd700"
          edit={false} 
          />
    <p>{props.Rate}</p>
    </article>

  </React.Fragment>
)




}


export {Wine};