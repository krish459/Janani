import { combineReducers } from 'redux'
import { getAllJobsReducer } from './jobReducer'
import reducer from './reducer'

export default combineReducers({
    getAllJobsReducer,
    reducer
})