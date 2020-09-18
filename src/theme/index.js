import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from './defaultTheme'

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={defaultTheme}>{children}</EmotionThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider
