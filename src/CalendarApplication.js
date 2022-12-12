import React, { useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'

import EventCalendar from './EventCalendar'
import EventDetails from './EventDetails'
import Header from './Header'
import Footer from './Footer'

import { MemoMarkdownPage } from './MarkdownPage'

import { useApplicationStateValue } from './context/applicationState'
import { useViewStateValue } from './context/viewState'
import { useSearchStateValue } from './context/searchState'

import About from './pages/about.md'
import Accessibility from './pages/accessibility.md'
import Privacy from './pages/privacy.md'

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
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<EventCalendar />} />
              <Route
                path='/about'
                exact
                element={<MemoMarkdownPage page={About} />}
              />
              <Route
                path='/accessibility'
                exact
                element={<MemoMarkdownPage page={Accessibility} />}
              />
              <Route
                path='/privacy'
                exact
                element={<MemoMarkdownPage page={Privacy} />}
              />
            </Routes>
          </main>
        </Container>
        <Container maxWidth='lg' sx={{ paddingTop: '5px' }}>
          <Footer />
        </Container>
        <EventDetails />
      </>
    </BrowserRouter>
  )
}

export default CalendarApplication
