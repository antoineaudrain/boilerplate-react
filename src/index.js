import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from './store'
import ThemeProvider from './theme'
import RouterProvider from './router'

const App = () => (
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'))
