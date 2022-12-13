/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

import { useSearchStateValue } from './context/searchState'
import { useViewStateValue } from './context/viewState'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = require('./helpers/events.json')

function EventCalendar () {
  const [{ currentEvent }, dispatchSearch] = useSearchStateValue() //eslint-disable-line
  const [{ eventDialogOpen }, dispatchView] = useViewStateValue() //eslint-disable-line

  const selectEvent = event => {
    dispatchSearch({
      type: 'SetCurrentEvent',
      currentEvent: event
    })
    dispatchView({ type: 'SetEventDialog', eventDialogOpen: true })
  }

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
        popup={true}
        onSelectEvent={selectEvent}
      />
    </div>
  )
}

export default EventCalendar
