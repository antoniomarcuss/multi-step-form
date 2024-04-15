import { NavigationButtons } from "../../components/NavigateButtons";

import SelectPagePlanAdd from "./SelectPagePlanAdd";
import AddPageIntro from "./AddPageIntro";
import useAddPageViewModel from "./useAddPageViewModel";
const Add = () => {
  const {
    userPlanData,
    selectedPlans,
    addPagePlans,
    handleClickSelectedPlans,
    selectedPageButton,
  } = useAddPageViewModel();

  return (
    <div className=" flex flex-col justify-between  items-center  w-full absolute top-20 min-h-[97%]  md:h-full md:relative md:top-0   ">
      <div className="  border-2 w-[90%] bg-white  md:max-w-[500px] md:w-[63%]  rounded-lg md:absolute md:right-0 md:border-none md:h-full ">
        <div className="  p-6   ">
          <AddPageIntro />
          <div className="flex flex-col gap-4    md:justify-evenly   ">
            <SelectPagePlanAdd
              addPagePlans={addPagePlans}
              userPlanData={userPlanData}
              selectedPlans={selectedPlans}
              handleClickSelectedPlans={handleClickSelectedPlans}
            />
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
