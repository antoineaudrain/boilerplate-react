import React, { useMemo } from 'react'
import PropType from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
  const token = useSelector((state) => state.user.token)
  const isAuthenticated = useMemo(() => !!token, [token])

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropType.node.isRequired
}

export default PrivateRoute
