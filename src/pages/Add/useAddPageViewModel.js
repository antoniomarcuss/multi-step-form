import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlanContext } from "../../context/PlanContext";
import { addPagePlans } from "./components/add/addPagePlans";
const useAddPageViewModel = () => {
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

  return {
    userPlanData,
    selectedPlans,
    addPagePlans,
    handleClickSelectedPlans,
    selectedPageButton,
  };
};

export default useAddPageViewModel;
