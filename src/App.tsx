import React from 'react'

import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const AppWrapper = React.lazy(() => import('./pages/AppWrapper'))
const RecommendPlaylist = React.lazy(() => import('./pages/RecommendPlaylist'))
const PlaylistDetail = React.lazy(() => import('./pages/PlaylistDetail'))
const Login = React.lazy(() => import('./pages/Login'))
const Settings = React.lazy(() => import('./pages/Settings'))
const Personalize = React.lazy(() => import('./pages/Personalize'))
const TestPage = React.lazy(() => import('./pages/TestPage'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <CssBaseline>
      <Router>
        <React.Suspense>
          <Routes>
            <Route path='/' element={<AppWrapper />}>
              <Route path='/' element={<RecommendPlaylist />} />
              <Route path='/recommend' element={<RecommendPlaylist />} />
              <Route path='/personalize' element={<Personalize />} />
              <Route path='/login' element={<Login />} />
              <Route path='/settings' element={<Settings />} />

              <Route
                path='/playlist/:playlistId'
                element={<PlaylistDetail />}
              />
              <Route path='/test' element={<TestPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </CssBaseline>
  )
}

export default App
