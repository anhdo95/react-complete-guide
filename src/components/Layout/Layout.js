import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import Spinner from '@/components/Spinner/Spinner'

import axios from '@/services/axios'

import 'react-toastify/dist/ReactToastify.css';
import classes from './Layout.module'

export default class Layout extends React.Component {
  state = {
    loading: false,
    error: null,
  }

  componentWillMount() {
    this.requestInterceptor = axios.interceptors.request.use((config) => {
			this.setState({ error: null, loading: true })
			return config
		})

		this.responseInterceptor = axios.interceptors.response.use((res) => {
      this.setState({ loading: false })
      return res
    }, (error) => {
      console.error(error)
      this.setState({ error, loading: false })
      toast.error(error.message)
      throw error
		})
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.requestInterceptor)
    axios.interceptors.response.eject(this.responseInterceptor)
  }

  render() {
    return (
			<div className={classes.layout}>
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
				{this.state.loading && <Spinner />}
				<Toolbar />
				<main className={classes.Main}>{this.props.children}</main>
			</div>
		)
  }
}
