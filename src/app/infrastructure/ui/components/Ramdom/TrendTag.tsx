import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface MyProps {
    text?: string;
    icon?: IconProp

}
const TrendTag = ({ icon, text }: MyProps) => {
    return (
        <span className=" px-2 py-1 rounded-3xl border inline-flex  items-center text-sm gap-1">
            <FontAwesomeIcon icon={icon ?? faHashtag} size={"sm"} className="mx-1" />
            <p className="text-gray-500">{text ?? "Sin Valor"}</p>
        </span>
    )
}
export default TrendTag;
