import { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { URL_CATS } from "../../../../constants";

export const useRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const valueQueryParams = searchParams.get("tab");

  const paths = useMemo(() => ["favorites"], []);

  useEffect(() => {
    if ((valueQueryParams && !paths.includes(valueQueryParams)) || !valueQueryParams) {
      navigate(URL_CATS);
    }
  }, [valueQueryParams, navigate, paths]);

  return {valueQueryParams}
};
