import React from 'react'

import { Outlet } from 'react-router-dom'

const AppWrapper = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AppWrapper
