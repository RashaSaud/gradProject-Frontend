import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
       
        <div >
            <ul>
          <li > <Link className="link" to="/login">login</Link></li>
          <li > <Link className="link" to="/signUp">SignUp</Link></li>

          </ul>

</div>


    )
}
