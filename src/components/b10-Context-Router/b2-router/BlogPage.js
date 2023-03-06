import React, { useEffect } from 'react';
import {useSearchParams} from 'react-router-dom'
const BlogPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log("seacrchParams",searchParams);
    useEffect(()=>{
        setSearchParams({search:"hxt"});

    },[])
    console.log("seacrchParams",searchParams.get("search"));

    return (
        <div>
            blog page
        </div>
    );
};

export default BlogPage;