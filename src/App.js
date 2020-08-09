import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'

function lazy(module) {
  return React.lazy(() => module)
}

const BurgerBuilder = lazy(import('@/containers/BurgerBuilder/BurgerBuilder'))
const Checkout = lazy(import('@/containers/Checkout/Checkout'))
const Orders = lazy(import('@/containers/Orders/Orders'))

function App() {
  return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route path="/checkout" component={Checkout} />
						<Route path="/orders" component={Orders} />
						<Route path="/" component={BurgerBuilder} />
					</Switch>
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}

export default App;
