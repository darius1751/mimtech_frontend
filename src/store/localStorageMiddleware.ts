import { Dispatch, PayloadAction } from "@reduxjs/toolkit"

export const localStorageMiddleware = (): any => {
    return (next: Dispatch) => (action: PayloadAction<History[] | any | undefined>) => {
        const { payload, type } = action;

        if (type.includes("getHistory")) {
            action.payload = JSON.parse(localStorage.getItem("history") || "[]");
        }
        if (type.includes("addInHistory")) {
            const history = JSON.parse(localStorage.getItem("history") || "[]")
            history.push(payload![0]);
            localStorage.setItem("history", JSON.stringify(history));
            action.payload = history;
        }
        return next(action);
    }
}