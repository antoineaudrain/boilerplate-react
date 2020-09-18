import React from 'react'
import PropTypes from 'prop-types'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import user from './reducers/user'

const rootReducer = combineReducers({
  user
})
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer())
)

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default StoreProvider
