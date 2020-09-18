import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavBar = styled.nav(
  () => `
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem 1rem;
    background-color: #f8f9fa;
  `
)

export const StyledBrand = styled.a(
  () => `
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: rgba(0,0,0,.9);
    text-decoration: none;
    background-color: transparent;
  `
)

export const StyledCollapse = styled.div(
  () => `
    display: flex;
    flex-grow: 1;
    align-items: center;
  `
)

export const StyledNavigation = styled.div(
  () => `
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-right: auto;
  `
)

export const StyledLink = styled(Link)(
  () => `
    display: block;
    padding-right: .5rem;
    padding-left: .5rem;
    text-decoration: none;
    color: rgba(0,0,0,.5);
    background-color: transparent;
  `
)

export const StyledAction = styled.div(
  () => `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: 0em;
  `
)

export const StyledButton = styled.button(
  () => `
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: #dc3545;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid #dc3545;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  `
)
