import iconCheckmark from "../../assets/images/icon-checkmark.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPagePlans } from "./components/add/addPagePlans";
import { NavigationButtons } from "../../components/NavigateButtons";
import { PlanContext } from "../../context/PlanContext";
const Add = () => {
  const [selectedPlans, setSelectedPlans] = useState([addPagePlans[0].id]);
  const handleClickSelectedPlans = (id) => {
    if (selectedPlans.includes(id)) {
      const selected = selectedPlans.filter((planId) => planId !== id);
      setSelectedPlans(selected);
    } else {
      setSelectedPlans([...selectedPlans, id]);
    }
  };

  const { userPlanData, setUserPlanData } = useContext(PlanContext);

  const navigate = useNavigate();

  const selectedPageButton = (page) => {
    if (page === "/summary") {
      const plans = selectedPlans.map((planId) =>
        addPagePlans.find((plan) => plan.id === planId)
      );

      setUserPlanData({
        selectedPlan: userPlanData.selectedPlan,
        billingTypePlan: userPlanData.billingTypePlan,
        addOns: plans,
      });
      localStorage.setItem("addPageDetails", JSON.stringify(plans));
    }
    navigate(page);
  };

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className="  border-2 w-[90%] bg-white  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6   ">
          <h1 className="text-2xl md:text-4xl text-blue-950 font-bold pb-4 md:pb-1">
            Pick add-ons
          </h1>
          <p className="text-gray-400 font-medium   pb-4 md:pb-8">
            Add-ons help enhance your gaming experience
          </p>
          <div className="flex flex-col gap-4    md:justify-evenly   ">
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
                  <span className="text-blue-950 text-sm font-bold">
                    {type}
                  </span>
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
            <NavigationButtons
              selectedPageButton={selectedPageButton}
              nextPage="/summary"
              goBack="/plan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
