import { planInformation } from "./components/planInformation";
import { NavigationButtons } from "../../components/NavigateButtons";

import ToggleBillingButton from "./ToggleBillingButton";
import SelectPlan from "./SelectPlan";
import PlanIntro from "./PlanIntro";
import usePlanPageViewModel from "./usePlanPageViewModel";
const Plan = () => {
  const {
    selectedPlan,
    changeBillingType,
    setChangeBillingType,
    handleClickSelectedPlan,
    handleClickPlan,
    selectedPageButton,
  } = usePlanPageViewModel();

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]   md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6      ">
          <PlanIntro />
          <div className="  flex flex-col     gap-4 md:gap-8">
            <SelectPlan
              selectedPlan={selectedPlan}
              handleClickSelectedPlan={handleClickSelectedPlan}
              changeBillingType={changeBillingType}
              planInformation={planInformation}
            />
            <ToggleBillingButton
              changeBillingType={changeBillingType}
              handleClickPlan={handleClickPlan}
              setChangeBillingType={setChangeBillingType}
            />
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
