import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'

import CancelIcon from '@mui/icons-material/CancelTwoTone'

import { useSearchStateValue } from './context/searchState'
import { useViewStateValue } from './context/viewState'

function EventDetails () {
  const [{ currentEvent }, dispatchSearch] = useSearchStateValue() //eslint-disable-line
  const [{ eventDialogOpen }, dispatchView] = useViewStateValue() //eslint-disable-line

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {}, [currentEvent])

  const close = () => {
    dispatchSearch({
      type: 'SetCurrentEvent',
      currentEvent: null
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
      PaperProps={{
        elevation: 0,
        style: {
          border: '1px solid #e5e5e5'
        }
      }}
      sx={{
        border: '1px solid #e5e5e5'
      }}
    >
      {currentEvent && (
        <>
          <DialogTitle id='dlg-title'>{currentEvent.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>Put some stuff here</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => close()}
              color='secondary'
              endIcon={<CancelIcon />}
            >
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}

export default EventDetails
