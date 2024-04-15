import { useContext, useEffect, useState } from "react";
import { NavigationButtons } from "../../components/NavigateButtons";

import { useNavigate } from "react-router-dom";
import { PlanContext } from "../../context/PlanContext";
const Summary = () => {
  const [total, setTotal] = useState(null);

  const selectedPageButton = (page) => navigate(page);
  const { userPlanData } = useContext(PlanContext);

  const { selectedPlan, billingTypePlan, addOns } = userPlanData;

  const monthlyPlanPrice = Number(selectedPlan.month);
  const annualPlanValue = Number(selectedPlan.year);
  const calculateTotal = () => {
    const planValueAddPage = addOns.reduce((acc, plan) => {
      return (
        acc +
        (billingTypePlan === "year" ? Number(plan.year) : Number(plan.month))
      );
    }, 0);

    const total =
      billingTypePlan === "year"
        ? annualPlanValue + planValueAddPage
        : monthlyPlanPrice + planValueAddPage;
    setTotal(total);
  };

  const navigate = useNavigate();

  const changePageButton = () => navigate("/plan");

  useEffect(() => {
    calculateTotal();
  }, [total]);

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6 ">
          <h1 className="text-2xl md:text-4xl text-blue-950 font-bold  pb-4 md:pb-1">
            Finishing up
          </h1>
          <p className="text-gray-400 font-medium  w-full  pb-4 md:pb-8">
            Double-check everything looks OK before confirming
          </p>
          <div className="flex flex-col gap-4  bg-blue-50  md:justify-evenly rounded-lg ">
            <div className="flex flex-col  p-4  ">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="text-blue-900 font-bold">
                    {selectedPlan.mode}
                  </span>
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
                      billingTypePlan === "year"
                        ? `+$${year}/yr`
                        : `+$${month}/mo`
                    }`}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center bg-white p-4">
              <p className="text-gray-400 font-medium">Total (per month)</p>
              <span className="text-blue-600 font-bold">
                {billingTypePlan === "month"
                  ? `+$${total}/mo`
                  : `+$${total}/yr`}
              </span>
            </div>
            <NavigationButtons
              selectedPageButton={selectedPageButton}
              nextPage="/end"
              goBack="/add"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
