export const ADD_TO_FAVS = 'ADD_TO_FAVS'
export const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS'
export const GET_JOBS = 'GET_JOBS'

export const addToFavsAction = (company) => ({
    type: ADD_TO_FAVS,
    payload: company,
})

export const removeFromFavsAction = (company) => ({
    type: REMOVE_FROM_FAVS,
    payload: company,
})

export const getJobsAction = (searchQuery) =>
{
    return async (dispatch, getState) =>
    {
        try
        {
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
            }
            else
            {
                console.log('error')
            }
        } catch (error)
        {
            console.log(error)
        }
    }
}