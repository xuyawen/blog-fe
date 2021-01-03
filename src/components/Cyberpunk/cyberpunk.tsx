import React from 'react'
import './style.scss'
interface ICyberpunkButtonProps {
  onClick?: () => void
}

const CyberpunkButton: React.FC<ICyberpunkButtonProps> = props => {
  const { children, onClick } = props;
  return (
    <button
      data-text={ children }
      onClick={ onClick }
      className="cyberpunk">
      { children }
    </button>
  )
}

export default CyberpunkButton;