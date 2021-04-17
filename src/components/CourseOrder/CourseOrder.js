import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
import './CourseOrder.css'


const CourseOrder = () => {
    const {_id} = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:7200/course/${_id}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

//     let history = useHistory();
// const handleOrder = (_id) =>{
//   console.log('View Order')
//   history.push(`/orders/${_id}`);
// }

const {name, price, imageURL} = service;
    return (
        <Container>
        <div className="App mt-5 admin-form">
            
          <h2>Visa Kurs</h2>
            <p>{_id}</p>
          

          
          
          <h5>Namn: {name}</h5>
          <p><img src={imageURL} alt=""/></p>
          <p>Pris: <strong>{price}</strong> SEK</p>
          {/* <Button variant="primary" onClick={()=>handleOrder(_id)}>Visa orders</Button>{' '} */}
          <Button variant="warning" href='https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/'>Payment/Betala nu</Button>{' '}
      </div>
    </Container>
    );
};

export default CourseOrder;