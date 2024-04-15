import propTypes from "prop-types";

const ToggleBillingButton = ({
  handleClickPlan,
  changeBillingType,
  setChangeBillingType,
}) => {
  return (
    <button
      onClick={handleClickPlan}
      className="bg-blue-50 flex  justify-center border p-3 rounded-lg items-center   gap-6"
    >
      <span
        className={`  font-bold ${
          changeBillingType ? "text-gray-400" : "text-blue-950"
        }`}
      >
        Monthly
      </span>
      <input
        type="checkbox"
        checked={changeBillingType}
        onChange={() => {
          setChangeBillingType(!changeBillingType);
        }}
        className="toggle [--tglbg:black] bg-white hover:bg-white border-blue-500 "
      />
      <span
        className={` font-bold ${
          changeBillingType ? "text-blue-950" : "text-gray-400"
        }`}
      >
        Yearly
      </span>
    </button>
  );
};

export default ToggleBillingButton;

ToggleBillingButton.propTypes = {
  handleClickPlan: propTypes.func,
  changeBillingType: propTypes.bool,
  setChangeBillingType: propTypes.func,
};
