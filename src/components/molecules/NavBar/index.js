import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/user'
import {
  StyledNavBar,
  StyledBrand,
  StyledCollapse,
  StyledNavigation,
  StyledLink,
  StyledAction,
  StyledButton
} from './index.style'

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
      <StyledBrand href="/">React Bootstrap</StyledBrand>

      <StyledCollapse>
        <StyledNavigation>
          <StyledLink to="/public">Public Page</StyledLink>
          <StyledLink to="/protected">Protected Page</StyledLink>
        </StyledNavigation>

        {isAuthenticated && (
          <StyledAction>
            <StyledButton onClick={handleLogout}>Logout</StyledButton>
          </StyledAction>
        )}
      </StyledCollapse>
    </StyledNavBar>
  )
}

export default NavBar
