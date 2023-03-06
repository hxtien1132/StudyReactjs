import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);//api trả về
  const [loading, setLoading] = useState(true);//chạy hay k chạy
  const [errorMessage, setErrorMessage] = useState("");//err
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);//url

  const isMounted = useRef(true);

  useEffect(() => {
    //
    isMounted.current = true;
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
