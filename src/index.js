import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from './store'
import RouterProvider from './router'

const App = () => (
  <StrictMode>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'))