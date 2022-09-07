import ButtonEmoticon from "@ui/components/Buttons/ButtonEmoticon/ButtonEmoticon";
import NavMobile from "@ui/components/Nav/NavMobile/NavMobile";
import AccountSimple from "@ui/components/Profile/AccountSimple/AccountSimple";
import ContainerPlayer from "@ui/components/Profile/ContainerPlayer/ContainerPlayer";
import ImageIcon from "@ui/components/Profile/ImageIcon/ImageIcon";
import ModalImageIcon from "@ui/components/Profile/ModalImageIcon/ModalImageIcon";
import TrendTag from "@ui/components/Ramdom/TrendTag";
import { faMusic } from '@fortawesome/free-solid-svg-icons'

interface MyProps {
}
const TestIndex = ({ }: MyProps) => {
    return (
        <div>
            <h1 className="text-center text-lg font-bold my-4"> Componentes Varios</h1>

            <div className="p-4 w-full">
                <NavMobile />
            </div>
            <div className=" p-4 flex justify-center items-center">
                <div className="p-2 h-24 w-24 bg-black rounded-full">
                    <ButtonEmoticon white />
                </div>
            </div>
            <div className="p-4 justify-center items-center flex flex-col  gap-2 ">
                <TrendTag />
                <TrendTag icon={faMusic} text="Soda Stereo" />
            </div>
            <div className="p-4 flex justify-center">
                <AccountSimple online isVerified/>
            </div>
            <div className="p-4 flex justify-center">
                <AccountSimple />
            </div>
            <div className="p-4 flex justify-center">
                <ModalImageIcon />
            </div>
            <div className="p-4 flex justify-center">
                <ContainerPlayer />
            </div>
            <div className="p-4 flex justify-center">
                <ButtonEmoticon />
            </div>
            <div className="p-4 flex justify-center">
                <ImageIcon online={true} />
            </div>
            <div className="p-4 flex justify-center">
                <ImageIcon />
            </div>

        </div>
    )
}
export default TestIndex;
