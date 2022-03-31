import React, { useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'

import EventCalendar from './EventCalendar'
import Header from './Header'
import Footer from './Footer'
import MarkdownPage from './MarkdownPage'
import Notification from './Notification'

import About from './pages/about.md'
import Accessibility from './pages/accessibility.md'
import Data from './pages/data.md'
import Privacy from './pages/privacy.md'

import { useApplicationStateValue } from './context/applicationState'
import { useViewStateValue } from './context/viewState'
import { useSearchStateValue } from './context/searchState'

function CalendarApplication () {
  const [{}, dispatchView] = useViewStateValue() //eslint-disable-line
  const [{}, dispatchApplication] = useApplicationStateValue() //eslint-disable-line
  const [{}, dispatchSearch] = useSearchStateValue() //eslint-disable-line

  useEffect(() => {}, [dispatchApplication, dispatchView, dispatchSearch])

  const loading = false

  const Page404 = () => (
    <div>
      <h2>Sorry! That page was not found</h2>
    </div>
  )

  return (
    <BrowserRouter>
      <div>
        <Header site={3} loading={loading} />
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
              <Route path='/' render={() => <EventCalendar />} />
            </Routes>
          </main>
        </Container>
        <Container maxWidth='lg'>
          <Footer />
        </Container>
        <Notification />
      </div>
    </BrowserRouter>
  )
}

export default CalendarApplication
