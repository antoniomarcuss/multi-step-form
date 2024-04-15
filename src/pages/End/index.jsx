import EndPage from "./EndPage";

const End = () => {
  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <EndPage />
      </div>
    </div>
  );
};

export default End;
