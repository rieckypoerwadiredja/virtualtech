import { useState } from "react";

function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState(true);

  const handleImageOnLoad = () => {
    setIsLoaded(false);
  };

  return {
    handleImageOnLoad,
    imgLoading: isLoaded,
  };
}

export default useImageOnLoad;
