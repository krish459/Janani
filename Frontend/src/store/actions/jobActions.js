import axios from "axios";
import Url from "../../ApiServices/BackendUrl";

export const getAllJobs = ()=>async (dispatch)=>{

    dispatch({type: 'GET_JOBS_REQUEST'})

    try {
        const response = await axios.get('/jobs/all')
        console.log("action",response);
        dispatch({type: 'GET_JOBS_SUCCESS', payload : response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: 'GET_JOBS_FAILED', payload : error})
    }


}