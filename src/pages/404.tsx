import "@assets/style/404.css";

interface MyProps {}
const Page404 = ({}: MyProps) => {
  return (
    <div className=" flex h-screen justify-center items-center w-screen">
      <div className="site text-center">
        <div className="sketch">
          <div className="bee-sketch red"></div>
          <div className="bee-sketch blue"></div>
        </div>
        <h1 className="text-6xl mb-5">
          404:
          <small>Page Not Found</small>
        </h1>
      </div>
    </div>
  );
};
export default Page404;
