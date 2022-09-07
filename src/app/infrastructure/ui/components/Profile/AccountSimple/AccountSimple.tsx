import Verificated from "@ui/components/Ramdom/Verificated";
import ImageIcon from "../ImageIcon/ImageIcon";


interface MyProps {
    isVerified?: boolean;
    online?: boolean;
}
const AccountSimple = ({ isVerified = false, online = false }: MyProps) => {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center ">
                <ImageIcon online={online} size="xs" />
                <div className="m-4">
                    <p className="font-bold">Dr Perez
                        {isVerified && <Verificated />}
                    </p>
                    <p className="text-xs text-gray-600">Veterinario 🐱 🐶</p>
                </div>

            </div >
        </div >

    )
}
export default AccountSimple;
