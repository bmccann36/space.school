

import React, { Component } from 'react';
let campuses = ['luna', 'terra', 'mars', 'titan']

export default class Home extends Component{
  constructor(){
    super()
    this.state= {
      selectedCampus: {}
    }
  }

  render(){
  return (
   <div>
   <h1> home page</h1>
     <div className="campus-wrapper"
     onClick={()=>console.log('click') }>
      {campuses.map(campus => {
        return(
         <div>
           <div className= "campus" >
             <h2> campus </h2>
             <img src="https://d2ujflorbtfzji.cloudfront.net/key-image/c3c498a4-261b-4928-b282-48ea4ed12b12.png"/>
           </div>
         </div>
       )}
      )}
   </div>
 </div>
  )
}
}


