import React, { useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/user'

const NavBar = () => {
  const token = useSelector((state) => state.user.token)
  const isAuthenticated = useMemo(() => !!token, [token])
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = async () => {
    await dispatch(logout())
    history.push('/')
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        {isAuthenticated && (
        <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar