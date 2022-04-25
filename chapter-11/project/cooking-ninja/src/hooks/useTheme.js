import { React, useContext } from 'react'
import { ThemeContext } from '../context/ThemedContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider")
  }

  return context
}
