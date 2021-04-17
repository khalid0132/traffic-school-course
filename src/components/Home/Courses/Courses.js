import React, { useEffect, useState } from 'react';
import CourseDetail from '../CourseDetail/CourseDetail';
import theory from './theory3.jpg';
import instructor from './instructor.jpeg';
import driving from './driving.jpg'


// const courseData = [
//     {
//         name: 'Theory Service',
//         price: 200,
//         img: theory
//     },
//     {
//         name: 'Practical Driving',
//         price: 750,
//         img: driving
//     },
//     {
//         name: 'Instructor course',
//         price:500,
//         img: instructor
//     }
// ]

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:7200/course")
        .then (res => res.json())
        .then (data => setCourses(data))
    }, [])

    return (
        <section className="courses-container mt-5">
        <div className="text-center">
            <h5 style={{color: 'red'}} className="mt-4">Våra Kurser</h5>
            <h2>Kurser vi erbjuder...</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row pt-4">
            {
                courses.map(course => <CourseDetail course={course} key={course.name}></CourseDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Courses;