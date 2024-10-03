'use client'
import { Dictionary } from "@/models/Dictionary";
import { Search } from "./Search"
import {  useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { Content } from "./Content";


export const InfoPage = () => {
    const [search, setSearch] = useState<string>("");
    const [dictionaries, setDictionaries] = useState<Dictionary[] | undefined>();
    const font = useAppSelector(({ fontReducer }) => fontReducer.font);
    
return (
        <main className={`mx-10 ${font}`}>
            <Search search={search} setSearch={setSearch} setDictionaries={setDictionaries} />
            {
                dictionaries ?
                    (<Content dictionaries={dictionaries} />)
                    :
                    ""
            }
        </main>
    )
}