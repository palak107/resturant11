import React from 'react'
import Link from "next/link";

const navbar = (style) => {
  return (
    <div>
      <div>
        <nav>
           <div>
            <div className="navbar">
                <ul>
                  <Link  href="/"> <li>Home</li> </Link>
                  <Link  href="/Page"> <li>MENU</li> </Link> 
                  <Link  href="/form">  <li>BOOKING</li></Link>
                    <Link href='/chief'>CLASSES</Link>
                </ul>
            </div>
           </div>
        </nav>
      </div>
    </div>
  )
}

export default navbar


