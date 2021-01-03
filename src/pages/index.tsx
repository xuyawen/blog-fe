import React, { ReactElement } from 'react'
import router from 'next/router'
import Cyberpunk from '@/components/Cyberpunk'
import './style.scss'

const Wellcom = (): ReactElement => {
  return (
    <div className="wellcom">
      <Cyberpunk onClick={() => router.push('/home')}>wellcome to blog</Cyberpunk>
    </div>
  )
}

export default Wellcom