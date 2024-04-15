import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlanContext } from "../../context/PlanContext";
const useSummaryPageViewModel = () => {
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

  return {
    addOns,
    billingTypePlan,
    selectedPlan,
    total,
    selectedPageButton,
    changePageButton,
  };
};

export default useSummaryPageViewModel;
