import React from 'react'
import {CgShoppingCart} from "react-icons/cg"
import "../App.css"

export default function Home() {
    return (
        <div className="w3-content" id="divCon" >
            <header className="w3-panel w3-center w3-opacity" id="headerHome" >
            <h1 className="w3-xlarge">PRODUCTIVE FAMILIES </h1>
            <div className="w4-xlarge"><CgShoppingCart />At your service</div>
          </header>
        
          <div className="w3-row-padding" id="divImg">
              <div className="w3-half">
                  <img src="https://simply-delicious-food.com/wp-content/uploads/2020/02/Creamy-chicken-broccoli-pasta-5.jpg" className="homeImg" alt=""/>
                  <img src="https://thedefineddish.com/wp-content/uploads/2020/02/2020-02-17-03.08.50.jpg" className="homeImg" alt=""/>
                  </div>

                  <div className="w3-half w3-row-padding ">
                  <img src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg" className="homeImg" alt=""/>
                  <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg?fit=1200%2C879&ssl=1" className="homeImg" alt=""/>

              </div>
          </div>
         


</div>  


    )
}
