import React from 'react'

const LoadingContext = React.createContext({
  loading: false,
  start() {},
  stop() {},
})

export default LoadingContext