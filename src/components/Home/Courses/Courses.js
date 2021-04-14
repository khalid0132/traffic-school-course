import React from 'react';
import CourseDetail from '../CourseDetail/CourseDetail';
import theory from './theory3.jpg';
import instructor from './instructor.jpeg';
import driving from './driving.jpg'
// import instructor from '../../images/instructor.jpeg';
// import driving from '../../images/driving.jpg'

const courseData = [
    {
        name: 'Theory Service',
        price: 200,
        img: theory
    },
    {
        name: 'Practical Driving',
        price: 750,
        img: driving
    },
    {
        name: 'Instructor course',
        price:500,
        img: instructor
    }
]

const Courses = () => {

    return (
        <section className="courses-container mt-5">
        <div className="text-center">
            <h5 style={{color: 'red'}}>OUR COURSES</h5>
            <h2>Courses We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                courseData.map(course => <CourseDetail course={course} key={course.name}></CourseDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Courses;