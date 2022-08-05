import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogBg from "../../assets/blogs/blog-bg.png";
const BlogDetails = () => {
    const {blogDetailId} = useParams();
    const [blogDetail, setBlogDetail] = useState({});

    useEffect(() => {
        const url = `blogs.json/blogDetail/${blogDetailId}`; 
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogDetail(data))

    },[])
    return (
        <div>
            <div
        class="hero h-96 flex justify-center items-center "
        style={{ backgroundImage: `url(${blogBg})` }}
      ></div>
            <h3>{blogDetail.title}</h3>
            {/* <h3 className='mt-12'>hello world</h3> */}
        </div>
    );
};

export default BlogDetails;