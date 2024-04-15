import { createContext, useState, useEffect } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [userPlanData, setUserPlanData] = useState(() => {
    const savedData = localStorage.getItem("planPageDetails");
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (userPlanData) {
      localStorage.setItem("planPageDetails", JSON.stringify(userPlanData));
    }
  }, [userPlanData]);

  return (
    <PlanContext.Provider value={{ userPlanData, setUserPlanData }}>
      {children}
    </PlanContext.Provider>
  );
};
