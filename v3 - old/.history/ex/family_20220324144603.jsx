import React from "react"
import {childrenWithProps} from "../utils/reactUtil"

export default props => (
    <div>
        {props.children}
        {React.Children.map(props.children, children => {
            return React.cloneElement(children, {...props})
        })}
    </div>
)