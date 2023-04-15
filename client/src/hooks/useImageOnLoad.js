import { useState } from "react";

function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const style = isLoaded ? "" : "bg-slate-100 animate-pulse";

  return {
    handleImageOnLoad,
    style,
  };
}

export default useImageOnLoad;
