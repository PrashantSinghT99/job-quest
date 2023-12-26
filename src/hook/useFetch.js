import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'd1d59ba52amshbedec5b70735d08p153f5bjsn2d688d6dbc9f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return {data, isLoading, error, refetch};
};

export default useFetch;