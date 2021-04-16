import React from 'react';
import { Card } from 'react-bootstrap';

const PriceList = ({pr}) => {


    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4 border-danger bg-primary" >
        <Card.Body>
            <Card.Title className= "text-center">{pr.name}</Card.Title>
            
            <Card.Text className= "text-white">Price: ${pr.price}</Card.Text>
            <Card.Text className= "text-white">Lessons: {pr.lessons}</Card.Text>
            <Card.Text className= "text-white">Duration: {pr.duration}</Card.Text>
            <Card.Text className= "text-white">Type: {pr.type}</Card.Text>
            
            
        </Card.Body>
    </Card>
    );
};

export default PriceList;