import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from '@/store/index'
import Layout from '@/components/Layout/Layout'

function lazy(module) {
  return React.lazy(() => module)
}

const BurgerBuilder = lazy(import('@/containers/BurgerBuilder/BurgerBuilder'))
const Checkout = lazy(import('@/containers/Checkout/Checkout'))
const Orders = lazy(import('@/containers/Orders/Orders'))
const SignUp = lazy(import('@/containers/SignUp/SignUp'))

function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route path="/checkout" component={Checkout} />
							<Route path="/orders" component={Orders} />
							<Route path="/sign-up" component={SignUp} />
							<Route path="/" component={BurgerBuilder} />
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
