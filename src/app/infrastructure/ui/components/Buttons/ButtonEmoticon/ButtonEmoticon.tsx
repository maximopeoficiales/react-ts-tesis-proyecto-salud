import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
interface MyProps {
    icon?: IconProp
    size?: SizeProp
    white?: boolean
}
const ButtonEmoticon = ({ icon, size, white = false }: MyProps) => {
    return (
        <div className="flex flex-col items-center">
            {!white ?
                <>
                    <div className="h-12 w-12 bg-slate-100 rounded-full flex justify-center items-center hover:bg-slate-200 transition duration-500 ease-in-out">
                        <div>
                            <FontAwesomeIcon icon={icon ?? faHeart} size={size ?? "xl"} />
                        </div>
                    </div>
                    <span className="p-2 font-medium text-sm">9667</span>
                </> :
                <>
                    <div className="h-12 w-12 bg-transparent rounded-full flex justify-center items-center text-white ">
                        <div>
                            <FontAwesomeIcon icon={icon ?? faHeart} size={size ?? "2xl"} />
                        </div>
                    </div>
                    <span className="font-medium text-sm text-white ">9667</span>
                </>}
        </div>
    );
};

export default ButtonEmoticon;