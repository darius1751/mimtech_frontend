import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import { SearchIcon } from "../icons/SearchIcon";
import { Dictionary } from "@/models/Dictionary.model";
import { useAppDispatch } from "@/store/hooks";
import { addInHistory } from "@/store/history-reducer";

type SearchProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    setDictionaries: Dispatch<SetStateAction<Dictionary[] | undefined>>;
}
export const Search = ({ search, setSearch, setDictionaries }: SearchProps) => {
    const dispatch = useAppDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLDivElement>) => {
        e.preventDefault();
        if (/^[A-Za-z]{1,}$/.test(search.trim())) {
            const response = (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.trim()}`, { next: { revalidate: 60 } }));
            const dictionaries: Dictionary[] = await response.json();
            setDictionaries(dictionaries);
            dispatch(addInHistory([{ word: search, date: new Date().toJSON() }]));
        } else {
            console.log("Error");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="relative mt-2">
                <input
                    type="text"
                    id="default-search"
                    onChange={handleChange}
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
                <div className="absolute inset-y-0 flex items-center -ps-3  pointer-events-none right-6 cursor-pointer" onClick={handleSubmit}>
                    <SearchIcon />
                </div>
            </div>
        </form>

    )
}