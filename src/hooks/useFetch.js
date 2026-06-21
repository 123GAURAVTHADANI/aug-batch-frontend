import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json_data = await response.json();
        setData(json_data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return data;
}

export default useFetch;
