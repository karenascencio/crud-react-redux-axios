import { combineReducers } from 'redux'
import productsReducers from './productsReducers'

export default combineReducers({
  products: productsReducers
})