import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restoreToken } from '../src/store/actions/user'
import { localStorage } from '../src/utils/helpers'
import { PrivateRoute } from '../src/components/atoms'
import { NavBar } from '../src/components/molecules'
import { PublicPage, ProtectedPage, Login } from '../src/containers'

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