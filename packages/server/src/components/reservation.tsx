import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'


interface BrightcoveProps {
    active: boolean;
    children?: ReactNode;
    onClick: Function;
}

const Link:React.FunctionComponent<BrightcoveProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link