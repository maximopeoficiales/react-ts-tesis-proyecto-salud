import { faHome, faPlus, faSearch, faUserDoctor, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface IconNavProps {
    icon: IconProp;
    size: SizeProp;
    black?: boolean;
}

export const IconNav = ({ icon, size, black = false }: IconNavProps) => {
    return (
        <div className={"bg-transparent flex justify-center items-center  transition duration-700 ease-in-out " + (black ? "text-black" : "text-gray-300 hover:text-white")}>
            <FontAwesomeIcon icon={icon} size={size} />
        </div>
    )
}


interface MyProps {
}
const NavMobile = ({ }: MyProps) => {
    return (
        <div className="p-2 h-24 w-full bg-black  grid grid-cols-5 gap-4 justify-items-center items-center rounded-3xl">
            <IconNav icon={faHome} size={"xl"} />
            <IconNav icon={faSearch} size={"xl"} />

            <div className="bg-white w-14 rounded-3xl p-1 border-2 border-solid hover:bg-gray-200 transition duration-500 ease-in-out">
                <IconNav icon={faPlus} size={"lg"} black />
            </div>


            <IconNav icon={faUserDoctor} size={"xl"} />
            <IconNav icon={faUser} size={"xl"} />
        </div>
    )
}
export default NavMobile;
