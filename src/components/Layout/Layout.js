import React, { useState, useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import Spinner from '@/components/Spinner/Spinner'

import axios from '@/services/axios'
import * as apiService from '@/services/api.service'
import * as ACTION from '@/store/action'

import 'react-toastify/dist/ReactToastify.css';
import classes from './Layout.module'

export default function Layout( props ) {
	const [mounted, setMounted] = useState(false)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		if (Cookies.get('token')) {
			const user = jwtDecode(Cookies.get('token'))

			dispatch(ACTION.setUser({
				userId: user.user_id,
				email: user.email,
				expiresIn: new Date(user.exp * 1000)
			}))
		}

		async function loadIngredientsPrices() {
			const pricesData = await apiService.getIngredientsPrices()
			const result = _.reduce(pricesData, (_, prices) => prices, {})
			dispatch(ACTION.setIngredientsPrices(result))
			setMounted(true)
		}

		loadIngredientsPrices()

		const requestInterceptor = axios.interceptors.request.use((config) => {
			setLoading(true)
			return config
		})

		const responseInterceptor = axios.interceptors.response.use((res) => {
			setLoading(false)
      return res
    }, (error) => {
			console.error(error)
			setLoading(false)

			const message = _.get(error, "response.data.error.message") || error.message
			if (message) {
				toast.error(message)
			}

      throw error
		})

		return () => {
			axios.interceptors.request.eject(requestInterceptor)
			axios.interceptors.response.eject(responseInterceptor)
		}
	}, [])

	

	return mounted && (
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
			{loading && <Spinner />}
			<Toolbar />
			<main className={classes.Main}>{props.children}</main>
		</div>
	)
}
