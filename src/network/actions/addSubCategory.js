import toast from 'react-hot-toast'
import { ADD_SUB_CATEGORY_SUCCESS, ADD_SUB_CATEGORY_FALIURE } from '../action_types'

import { ApiGetNoAuth, ApiPostNoAuth } from '../apiData'

// Action Creators

export const addSubCategorySuccess = data => ({
  type: ADD_SUB_CATEGORY_SUCCESS,

  payload: data
})

export const addSubCategoryFaliure = error => ({
  type: ADD_SUB_CATEGORY_FALIURE,

  payload: error
})

// Async Action to Fetch Data

export const addSubCategory = (body, extra) => {
  return async dispatch => {
    try {
      const response = await ApiPostNoAuth(`/product/add-sub-category`, body)
      console.log('response: ', response)
      toast.success(response?.message)
      extra()
      dispatch(addSubCategorySuccess(response))
    } catch (error) {
      console.log('response, errror')

      dispatch(addSubCategoryFaliure(error))
    }
  }
}
