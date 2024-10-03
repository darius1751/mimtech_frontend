import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit"


export const localStorageMiddleware = (state: MiddlewareAPI): any => {
    return (next: Dispatch) => (action: PayloadAction<any>) => {
        const { payload, type } = action;

        if (type.includes("getHistory")) {
            action.payload = JSON.parse(localStorage.getItem("history") || "[]");
        }
        if (type.includes("addInHistory")) {
            const history = JSON.parse(localStorage.getItem("history") || "[]")
            history.push(payload);
            localStorage.setItem("history", JSON.stringify(history));
            action.payload = history;
        }

        return next(action);
    }
}