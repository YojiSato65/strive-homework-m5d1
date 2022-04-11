export const ADD_TO_FAVS = 'ADD_TO_FAVS'
export const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'
export const GET_JOBS_LOADING = 'GET_JOBS_LOADING'

export const addToFavsAction = (company) => ({
    type: ADD_TO_FAVS,
    payload: company,
})

export const removeFromFavsAction = (company) => ({
    type: REMOVE_FROM_FAVS,
    payload: company,
})

export const getJobsErrorAction = () =>
({
    type: GET_JOBS_ERROR
})

export const getJobsLoadingAction = (v) =>
({
    type: GET_JOBS_LOADING,
    // asign the payload so that i can manually pass the argument
    payload: v
})

export const getJobsAction = (searchQuery) =>
{
    return async (dispatch, getState) =>
    {
        try
        {
            // dispatch a LOADING with payload true
            dispatch(getJobsLoadingAction(true))

            const response = await fetch(
                `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=20`,
            )
            if (response.ok)
            {
                const data = await response.json()
                console.log(data.data)
                dispatch({
                    type: GET_JOBS,
                    payload: data.data,
                })

            } else
            {
                // throw new error takes to 'catch' (axios does it automatically)
                throw new Error('Response not ok. Status code: ' + response.status)
            }
        } catch (error)
        {
            console.log(error.message)
            dispatch(getJobsErrorAction())

        } finally
        {
            // this code will be ALWAYS executed, no matter if error or not

            // dispatch LOADING with payload false
            dispatch(getJobsLoadingAction(false))
        }
    }
}