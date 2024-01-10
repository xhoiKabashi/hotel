import { useEffect } from "react";
const NavigateHelper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return;
};

export default NavigateHelper;
