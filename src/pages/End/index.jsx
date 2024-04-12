import iconThank from "../../assets/images/icon-thank-you.svg";
const End = () => {
  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="flex flex-col gap-4 pt-16 items-center  h-96   md:justify-center md:h-full md:pt-0">
          <div>
            <img src={iconThank} alt="" />
          </div>
          <p className="text-2xl text-blue-950 font-bold">Thank you!</p>
          <div className=" flex justify-center flex-col items-center text-gray-400 font-medium     text-center">
            <p className="max-w-[310px]  w-full md:w-full">
              Thanks for confirming your subscription!
            </p>
            <p className="max-w-[300px]  w-full md:max-w-full">
              We hope you have fun using our platform. If you ever need support,
              please free to email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
