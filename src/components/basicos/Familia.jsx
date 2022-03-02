import react from "react";
import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props=> {
    return(
        <div>
            {
                React.Children.map(props.children, child=>{
                    React.cloneElement(child, props)
                })
            }
        </div>     
    )
}