import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restoreToken } from './store/actions/user'
import { localStorage } from './utils/helpers'
import { PrivateRoute } from './components/atoms'
import { NavBar } from './components/molecules'
import { PublicPage, ProtectedPage, Login } from './containers'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      const token = await localStorage.get('userToken')
      if (token) {
        await dispatch(restoreToken(token.split(' ')[1]))
      }
    }
    fetch()
  }, [])

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/public">
          <PublicPage />
        </Route>

        <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
