import React from 'react'
import './style.scss'

import { Container, Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

import TopAppBar from '../../components/common/TopNavBar'
import BottomPlayerControlBar from '../../components/common/BottomPlayerControlBar'

const AppWrapper = () => {
  return (
    <div className='AppWrapper'>
      <Container>
        <TopAppBar />
        <Box sx={{ marginTop: 4, marginBottom: 4 }}>
          <Outlet />
        </Box>
      </Container>
      <BottomPlayerControlBar />
    </div>
  )
}

export default AppWrapper
