import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import Spinner from '@/components/Spinner/Spinner'

import LoadingContext from '@/context/LoadingContext'
import axios from '@/services/axios'

import 'react-toastify/dist/ReactToastify.css';
import classes from './Layout.module'

export default class Layout extends React.Component {

  state = {
    loading: false,
    error: null,
  }

  get loadingContextValue() {
    return {
      loading: this.state.loading,
      start: this.toggleLoading(true),
      stop: this.toggleLoading(false)
    }
  }

  componentWillMount() {
    this.requestInterceptor = axios.interceptors.request.use((config) => {
			this.setState({ error: null })
			return config
		})

		this.responseInterceptor = axios.interceptors.response.use(null, (error) => {
      this.setState({ error })
      toast.error(error.message)
      throw error
		})
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.requestInterceptor)
    axios.interceptors.response.eject(this.responseInterceptor)
  }

  setLoading = (loading) => {
    this.setState({ loading })
  }

  toggleLoading = (loading) => {
    return this.setLoading.bind(this, loading)
  }

  render() {
    return (
			<LoadingContext.Provider value={this.loadingContextValue}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
          pauseOnHover
          transition={Slide}
				/>
				<div className={classes.layout}>
					{this.state.loading && <Spinner />}
					<Toolbar />
					<main className={classes.Main}>{this.props.children}</main>
				</div>
			</LoadingContext.Provider>
		)
  }
}
