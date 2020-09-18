import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../../store/actions/user'
import { localStorage } from '../../utils/helpers'

const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const { from } = location.state || { from: { pathname: '/' } }

  const handleLogin = async () => {
    const data = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDBjY2QzNi0yMGVlLTQzY2ItOTE5Ni1lMzA0MGJmMDkyYzEifQ.GTtj3yHLDw3jF-Pt0EwUK0Zjutl4U6IUI-NesgA6DYY',
      user: {
        username: 'johndoe',
        email: 'johndoe@test.com'
      }
    }

    if (data) {
      await localStorage.set('userToken', `Bearer ${data.token}`)
      await dispatch(setToken(data.token))
      await dispatch(setUser(data.user))
      history.replace(from)
    }
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login
