import React from 'react'
import '@/App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import AppWrapper from '@/pages/AppWrapper'
import Recommend from '@/pages/Recommend'
import Test from '@/pages/Test'
import PlaylistDetail from '@/pages/PlaylistDetail'
import AlbumDetail from '@/components/AlbumDetail'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<AppWrapper />}>
            <Route path='/' element={<Recommend />} />
            <Route path='/recommend' element={<Recommend />} />
            <Route path='/test' element={<Test />} />
            <Route path='/playlist/:playlistId' element={<PlaylistDetail />} />
            <Route path='/album/:albumId' element={<AlbumDetail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
