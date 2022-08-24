import React, { useCallback, useState } from "react";

const useHTTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, requestFunction) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      if (requestFunction) {
        const data = await response.json();
        requestFunction(data);
      }
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
  }, []);

  return {
    loading,
    error,
    sendRequest,
  };
};

export default useHTTP;
