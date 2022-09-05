import { Button } from "flowbite-react";
import ImageIcon from "../ImageIcon/ImageIcon";

interface MyProps {
}
const ModalImageIcon = ({ }: MyProps) => {
    return (
        <article className="h-56 w-80 shadow-lg">
            <div className="p-4">
                <div className="flex justify-between items-center ">
                    <ImageIcon online />
                    <Button outline={true} gradientDuoTone="pinkToOrange">Contactar</Button>
                </div>
                <div className="my-2">
                    <p className=""><b>Dr Perez</b></p>
                    <p className="text-xs font-semibold">Veterinario 🐱 🐶</p>
                </div>
                <div className="grid grid-cols-2 gap-5 my-1 text-sm">
                    <p><b>2717</b><span className="capitalize mx-2">Pacientes</span></p>
                    <p><b>53.3k</b><span className="capitalize mx-2">Contactos</span></p>
                </div>
                <hr className="my-2" />
                <p className="text-sm">Follow your Dream 🍷 </p>
            </div>

        </article>
    )
}
export default ModalImageIcon;
