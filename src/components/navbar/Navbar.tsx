import { BookIcon } from "../icons/BookIcon"
import { ToogleTheme } from "./ToogleTheme"
import { ToogleFont } from "./ToogleFont"
export const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <BookIcon />
            <div className="flex">
                <ToogleFont />
                <ToogleTheme />
            </div>
        </nav>
    )
}