import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const isMouted = useRef(true);
  useEffect(() => {
    isMouted.current = true;
    return () => {
      //unmouted
      isMouted.current = false;
    };
  }, []);
  
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // console.log(isMouted.current);

      setTimeout(() => {
        console.log(isMouted.current);
        if (isMouted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`the error happend ${error}`);
    }
  };

  // const handleUpdateQuery = lodash.debounce((e) =>{
  //   setQuery(e.target.value)
  // },500);
  useEffect(() => {
    handleFetchData.current(); //current lấy giá trị mà k bị rerender
    //  console.log(typeof(handleFetchData.current()));
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          placeholder="Typing your keyword ...."
          className="border border-gray-200 p-5 block w-full rounded-md  focus:border-blue-400 transition-all"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold-600 p-5 rounded-md"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto text-red-500">
          (
        </div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
