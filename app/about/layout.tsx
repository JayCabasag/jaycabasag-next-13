import Aboutpage from '@/containers/about'
import React, { ReactNode } from 'react'

export default function layout({children} : { children: ReactNode }) {
  return (
    <Aboutpage>
      {children}
    </Aboutpage>
  )
}
