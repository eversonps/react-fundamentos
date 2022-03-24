import React, {useState} from "react";

export default props => {
    const {number, setNumber} = setNumber(0)
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number++)}> Inc </button>
        </div>
    )
}