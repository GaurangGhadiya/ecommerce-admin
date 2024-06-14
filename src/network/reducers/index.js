import { combineReducers } from 'redux'
import getCode from './getCode'
import addCategory from './addCategory'
import getCategory from './getCategory'
import getCategoryList from './getCategoryList'
import addSubCategory from './addSubCategory'
import getSubCategory from './getSubCategory'

const rootReducer = combineReducers({
  getCode,
  addCategory,
  getCategory,
  getCategoryList,
  addSubCategory,
  getSubCategory
})

export default rootReducer
