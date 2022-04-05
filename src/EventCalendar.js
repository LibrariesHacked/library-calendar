/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

import './custom.scss'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = require('./helpers/events.json')

function EventCalendar () {
  const newEvents = events.map(event => {
    return {
      id: event.id,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    }
  })
  return (
    <div
      css={css`
        height: 600px;
      `}
    >
      <Calendar
        localizer={localizer}
        events={newEvents}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  )
}

export default EventCalendar
