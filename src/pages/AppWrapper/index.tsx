import React from 'react'

import { Outlet } from 'react-router-dom'
import TopAppBar from '../../components/TopAppBar'

// import TopAppBar from '@/components/TopAppBar'

const AppWrapper = () => {
  return (
    <div>
      <TopAppBar />
      <Outlet />
    </div>
  )
}

export default AppWrapper
