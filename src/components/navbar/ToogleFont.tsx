'use client'

import { changeFont } from "@/store/font-reducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { ChangeEvent } from "react";

export const ToogleFont = () => {
    const font = useAppSelector(({ fontReducer }) => fontReducer.font);
    const dispatch = useAppDispatch();
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        dispatch(changeFont({ font: value }));
    }
    return (
        <select name="font" className="text-black border-0 bg-background text-foreground" defaultValue={font} onChange={handleChange}>
            <option value="font-serif">Serif</option>
            <option value="font-sans">Sans serif</option>
            <option value="font-mono">Monospace</option>
        </select>
    )
}