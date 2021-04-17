import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory} from 'react-router';

const CourseDetail = ({course}) => {
    const {imageURL, name, price, _id} = course;
   
    const history = useHistory();
    const handleBuy =(_id)=>{
        // const url = `/foods/${_id}`;
        history.push(`/courseOrder/${_id}`);
        // console.log(id) 
    }

    return (
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
        <Card.Img style={{height: '150px'}} variant="top" src={imageURL} />
        <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="font-weight-bold">Sek {price} /kurs <Button className="ml-3" variant="primary"  onClick={()=>handleBuy(_id)} >Order Now/Beställa nu</Button></Card.Text>
            
        </Card.Body>
    </Card>
        
    );
};

export default CourseDetail;