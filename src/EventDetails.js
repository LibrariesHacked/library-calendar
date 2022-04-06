import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'

import CancelIcon from '@mui/icons-material/CancelTwoTone'

import { useSearchStateValue } from './context/searchState'
import { useViewStateValue } from './context/viewState'

function EventDetails () {
  const [{ currentEventId }, dispatchSearch] = useSearchStateValue() //eslint-disable-line
  const [{ eventDialogOpen }, dispatchView] = useViewStateValue() //eslint-disable-line

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {}, [currentEventId])

  const close = () => {
    dispatchSearch({
      type: 'SetCurrentEvent',
      currentEventId: null
    })
    dispatchView({ type: 'SetEventDialog', eventDialogOpen: false })
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      disableBackdropClick
      open={eventDialogOpen}
      onClose={close}
      aria-labelledby='dlg-title'
      BackdropProps={{ invisible: true }}
      PaperProps={{ elevation: 0 }}
    >
      <DialogTitle id='dlg-title'></DialogTitle>
      <DialogActions>
        <Button
          onClick={() => close()}
          color='secondary'
          endIcon={<CancelIcon />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EventDetails
