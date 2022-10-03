export const getAllJobsReducer = (state={job : []}, action)=>{

    switch (action.type) {
        case 'GET_JOBS_REQUEST': return{
            ...state
        }
        case 'GET_JOBS_SUCCESS': return{
            job : action.payload
        }
        case 'GET_JOBS_FAILED': return{
            error: action.payload
        }
    
        default:
            return state;
    }
}