import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export interface FontState {
    font: 'font-serif' | 'font-sans' | 'font-mono' | string,
}

// Define the initial state using that type
const initialState: FontState = {
    font: 'font-serif'
}

export const themeSlice = createSlice({
    name: 'font',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeFont: (state, action: PayloadAction<FontState>) => {
            state.font = action.payload.font;
        }

    },
})

export const { changeFont } = themeSlice.actions

// // Other code such as selectors can use the imported `RootState` type
export const selectGlobals = (state: RootState) => state.fontReducer.font;

export default themeSlice.reducer