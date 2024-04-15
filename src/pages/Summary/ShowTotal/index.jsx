import propTypes from "prop-types";

const ShowTotal = ({ billingTypePlan, total }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <p className="text-gray-400 font-medium">Total (per month)</p>
      <span className="text-blue-600 font-bold">
        {billingTypePlan === "month" ? `+$${total}/mo` : `+$${total}/yr`}
      </span>
    </div>
  );
};

export default ShowTotal;

ShowTotal.propTypes = {
  billingTypePlan: propTypes.string,
  total: propTypes.number,
};
