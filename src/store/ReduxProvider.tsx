'use client'
import { Provider } from "react-redux"
import { globalStore } from './store'
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
       
    return (
        <Provider store={globalStore} >
            {children}
        </Provider>
    );
}