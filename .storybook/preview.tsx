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

// Decorator that syncs Storybook toolbar theme with ThemeProvider
const ThemeDecorator = (Story: React.ComponentType, context: any) => {
  const theme = (context.globals.theme || 'light') as 'light' | 'dark'

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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
