import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=100
const getRandomPhotos = async (page) => {
  console.log(page);
  try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage,setNextPage] = useState(1);
  
  const handleLoadMorePhotos = useRef({}) ;
   handleLoadMorePhotos.current = async () => {
     const images =  await getRandomPhotos(nextPage)
     const newPhotos =[...randomPhotos, ...images] // 8 cái cũ + 8 cái mới (concat)
    //  console.log(newPhotos);
     setRandomPhotos(newPhotos);
     setNextPage(nextPage + 1)
   
  }
  // useEffect(callback, [defendencies])
  useEffect(() => {
   handleLoadMorePhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
    
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={`${item.download_url} ${index}`} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg h-[200px]"
              />
            </div>
          ))} 
        
      </div>
      
      <div className="text-center">
        <button onClick={handleLoadMorePhotos.current} className="inline-block px-8 py-4 bg-purple-600 text-white">
          load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
