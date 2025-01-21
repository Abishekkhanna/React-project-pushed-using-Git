import React from 'react'
import r1 from '../Assets/rest1.jpg'
import r2 from '../Assets/rest2.jpg'
import '../Style/about.css'
export default function About() {
  return (
    <div class="header3" id="abt">
            <div class="h3c1">
                <h1>Little About Us</h1>
                <h4>THE HISTORY OF US</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime sunt, ea velit dolorem omnis a, qui quam veritatis ex dolorum.</p>
                <button>LEARN MORE</button>
            </div>
            <div class="h3c2">
                <img src={r1}/>
                <img src={r2}/>
            </div>
    </div>
  )
}
