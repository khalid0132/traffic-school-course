import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseDetail = ({course}) => {
    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
        <Card.Img variant="top" src={course.img} />
        <Card.Body>
            <Card.Title className="text-center">{course.name}</Card.Title>
            <Card.Text className="font-weight-bold">Sek {course.price} /course <Button className="ml-3" variant="primary" >Köp nu</Button></Card.Text>
            
        </Card.Body>
    </Card>

        //      <div className="col-md-4 text-center">
        //     {/* <img style={{height: '50px'}} src={course.img} alt="" /> */}
        //     <h5 className="mt-3 mb-3">{course.name}</h5>
        //     <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        // </div>
        // onClick={()=>handleBuy(_id)}
        
    );
};

export default CourseDetail;