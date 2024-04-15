import iconThank from "../../../assets/images/icon-thank-you.svg";
const EndPage = () => {
  return (
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
  );
};

export default EndPage;
