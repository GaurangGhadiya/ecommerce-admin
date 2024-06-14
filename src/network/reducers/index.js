import { combineReducers } from 'redux'
import getCode from './getCode'
import addCategory from './addCategory'
import getCategory from './getCategory'

const rootReducer = combineReducers({
  getCode,
  addCategory,
  getCategory
})

export default rootReducer
