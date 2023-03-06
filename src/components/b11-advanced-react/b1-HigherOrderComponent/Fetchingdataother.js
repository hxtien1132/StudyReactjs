import React from 'react';
import WithLoading from './WithLoading';

const Fetchingdata = ({data}) => {
    console.log(data);
    return (
        <div>
            {/* {data.map((item)=>(
                <div key={item}>{item}</div>
            ))} */}
        </div>
    );
};

export default WithLoading(Fetchingdata,  "https://hn.algolia.com/api/v1/search?query=css");