import { ADD_TO_FAVS } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case ADD_TO_FAVS:
            return {
                ...state,
                list: {
                    ...state.list,
                    favorites: [...state.list.favorites, action.payload]
                }
            }

        default:
            return state
    }
}

export default mainReducer