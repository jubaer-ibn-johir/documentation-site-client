import React, { useEffect, useState } from 'react';

const UseCourses = (courseId) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = `https://polar-shore-69456.herokuapp.com/${courseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])
    return [courses, setCourses]
};

export default UseCourses;