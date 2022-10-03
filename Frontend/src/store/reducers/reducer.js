const initialState = {
  Courses: [],
  PreferenceCourse:[],
};

export const reducer = (state = initialState, action) => {
 

  switch (action.type) {
    case "FETCH_ALL_DATA":
      return {
        ...state,
        Courses: action.data,
      };

      case "FETCH_PREFERENCE_DATA":
      return {
        ...state,
        PreferenceCourse: action.data,
      };

      case "ADD_COURSE_TO_STORE":
        state.Courses.push(action.data)
        return {
          ...state,
          // Courses: Course
        }

      case "REMOVE_COURSE_FROM_STORE":

          return {...state,
            Courses:state.Courses.filter(course=>
                course._id!==action.data
            )
        }

      case "EDIT_COURSE_FROM_STORE":

      const updated_course = [...state.Courses];
      const updated_course_len = updated_course.length;

      for(var i=0;i<updated_course_len;i++){
        if(updated_course[i]._id == action.data._id){
          updated_course[i]=action.data;
        }
      }

        return {...state,
          Courses:updated_course
      }

    default:
      return state;
  }
};

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

// export default {reducer, getAllJobsReducer};
