import React from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
const BlogPageDetails = () => {
    const {slug} = useParams();
    console.log("slugss",slug);
    const navigate = useNavigate();
    return (
        <div>
            BlogPageDetails 
            <button onClick={()=> navigate("/blog")} className='p-3 rounded-sm text-white bg-blue-500'> 
            Navigate to Blog Page
            </button>
        </div>
    );
};

export default BlogPageDetails;