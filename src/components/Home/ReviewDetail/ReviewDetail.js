import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewDetail = ({review}) => {
    const {quote, name, from, img} = review;
    return (

        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
        <Card.Body>
            <Card.Title className="text-center">{quote}</Card.Title>
        <Card.Img style={{height: '150px'}} variant="top" src={img} />
            <Card.Text className="font-weight-bold text-center">{name}</Card.Text>
            <Card.Title className="text-center">{from}</Card.Title>
            
        </Card.Body>
    </Card>
//         <div className="card shadow-sm">
//         <div className="card-body">
//             <p className="card-text text-center">{quote}</p>
//         </div>
//         <div className="card-footer d-flex  align-items-center">
//             <img className="mx-3" src={img} alt="" width="60"/>
//             <div>
//                 <h6 className="text-primary">{name}</h6>
//                 <p className="m-0">{from}</p>
//             </div>
//         </div>
//    </div> 
   );
};

export default ReviewDetail;