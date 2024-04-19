import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PathnameBlocked = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, [navigate]);
};
