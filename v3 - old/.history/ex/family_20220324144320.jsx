import React from "react"

export default props => (
    <div>
        {props.children}
        {React.Children.map(props.children, children => {
            return React.cloneElement(children, {...props})
        })}
    </div>
)