import propTypes from "prop-types";
import iconCheckmark from "../../../assets/images/icon-checkmark.svg";
const SelectPagePlanAdd = ({
  addPagePlans,
  handleClickSelectedPlans,
  selectedPlans,
  userPlanData,
}) => {
  return (
    <>
      {addPagePlans.map(({ id, type, description, month, year }) => (
        <button
          onClick={() => handleClickSelectedPlans(id)}
          key={id}
          className={`flex p-3 border border-gray-400 rounded-lg  items-center justify-between md:p-4 ${
            selectedPlans.includes(id) && "border-gray-950 bg-blue-50"
          }`}
        >
          <div className=" w-7 h-5 mr-4 md:w-5 md:h-4 ">
            <img
              src={iconCheckmark}
              alt=""
              className={`w-full h-full p-1   rounded-sm ${
                selectedPlans.includes(id) ? "bg-blue-600" : "border-2"
              }`}
            />
          </div>
          <div className="flex flex-col  w-full  items-start ">
            <span className="text-blue-950 text-sm font-bold">{type}</span>
            <span className="text-gray-400 font-normal  text-[12px]">
              {description}
            </span>
          </div>
          <span className="text-blue-800 opacity-70  font-medium  text-[12px]">
            {userPlanData.billingTypePlan === "year"
              ? `+$${year}/yr`
              : `+$${month}/mo`}
          </span>
        </button>
      ))}
    </>
  );
};

export default SelectPagePlanAdd;

SelectPagePlanAdd.propTypes = {
  addPagePlans: propTypes.array,
  handleClickSelectedPlans: propTypes.func,
  selectedPlans: propTypes.array,
  userPlanData: propTypes.object,
};
