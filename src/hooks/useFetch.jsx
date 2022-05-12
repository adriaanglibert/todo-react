import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
        mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, Content-Type, Authorization",
      },
    })
      .then((response) => {
        if (!response.ok) {
            setError(response.message);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from API", data);
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};

export default useFetch;
