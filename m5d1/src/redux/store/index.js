import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import favoritesReducer from '../reducers/favorites'
import jobsReducer from '../reducers/jobs'

import { persistReducer, persistStore } from 'redux-persist'

import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'


const composeFunctionThatAlwaysWorks =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    list: {
        favorites: [],
    },
    job: {
        offers: [],
        isError: false,
        isLoading: false,
    }
}

const bigReducer = combineReducers({
    list: favoritesReducer,
    job: jobsReducer
})

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [
        encryptTransform({
            // secretKey: 'secret-key',
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) =>
            {
                console.log(error)
            },
        }),
    ],
}

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const configureStore = createStore(
    persistedReducer,
    initialState,
    composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)