import React from "react";
import './Main.css'
import flipkart_img from './images/flipkart.png'
import amzn_img from './images/amazon.png'
import hero_img from './images/hero-image.png'

const Main=()=>{
    return(
        <div className="main-box">
            <div className="left">
                <div className="heading">
                    YOUR FEET DESERVES THE BEST
                </div>
                <div className="desc">Your feet deserves the best and we are here to help you with our 
                    shoes.Your feet deserves the best and we are here to help you with our shoes.
                </div>
                <div className="buttons">
                    <button class="my-button" onclick="handleButtonClick()">Shop Now</button>
                    <button class="my-button white" onclick="handleButtonClick()">Categories</button>
                </div>
                <div className="sites">
                    <p>Also available on</p>
                    <img src={flipkart_img}></img>
                    <img src={amzn_img}></img>
                </div>
            </div>
            <div className="right">
                <img src={hero_img}></img>
            </div>
        </div>
    )
}
export default Main