import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme-reducer'
import fontReducer from './font-reducer'
import { localStorageMiddleware } from './localStorageMiddleware'
import historyReducer from './history-reducer'


export const globalStore = configureStore({
    reducer: {
        themeReducer,
        fontReducer,
        historyReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch
