import { ADD_TO_FAVS } from '../actions'
import { initialState } from '../store'

const favoritesReducer = (state = initialState.list, action) =>
{
    switch (action.type)
    {
        case ADD_TO_FAVS:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}

export default favoritesReducer