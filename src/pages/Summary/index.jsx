import { NavigationButtons } from "../../components/NavigateButtons";
import ShowTotal from "./ShowTotal";
import ShowPlanDetails from "./ShowPlanDetails";
import SummaryPageIntro from "./SummaryPageIntro";
import useSummaryPageViewModel from "./useSummaryPageViewModel";
const Summary = () => {
  const {
    addOns,
    billingTypePlan,
    selectedPlan,
    total,
    selectedPageButton,
    changePageButton,
  } = useSummaryPageViewModel();

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className=" bg-white border-2 w-[90%]  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6 ">
          <SummaryPageIntro />
          <div className="flex flex-col gap-4  bg-blue-50  md:justify-evenly rounded-lg ">
            <ShowPlanDetails
              addOns={addOns}
              billingTypePlan={billingTypePlan}
              selectedPlan={selectedPlan}
              changePageButton={changePageButton}
            />

            <ShowTotal billingTypePlan={billingTypePlan} total={total} />
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
