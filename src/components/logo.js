import { chakra } from '@chakra-ui/core'
import React from 'react'

const Logo = (props) => {
  return (
    <chakra.svg
      height="8"
      width="auto"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 50, 0
        l 40, 0
        L 50, 100
        l -40, 0
        Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="10%" y1="100%" x2="90%" y2="0%">
          <stop offset="0%" stopColor="#9dff1c" />
          <stop offset="100%" stopColor="#00c3ff" />
        </linearGradient>
      </defs>
    </chakra.svg>
  )
}

export default Logo
