import React, { useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { logout } from '../../../store/actions/user'

const StyledNavBar = styled.nav(
  () => `
    display: flex;
    flex: 1;
    height: 67px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    background-color: white;
  `
)

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
    <StyledNavBar>
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
    </StyledNavBar>
  )
}

export default NavBar