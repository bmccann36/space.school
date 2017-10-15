import React from 'react'
import { Link } from 'react-router-dom';

let campuses = ['luna', 'terra', 'mars', 'titan']

export default function home (){
  return (
    <div>
      <h1> home page</h1>
        <ul>
         {campuses.map(campus => {
           return(
            <div >
              <Link to='/students'>{ campus }>
                <img src="https://d2ujflorbtfzji.cloudfront.net/key-image/c3c498a4-261b-4928-b282-48ea4ed12b12.png" />
              </Link>
              </div>
             )
         }
         )}

      </ul>

    </div>
  )
}

