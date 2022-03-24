import React from "react"
import {childrenWithProps} from "../utils/reactUtil"

export default props => (
    <div>
        {props.children}
        {childrenWithProps(props.children, props)}
    </div>
)