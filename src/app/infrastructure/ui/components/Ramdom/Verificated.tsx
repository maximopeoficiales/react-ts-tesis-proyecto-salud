import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Verificated = () => {
    return (
        <span className="text-white bg-sky-400  rounded-full ml-2 " 
        style={{
                paddingLeft:"0.2rem",
                paddingRight:"0.2rem",
            }} >
            <FontAwesomeIcon icon={faCheck} size={"xs"} className="" />
        </span>
    )
}
export default Verificated;
