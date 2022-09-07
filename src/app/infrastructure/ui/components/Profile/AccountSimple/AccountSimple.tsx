import ImageIcon from "../ImageIcon/ImageIcon";

interface MyProps {
}
const AccountSimple = ({ }: MyProps) => {
    return (
        <div className="p-2">
            <div className="flex justify-between items-center ">
                <ImageIcon online size="xs"/>
                <div className="m-4">
                    <p className=""><b>Dr Perez</b></p>
                    <p className="text-xs text-gray-600">Veterinario 🐱 🐶</p>
                </div>

            </div>
        </div>

    )
}
export default AccountSimple;
