import React, { Suspense } from 'react'

import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const AppWrapper = React.lazy(() => import('./pages/AppWrapper'))
const RecommendPlaylist = React.lazy(() => import('./pages/RecommendPlaylist'))
const PlaylistDetail = React.lazy(() => import('./pages/PlaylistDetail'))
const Personalize = React.lazy(() => import('./pages/Personalize'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <Suspense>
          <Routes>
            <Route path='/' element={<AppWrapper />}>
              <Route path='/' element={<RecommendPlaylist />} />
              <Route path='/recommend' element={<RecommendPlaylist />} />
              <Route
                path='/playlist/:playlistId'
                element={<PlaylistDetail />}
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Container>
  )
}

export default App
