import React, { useState } from 'react'

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import Spinner from '@/components/Spinner/Spinner'

import LoadingContext from '@/context/LoadingContext'

import classes from './Layout.module'

export default function Layout( props ) {
  const [loading, setLoading] = useState(false)

  function toggleLoading(loading) {
    return setLoading.bind(this, loading)
  }

  const loadingContextValue = {
    loading,
    start: toggleLoading(true),
    stop: toggleLoading(false)
  }

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      <div className={classes.layout}>
        {loading && <Spinner />}
        <Toolbar />
        <main className={classes.Main}>{ props.children }</main>
      </div>
    </LoadingContext.Provider>
  )
}
