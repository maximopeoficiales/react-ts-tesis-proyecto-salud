import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import "./ImageIcon.css";
interface MyProps {
    online?: boolean;
    size?: SizeProp
}
const ImageIcon = ({ online = false, size = "1x" }: MyProps) => {
    let sizeClass = "h-16 w-16";
    if (size == "sm") {
        sizeClass = "h-14 w-14"
    }
    if (size == "xs") {
        sizeClass = "h-12 w-12"
    }
    return (
        <div data-testid="ButtonEmoticon" className={sizeClass + ` bg-black rounded-full border-2   relative ${online ? "border-emerald-500" : ""}`}>
            <div className={`image-icon ${online ? "bg-emerald-500" : ""}`}>
                {online && <span className="uppercase">online</span>}
            </div>
        </div>
    )
}
export default ImageIcon;
