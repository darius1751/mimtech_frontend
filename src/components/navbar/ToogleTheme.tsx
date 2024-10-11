'use client'

import { ChangeEvent } from "react"
import { LightIcon } from "../icons/LigthIcon";
import { DarkIcon } from "../icons/DarkIcon";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { toogleTheme } from "@/store/theme-reducer";

export const ToogleTheme = () => {
    const theme = useAppSelector(({ themeReducer }) => themeReducer.theme);
    const dispatch = useDispatch();
    const toogleThemeForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newTheme = value as "dark" | "light";
        dispatch(toogleTheme({ theme: newTheme }));
    }
    return (
        <div className="ml-4 border-l-2 pl-3 border-gray-500">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value={theme} className="sr-only peer" onChange={toogleThemeForm} checked={theme === "dark"} />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {
                        theme === "light" ? (<LightIcon />) : (<DarkIcon />)
                    }
                </span>
            </label>
            {/* Sun */}

        </div>
    )
}