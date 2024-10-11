import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export interface History {
    word: string;
    date: string;
}
export interface HistoryState {
    history: History[],
}

// Define the initial state using that type
const initialState: HistoryState = {
    history: []
};

export const historySlice = createSlice({
    name: 'history',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        getHistory: (state, action: PayloadAction<History[] | undefined>) => {
            state.history = action.payload ?? [];
        },
        addInHistory: (state, action: PayloadAction<History[]>) => {
            state.history = action.payload;
        }
    },
})

export const { getHistory, addInHistory } = historySlice.actions

// // Other code such as selectors can use the imported `RootState` type
export const selectGlobals = (state: RootState) => state.historyReducer;

export default historySlice.reducer