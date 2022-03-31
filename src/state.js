const initialApplicationState = {}

const applicationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialSearchState = {}

const searchReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialViewState = {
  notificationOpen: false,
  notificationSeverity: '',
  notificationMessage: ''
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
