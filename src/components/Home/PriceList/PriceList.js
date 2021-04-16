import React from 'react';
import { Card } from 'react-bootstrap';

const PriceList = ({pr}) => {


    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4 border-danger bg-danger p-5" >
            <Card.Body>
                <Card.Title className= "text-center">{pr.name}</Card.Title>
                <Card.Text className= "text-white">Typ: {pr.type}</Card.Text>
                <Card.Text className= "text-white">Pris: SEK {pr.price}</Card.Text>
                <Card.Text className= "text-white">Lektion: {pr.lessons}</Card.Text>
                <Card.Text className= "text-white">Tidgräns: {pr.duration}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PriceList;