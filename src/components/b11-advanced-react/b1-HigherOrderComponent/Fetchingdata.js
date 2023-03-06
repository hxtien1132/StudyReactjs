import React from 'react';
import WithLoading from './WithLoading';

const Fetchingdata = ({data}) => {
    console.log("data",data);
     
    return (
        <div>
            {data.map((item)=>(
                <div key={item.title} className="grid grid-cols-4">{item.title}</div>
            ))}
        </div>
    );
};

export default WithLoading(Fetchingdata,  "https://hn.algolia.com/api/v1/search?query=react");