import React from "react"
import DiretaFilha from "./DiretaFilha"
export default props=>{
    return (
        <div>
            <DiretaFilha nome="João" idade={17} nerd={true}></DiretaFilha>
            <DiretaFilha nome="Miguel" idade={10} nerd={false}></DiretaFilha>
        </div>
    )
}