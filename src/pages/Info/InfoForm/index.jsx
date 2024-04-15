import { NavigationButtons } from "../../../components/NavigateButtons";
import useInfoFormViewModel from "../useInfoFormViewModel";

const InfoForm = () => {
  const { errors, register, handleSubmit, handleOnSubmit } =
    useInfoFormViewModel();
  return (
    <form
      className="flex flex-col gap-4    "
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <label className="flex flex-col w-full  ">
        <div className=" flex justify-between item-ce items-center">
          <span className="text-blue-900 font-medium">Name</span>
          <span className="text-red-500 text-sm font-medium    ">
            {errors.name?.message}
          </span>
        </div>
        <input
          type="text"
          autoFocus
          maxLength={30}
          placeholder="e.g.Stephen King"
          className={`border border-gray-300 mt-1  p-2 rounded-md outline-none ${
            errors.name && "border-red-500"
          } `}
          {...register("name")}
        />
      </label>

      <label className="flex flex-col">
        <div className=" flex justify-between items-center">
          <span className="text-blue-900 font-medium">Email</span>
          <span className="text-red-500 text-sm font-medium   ">
            {errors.email?.message}
          </span>
        </div>
        <input
          type="text"
          maxLength={30}
          placeholder="e.g.stephenking@lorem.com"
          className={`border border-gray-300 mt-1  p-2 rounded-md outline-none ${
            errors.email && "border-red-500"
          } `}
          {...register("email")}
        />
      </label>
      <label className="flex flex-col ">
        <div className=" flex justify-between items-center">
          <span className="text-blue-900 font-medium">Phone Number</span>
          <span className="text-red-500 text-sm font-medium   ">
            {errors.phone?.message}
          </span>
        </div>
        <input
          type="text"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          maxLength={11}
          placeholder="e.g. +1 234 567 890"
          className={`border border-gray-300 mt-1  p-2 rounded-md outline-none ${
            errors.phone && "border-red-500"
          } `}
          {...register("phone")}
        />
      </label>
      <NavigationButtons selectedPageButton={handleSubmit} nextPage="/plan" />
    </form>
  );
};

export default InfoForm;
