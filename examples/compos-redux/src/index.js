import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'

const store = configureStore()
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(<Root />, document.getElementById('root'))