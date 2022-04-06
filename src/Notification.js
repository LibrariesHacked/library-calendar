import React from 'react'

import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { useViewStateValue } from './context/viewState'

function Notification () {
  const [
    { notificationOpen, notificationMessage },
    dispatchView
  ] = useViewStateValue() //eslint-disable-line

  const handleClose = () => {
    dispatchView({ type: 'CloseNotification' })
  }

  return (
    <Snackbar
      open={notificationOpen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose}>{notificationMessage}</Alert>
    </Snackbar>
  )
}

export default Notification
