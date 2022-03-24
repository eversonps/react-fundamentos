import React from "react";

export default props => (
    <div>
        <h1>Familia</h1>
        {React.Children.map(props.children, children => {
            return React.cloneElement(children, {...props})
        })}
    </div>
)