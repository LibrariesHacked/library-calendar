export const addUrlParameter = (history, parameter, value) => {
  const currentUrlParams = new URLSearchParams(window.location.search)
  currentUrlParams.set(parameter, value)
  history.push(window.location.pathname + '?' + currentUrlParams.toString())
}

export const clearParameter = (history, parameter) => {
  const currentUrlParams = new URLSearchParams(window.location.search)
  currentUrlParams.delete(parameter)
  history.push(window.location.pathname)
}
