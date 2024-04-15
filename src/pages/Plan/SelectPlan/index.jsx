import propTypes from "prop-types";

const SelectPlan = ({
  planInformation,
  selectedPlan,
  changeBillingType,
  handleClickSelectedPlan,
}) => {
  return (
    <div className=" flex flex-col md:flex-row gap-4   md:justify-between ">
      {planInformation.map(({ id, icons, mode, month, year }) => (
        <button
          key={id}
          className={`border border-gray-400 p-3  rounded-lg items-center  flex gap-2 md:flex-col  md:items-start md:justify-between md:w-32 md:hover:bg-blue-50 transition-all duration-300     ${
            selectedPlan === id && "border-gray-950 bg-blue-50"
          } ${changeBillingType ? " md:h-40 h-20 " : " h-[70px]  md:h-36"}  `}
          onClick={() => handleClickSelectedPlan(id)}
        >
          <div>
            <img src={icons} alt="icons" />
          </div>
          <div className="flex flex-col  items-start">
            <span className="text-blue-900 font-bold">{mode}</span>
            <span className="text-gray-400  font-medium">
              {changeBillingType ? `$${year}/yr` : `$${month}/mo`}
            </span>

            {changeBillingType && (
              <span className="text-blue-950   text-sm">2 months free</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SelectPlan;

SelectPlan.propTypes = {
  planInformation: propTypes.array,
  selectedPlan: propTypes.number,
  changeBillingType: propTypes.bool,
  handleClickSelectedPlan: propTypes.func,
};
