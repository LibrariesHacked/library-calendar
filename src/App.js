import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material/styles'

import CalendarApplication from './CalendarApplication'

import theme from './theme'

import { ApplicationStateProvider } from './context/applicationState'
import { SearchStateProvider } from './context/searchState'
import { ViewStateProvider } from './context/viewState'
import {
  initialApplicationState,
  applicationReducer,
  initialSearchState,
  searchReducer,
  initialViewState,
  viewReducer
} from './state'

function App () {
  return (
    <ApplicationStateProvider
      initialState={initialApplicationState}
      reducer={applicationReducer}
    >
      <SearchStateProvider
        initialState={initialSearchState}
        reducer={searchReducer}
      >
        <ViewStateProvider
          initialState={initialViewState}
          reducer={viewReducer}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CalendarApplication />
          </ThemeProvider>
        </ViewStateProvider>
      </SearchStateProvider>
    </ApplicationStateProvider>
  )
}

export default App
