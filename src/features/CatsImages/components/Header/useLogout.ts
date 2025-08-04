import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/reducer/hook";
import { clearCatsState } from "../../store/actions";
import { useCallback } from "react";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispatch(clearCatsState());
    navigate("/");
    localStorage.removeItem("isAuth");
  }, [dispatch, navigate]);

  return { logout };
};
