import "./index.css"
import ReactDOM from "react-dom"
import React from "react"

const tag = <h1>Olá react</h1>
ReactDOM.render(
    <div>
        {tag}
    </div>, 
    document.querySelector("#root")
)