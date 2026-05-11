import { useState, useEffect } from "react";

// hello
export default function useFectch(url)  {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then(data => {
        setData(data)
        console.log(data);
      })
      .catch(error => {
        setError(error);
      });
      
  }, [url]);

  return { data, error };
};

