import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import favoritesReducer from '../reducers/favorites'
import jobsReducer from '../reducers/jobs'

const composeFunctionThatAlwaysWorks =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    list: {
        favorites: [],
        isAdded: null
    },
    job: {
        offers: [],
    }
}

const bigReducer = combineReducers({
    list: favoritesReducer,
    job: jobsReducer
})

const configureStore = createStore(
    bigReducer,
    initialState,
    composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore