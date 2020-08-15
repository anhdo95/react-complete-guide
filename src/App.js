import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import qs from 'qs'

import store from '@/store/index'
import Layout from '@/components/Layout/Layout'

function lazy(module) {
  return React.lazy(() => module)
}

const BurgerBuilder = lazy(import('@/containers/BurgerBuilder/BurgerBuilder'))
const Checkout = lazy(import('@/containers/Checkout/Checkout'))
const Orders = lazy(import('@/containers/Orders/Orders'))
const SignUp = lazy(import('@/containers/SignUp/SignUp'))
const SignIn = lazy(import('@/containers/SignIn/SignIn'))
const SignOut = lazy(import('@/containers/SignOut/SignOut'))

function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<PrivateRoute path="/checkout">
								<Checkout />
							</PrivateRoute>
							<PrivateRoute path="/orders">
								<Orders />
							</PrivateRoute>
							<Route path="/sign-up" component={SignUp} />
							<Route path="/sign-in" component={SignIn} />
							<Route path="/sign-out" component={SignOut} />
							<Route path="/" component={BurgerBuilder} />
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

function PrivateRoute({ children, ...rest }) {
	const isAuthenticated = Cookies.get('token')

	function render() {
		if (isAuthenticated) return children

		return (
			<Redirect
				to={{
					pathname: '/sign-in',
					search: qs.stringify({
						redirectUrl: window.location.href,
					}),
				}}
			/>
		)
	}

	return <Route {...rest} render={render} />
}

export default App;
