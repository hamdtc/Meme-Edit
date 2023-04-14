import React from "react";
import '../styles/Meme.css'

export default function Meme(){
    return(
      <div>
        <main>
          <form>
            <input
            type="text"
            id="second-line"
            name="bottomText"
            placeholder="First Line"
            >
            </input>
            <input
            type="text"
            id="second-line"
            name="bottomText"
            placeholder="Second Line"
            ></input>
            <div>
            <button>check it</button>
            </div> 
          </form>
          <div>
            <h1>Here Meme comes</h1>
          </div>


        </main>
      </div>


    )
}