/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

import './custom.scss'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = require('./helpers/events.json')

function EventCalendar () {
  return (
    <div
      css={css`
        height: 500px;
      `}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  )
}

export default EventCalendar
