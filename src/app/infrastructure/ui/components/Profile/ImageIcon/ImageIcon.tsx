import "./ImageIcon.css";
interface MyProps {
    online?: boolean;
}
const ImageIcon = ({ online = false }: MyProps) => {
    

    return (
        <div data-testid="ButtonEmoticon" className={`h-16 w-16 bg-black rounded-full border-2 relative ${online ? "border-emerald-500" : ""}`}>
            <div className={`image-icon ${online ? "bg-emerald-500" : ""}`}>
                {online && <span className="uppercase">online</span>}
            </div>
        </div>
    )
}
export default ImageIcon;
