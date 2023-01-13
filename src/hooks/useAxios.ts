import axios from "axios";
import { useEffect, useState } from "react"

interface Props {
  url: string;
};

const useAxios = ({ url } : Props) => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  axios.defaults.baseURL = "https://opentdb.com/";

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then(res => setResponse(res.data))
        .catch(_error => setError(_error))
        .finally(() => setLoading(false))
    }
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;