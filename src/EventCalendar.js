import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import './custom.scss'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

function EventCalendar () {
  return (
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor='start'
      endAccessor='end'
    />
  )
}

export default EventCalendar
