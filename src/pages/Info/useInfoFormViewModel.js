import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./components/schema";

const useInfoFormViewModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const handleOnSubmit = () => navigate("/plan");

  return { register, handleSubmit, handleOnSubmit, errors };
};

export default useInfoFormViewModel;
