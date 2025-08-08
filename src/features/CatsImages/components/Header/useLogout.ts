import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/reducer/hook";
import { clearCatsState } from "../../store/actions";
import { useCallback } from "react";
import { URL_AUTORIZATION } from "../../../../constants";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispatch(clearCatsState());
    navigate(URL_AUTORIZATION);
    localStorage.removeItem("isAuth");
  }, [dispatch, navigate]);

  return { logout };
};
