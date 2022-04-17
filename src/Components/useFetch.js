import { useState, useEffect, useCallback } from "react";

function useFetch( page, listObj) {
    // console.log(page, listObj);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
       setLoading(true);
      setError(false);
      setList((prev) => [...prev, ...listObj]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [listObj]);

  useEffect(() => {
    sendQuery();
  }, [ sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;