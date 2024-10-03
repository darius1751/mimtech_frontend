import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


// Define a type for the slice state
export interface ThemeState {
    theme: 'light' | 'dark' ,
}

// Define the initial state using that type
const initialState: ThemeState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toogleTheme: (state, action: PayloadAction<ThemeState>) => {
            const { theme } = action.payload;            
            state.theme = (theme === "light" ? "dark" : "light");
        }
    },
})

export const { toogleTheme } = themeSlice.actions

// // Other code such as selectors can use the imported `RootState` type
export const selectGlobals = (state: RootState) => state.themeReducer.theme;

export default themeSlice.reducer