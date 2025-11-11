import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { ThemeProvider } from '../src/lib/theme-provider'
import React from 'react'

// Component wrapper that handles theme changes
const ThemeWrapper = ({ children, theme }: { children: React.ReactNode; theme: 'light' | 'dark' }) => {
  React.useEffect(() => {
    // Apply theme directly to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider defaultTheme={theme} storageKey="storybook-ui-theme">
      {children}
    </ThemeProvider>
  )
}

// Decorator that uses theme from story args
const ThemeDecorator = (Story: React.ComponentType, context: any) => {
  // Get theme from story args or default to dark
  const theme = (context.args?.theme || 'dark') as 'light' | 'dark'

  return (
    <ThemeWrapper theme={theme}>
      <Story />
    </ThemeWrapper>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Theme variant',
      table: {
        category: 'Theme',
      },
      // Make theme appear first in controls
      order: 0,
    },
  },
  args: {
    // Default theme for all stories
    theme: 'dark',
  },
  decorators: [ThemeDecorator],
}

export default preview
