import "./ImageIcon.css";
interface MyProps {
    status?: 'online' | 'offline'
}
const ImageIcon = ({ status = 'offline' }: MyProps) => {
    const isOnline = status === 'online';

    return (
        <div data-testid="ButtonEmoticon" className={`h-16 w-16 bg-black rounded-full border-2 relative ${isOnline ? "border-emerald-500" : ""}`}>
            <div className={`image-icon ${isOnline ? "bg-emerald-500" : ""}`}>
                {isOnline && <span className="uppercase">{status}</span>}
            </div>
        </div>
    )
}
export default ImageIcon;
