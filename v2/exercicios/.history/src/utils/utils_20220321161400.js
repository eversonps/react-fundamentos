
export default function(){
    React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props, ...child.props})
    })
}
