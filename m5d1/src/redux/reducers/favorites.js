import { ADD_TO_FAVS } from '../actions'
import { REMOVE_FROM_FAVS } from '../actions'
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

        case REMOVE_FROM_FAVS:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (company) => company !== action.payload
                ),
            }

        default:
            return state
    }
}

export default favoritesReducer