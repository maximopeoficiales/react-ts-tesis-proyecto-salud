import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface MyProps {
    icon?: IconProp
    size?: SizeProp
}
const ButtonEmoticon = ({ icon, size }: MyProps) => {
    return (
        <div className="flex flex-col">
            <div data-testid="ButtonEmoticon" className="h-12 w-12 bg-slate-100 rounded-full flex justify-center items-center hover:bg-slate-200 transition duration-500 ease-in-out">
                <div>
                    <FontAwesomeIcon icon={icon ?? faHeart} size={size ?? "xl"} />
                </div>
            </div>
            <span className="p-2 font-medium text-sm">9667</span>
        </div>
    );
};

export default ButtonEmoticon;