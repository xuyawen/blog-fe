import React from 'react'
import './style.scss'

interface IMainProps {}

const Main: React.FC<IMainProps> = props => {

  return (
    <main className="main">
      { props.children }
    </main>
  )
}

export default Main;