import { useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { RouteSoftware } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <RouteSoftware />
      </BrowserRouter>
  )
}

