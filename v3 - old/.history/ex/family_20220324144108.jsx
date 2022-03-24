import React from "react"

export default props => (
    <div>
        {props.children}
        {props.children.maps(children => {
            return React.cloneElement(children, {...props})
        })}
    </div>
)