import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseDetail = ({course}) => {
    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
        <Card.Img style={{height: '150px'}} variant="top" src={course.imageURL} />
        <Card.Body>
            <Card.Title className="text-center">{course.name}</Card.Title>
            <Card.Text className="font-weight-bold">Sek {course.price} /course <Button className="ml-3" variant="primary" >Köp nu</Button></Card.Text>
            
        </Card.Body>
    </Card>
        
    );
};

export default CourseDetail;