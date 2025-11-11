import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { ThemeProvider, useTheme } from '../src/lib/theme-provider'
import React, { useEffect } from 'react'

// Decorator that syncs Storybook toolbar theme with ThemeProvider
const ThemeDecorator = (Story: React.ComponentType, context: any) => {
  const theme = context.globals.theme || 'light'

  return (
    <ThemeProvider defaultTheme={theme as 'light' | 'dark'} storageKey="storybook-ui-theme">
      <ThemeSync theme={theme} />
      <Story />
    </ThemeProvider>
  )
}

// Component to sync theme changes from toolbar to ThemeProvider
const ThemeSync = ({ theme }: { theme: string }) => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme as 'light' | 'dark')
  }, [theme, setTheme])

  return null
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
