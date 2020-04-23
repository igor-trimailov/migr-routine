import React from 'react'

// adds ability not to pass same data to mumtiple components
// i.e user data for account components that is shared
function ProxyComponent(props) {
  return (
    <React.Fragment>{React.cloneElement(props.children, props)}</React.Fragment>
  )
}

export {
  ProxyComponent
}