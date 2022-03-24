import React from "react";

export default props => (
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>    
            {
                React.Children.map(child => {
                    React.cloneElement(props.child, {...props, ...props.child.props})
                })
                
            }
        </ul>
    </div>
    
)