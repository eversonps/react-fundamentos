import React from "react"

export default props => (
    <div>
        {props.children}
        {props.children.map(children => {
            return React.cloneElement(children, {...props})
        })}
    </div>
)