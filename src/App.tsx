import React from 'react'

import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// import AppWrapper from './pages/AppWrapper'
// import RecommendPlaylist from './pages/RecommendPlaylist'
// import PlaylistDetail from './pages/PlaylistDetail'
// import NotFound from './pages/NotFound'
// import Test from './pages/Test'

const AppWrapper = React.lazy(() => import('./pages/AppWrapper'))
const RecommendPlaylist = React.lazy(() => import('./pages/RecommendPlaylist'))
const PlaylistDetail = React.lazy(() => import('./pages/PlaylistDetail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Test = React.lazy(() => import('./pages/Test'))

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<AppWrapper />}>
            <Route path='/' element={<RecommendPlaylist />} />
            <Route path='/recommend' element={<RecommendPlaylist />} />
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
