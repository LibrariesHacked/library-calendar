import React, { useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

import EventCalendar from './EventCalendar'
import EventDetails from './EventDetails'
import Footer from './Footer'

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
          <Box
            sx={{
              textAlign: 'center',
              padding: '10px'
            }}
          >
            <img src='logo_128.png' alt='Library calendar logo' />
            <Typography variant='h2' component='h1'>
              Library calendar
            </Typography>
            <Typography
              variant='h5'
              component='p'
              gutterBottom
              sx={{
                backgroundColor: '#fafafa',
                padding: '10px',
                borderRadius: '5px'
              }}
            >
              Key dates in the public library year
            </Typography>
          </Box>
          <main>
            <Routes>
              <Route path='/' element={<EventCalendar />} />
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
