import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseout", handle);
    return () => document.removeEventListener("mouseout", handle);
  }, [onBefore]);
};

export default useBeforeLeave;
