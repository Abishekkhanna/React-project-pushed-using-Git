import React from 'react'
import i1 from '../Assets/food1.jpg';
import i2 from '../Assets/food2.jpg';
import i3 from '../Assets/food3.jpg';
import '../Style/chef.css'

export default function Chef() {
  return (
    <div>
        <div class="header4" id="chef">
            <h1>--- Chef Recommends ---</h1>
            <div class="chef">
                <div class="food1">
                    <img src={i1}/>
                    <div class="fcon">
                        <h3>FOOD NAME</h3>
                        <p>Ingredients,toppings,flavour</p>
                    </div>
                </div>
                <div class="food2">
                    <img src={i2} />
                    <div class="fcon">
                        <h3>FOOD NAME</h3>
                        <p>Ingredients,toppings,flavour</p>
                    </div>
                </div>
                <div class="food3">
                    <img src={i3}/>
                    <div class="fcon">
                        <h3>FOOD NAME</h3>
                        <p>Ingredients,toppings,flavour</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
