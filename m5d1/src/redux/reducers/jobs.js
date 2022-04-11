import { GET_JOBS } from '../actions'
import { GET_JOBS_ERROR } from '../actions'
import { GET_JOBS_LOADING } from '../actions'
import { initialState } from '../store'

const jobsReducer = (state = initialState.job, action) =>
{
    switch (action.type)
    {
        case GET_JOBS:
            return {
                ...state,
                offers: action.payload,
            }

        case GET_JOBS_ERROR:
            return {
                ...state,
                isError: true,
            }

        case GET_JOBS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state
    }
}

export default jobsReducer