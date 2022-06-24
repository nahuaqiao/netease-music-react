import React from 'react'

import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

import TopAppBar from '../../components/common/TopNavBar'
import BottomPlayerControlBar from '../../components/common/BottomPlayerControlBar'

const AppWrapper = () => {
  return (
    <div>
      <TopAppBar />
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <Outlet />
      </Box>
      <BottomPlayerControlBar />
    </div>
  )
}

export default AppWrapper
