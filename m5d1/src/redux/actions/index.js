export const ADD_TO_FAVS = 'ADD_TO_FAVS'

export const addToFavsAction = (company) => ({
    type: ADD_TO_FAVS,
    payload: company,
})