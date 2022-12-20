import React, { useEffect, useState } from 'react';

const UseCourses = (courseId) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = `https://documentation-site-server.onrender.com/course/${courseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])
    return [courses, setCourses]
};

export default UseCourses;