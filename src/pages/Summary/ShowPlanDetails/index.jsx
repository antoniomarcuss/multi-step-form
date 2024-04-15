import propTypes from "prop-types";

const ShowPlanDetails = ({
  selectedPlan,
  billingTypePlan,
  changePageButton,
  addOns,
}) => {
  return (
    <div className="flex flex-col  p-4  ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="text-blue-900 font-bold">{selectedPlan.mode}</span>
          <span className="text-blue-900 font-bold">
            {billingTypePlan === "year" ? "(Per annum)" : "(Monthly) "}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={changePageButton}
          className="text-gray-400  font-medium w-fit hover:text-blue-500"
        >
          <u>Change</u>
        </button>
        <span className="text-blue-900 font-bold">
          {billingTypePlan === "year"
            ? `$${selectedPlan.year}/yr`
            : `$${selectedPlan.month}/mo`}
        </span>
      </div>
      <hr className="mt-4" />
      {addOns.map(({ id, type, month, year }) => (
        <div key={id}>
          <div className="flex justify-between  py-2">
            <span className="text-gray-400 font-medium">{type}</span>
            <span className=" text-blue-950 font-medium">{`${
              billingTypePlan === "year" ? `+$${year}/yr` : `+$${month}/mo`
            }`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPlanDetails;

ShowPlanDetails.propTypes = {
  selectedPlan: propTypes.object,
  billingTypePlan: propTypes.string,
  changePageButton: propTypes.func,
  addOns: propTypes.array,
};
