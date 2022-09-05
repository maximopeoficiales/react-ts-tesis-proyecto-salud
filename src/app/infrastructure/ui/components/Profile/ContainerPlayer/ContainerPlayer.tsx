interface MyProps {
}
const ContainerPlayer = ({ }: MyProps) => {
    return (
        <div style={{ height: '600px' }} className="w-96 bg-black  rounded-xl">
            <img src="https://c.tenor.com/WDItPohzeRQAAAAC/dbz.gif" alt="video-alt" className="h-full w-full rounded-xl" />
        </div>
    )
}
export default ContainerPlayer;
