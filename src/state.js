const initialApplicationState = {}

const applicationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialSearchState = {
  currentEvent: null
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SetCurrentEvent':
      return { ...state, currentEvent: action.currentEvent }
    default:
      return state
  }
}

const initialViewState = {
  notificationOpen: false,
  notificationSeverity: '',
  notificationMessage: '',
  eventDialogOpen: false
}

const viewReducer = (state, action) => {
  switch (action.type) {
    case 'ShowNotification':
      return {
        ...state,
        notificationOpen: true,
        notificationSeverity: action.notificationSeverity,
        notificationMessage: action.notificationMessage
      }
    case 'CloseNotification':
      return { ...state, notificationOpen: false }
    case 'SetEventDialog':
      return { ...state, eventDialogOpen: action.eventDialogOpen }
    default:
      return state
  }
}

export {
  initialApplicationState,
  applicationReducer,
  initialSearchState,
  searchReducer,
  initialViewState,
  viewReducer
}
