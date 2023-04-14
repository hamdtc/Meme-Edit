import React from "react";
import '../styles/Meme.css'

export default function Meme(){
    return(
      <div>
        <main>
          <form className="form">
            <input
            type="text"
            id="second-line"
            className="form-input"
            name="bottomText"
            placeholder="First Line"
            >
            </input>
            <input
            type="text"
            id="second-line"
            className="form-input"
            name="bottomText"
            placeholder="Second Line"
            ></input>
            <button className="form-button"> check it</button>
            
          </form>
          <div>
            <h1>Here Meme comes</h1>
          </div>


        </main>
      </div>


    )
}