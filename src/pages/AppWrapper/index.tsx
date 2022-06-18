import React from 'react'

import { Outlet } from 'react-router-dom'

import BottomPlayerBar from '@/components/BottomPlayerBar'
import TopAppBar from '@/components/TopAppBar'

const AppWrapper = () => {
  return (
    <div>
      <TopAppBar />
      <Outlet />
      <BottomPlayerBar />
    </div>
  )
}

export default AppWrapper
