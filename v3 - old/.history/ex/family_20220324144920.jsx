import React from "react"
import {childrenWithProps} from "../utils/reactUtil"

export default props => (
    <div>
        {childrenWithProps(props)}
    </div>
)