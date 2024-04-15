import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PlanContext } from "../../context/PlanContext";
import { planInformation } from "./components/planInformation";

const usePlanPageViewModel = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(planInformation[0].id);

  const [changeBillingType, setChangeBillingType] = useState(false);

  const { setUserPlanData } = useContext(PlanContext);

  const handleClickSelectedPlan = (id) => setSelectedPlan(id);

  const handleClickPlan = () => setChangeBillingType(!changeBillingType);

  const selectedPageButton = (page) => {
    if (page === "/add") {
      const plan = planInformation.find((plan) => plan.id === selectedPlan);

      const planPageDetails = {
        billingTypePlan: changeBillingType ? "year" : "month",
        selectedPlan: plan,
      };

      setUserPlanData(planPageDetails);
    }
    navigate(page);
  };
  return {
    selectedPlan,
    changeBillingType,
    setChangeBillingType,
    handleClickSelectedPlan,
    handleClickPlan,
    selectedPageButton,
  };
};

export default usePlanPageViewModel;
