import React from 'react'

export default function Box({children,className}) {
  return (
    <div className={`px-5 md:px-16 lg:px-24 ${className ? className: ' '}`}>{children}</div>
  )
}
