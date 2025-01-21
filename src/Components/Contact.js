import React from 'react'
import '../Style/contact.css'
import im1 from '../Assets/post1 (1).jpg'
import im2 from '../Assets/post1 (2).jpg'
import im3 from '../Assets/post1 (3).jpg'
export default function Contact() {
  return (
    <div>
        <div class="header8" id="art">
            <div class="rec">
                <h3>Recent Articles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quas magnam repudiandae amet dicta ratione ex rem!</p>
                <p><a href="#">READ ALL NEWS</a></p>
            </div>
            <div class="post">
                <div class="p1">
                    <img src={im1}/>
                    <h3>NAME OF THE FOOD</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sequi nemo delectus. Repudiandae possimus sit, laboriosam.</p>
                    <p><a href="#">READ MORE</a></p>
                </div>
                <div class="p2">
                    <img src={im2}/>
                    <h3>NAME OF THE FOOD</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sequi nemo delectus. Repudiandae possimus sit, laboriosam.</p>
                    <p><a href="#">READ MORE</a></p>
                </div>
                <div class="p3">
                    <img src={im3}/>
                    <h3>NAME OF THE FOOD</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sequi nemo delectus. Repudiandae possimus sit, laboriosam.</p>
                    <p><a href="#">READ MORE</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
