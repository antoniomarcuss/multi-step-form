import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { planInformation } from "./components/planInformation";
import { NavigationButtons } from "../../components/NavigateButtons";

const Plan = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(planInformation[0].id);
  const [changeBillingType, setChangeBillingType] = useState(false);

  const handleClickSelectedPlan = (id) => setSelectedPlan(id);

  const handleClickPlan = () => setChangeBillingType(!changeBillingType);

  const selectedPageButton = (page) => {
    if (page === "/add") {
      const plan = planInformation.find((plan) => plan.id === selectedPlan);

      const planPageDetails = {
        billingTypePlan: changeBillingType ? "year" : "month",
        selectedPlan: plan,
      };

      localStorage.setItem("planPageDetails", JSON.stringify(planPageDetails));
      console.log(planPageDetails);
    }

    navigate(page);
  };

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]   md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6      ">
          <h1 className="text-2xl md:text-4xl text-blue-950 font-bold pb-4 md:pb-1">
            Select Your plan
          </h1>
          <p className="text-gray-400 font-medium  w-full  pb-4 md:pb-8">
            You have the option of monthly or yearly billing.
          </p>
          <div className="  flex flex-col     gap-4 md:gap-8">
            <div className=" flex flex-col md:flex-row gap-4   md:justify-between ">
              {planInformation.map(({ id, icons, mode, month, year }) => (
                <button
                  key={id}
                  className={`border border-gray-400 p-3  rounded-lg items-center  flex gap-2 md:flex-col  md:items-start md:justify-between md:w-32 md:hover:bg-blue-50 transition-all duration-300     ${
                    selectedPlan === id && "border-gray-950 bg-blue-50"
                  } ${
                    changeBillingType ? " md:h-40 h-20 " : " h-[70px]  md:h-36"
                  }  `}
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
                      <span className="text-blue-950   text-sm">
                        2 months free
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

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
            <NavigationButtons
              selectedPageButton={selectedPageButton}
              nextPage="/add"
              goBack="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
