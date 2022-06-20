import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import AppWrapper from './pages/AppWrapper'
import Recommend from './pages/Recommend'
import PlaylistDetail from './pages/PlaylistDetail'
import NotFound from './pages/NotFound'
import Test from './pages/Test'

// import AppWrapper from '@/pages/AppWrapper'

// import PlaylistDetail from '@/pages/PlaylistDetail'
// import Test from '@/pages/Test'
// import NotFound from '@/pages/NotFound'

// import Recommend from '@/pages/Recommend'
// const Recommend = React.lazy(() => import('@/pages/Recommend'))

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<AppWrapper />}>
            <Route path='/' element={<Recommend />} />
            <Route path='/recommend' element={<Recommend />} />
            <Route path='/playlist/:playlistId' element={<PlaylistDetail />} />

            <Route path='/test' element={<Test />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
