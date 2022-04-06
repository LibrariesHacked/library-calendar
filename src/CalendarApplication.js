import React, { useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'

import EventCalendar from './EventCalendar'

import { useApplicationStateValue } from './context/applicationState'
import { useViewStateValue } from './context/viewState'
import { useSearchStateValue } from './context/searchState'

function CalendarApplication () {
  const [{}, dispatchView] = useViewStateValue() //eslint-disable-line
  const [{}, dispatchApplication] = useApplicationStateValue() //eslint-disable-line
  const [{}, dispatchSearch] = useSearchStateValue() //eslint-disable-line

  useEffect(() => {}, [dispatchApplication, dispatchView, dispatchSearch])

  const loading = false

  return (
    <BrowserRouter>
      <>
        {loading ? (
          <LinearProgress
            variant='buffer'
            value={0}
            valueBuffer={0}
            color='secondary'
          />
        ) : null}
        <Container maxWidth='lg'>
          <main>
            <Routes>
              <Route path='/' element={<EventCalendar />} />
            </Routes>
          </main>
        </Container>
      </>
    </BrowserRouter>
  )
}

export default CalendarApplication
