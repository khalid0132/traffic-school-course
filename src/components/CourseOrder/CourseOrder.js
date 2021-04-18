import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './CourseOrder.css'


const CourseOrder = ({course}) => {
  const { register, handleSubmit } = useForm();
    const {_id} = useParams();
    const onSubmit = (data) =>{
      console.log(data)
    }
    // const {_id} = useParams();
    // const [service, setService] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://lit-coast-55410.herokuapp.com/course/${_id}`)
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // }, []);

//     let history = useHistory();
// const handleOrder = (_id) =>{
//   console.log('View Order')
//   history.push(`/orders/${_id}`);
// }

// const {name, price, imageURL} = service;
    return (
        <Container>

    <div className="row">
          
            <div className="col-md-5 mt-5">
            <h2 ClassName="mb-5">Payment by Stripe or Bank</h2> <br/>
                <ProcessPayment></ProcessPayment>
            </div>
            <div  className="col-md-7 p-5 mt-5" style={{ position: "absolute", right: 0, backgroundColor: "#f9f9f9" }}>
                <h5 className="">Boka Service</h5>
                 <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name", { required: true })} placeholder="Full Namn" className="form-control" />
                       
                    </div>
                    <div className="form-group">
                        <input {...register("course", { required: true })} placeholder="Kurs Namn" className="form-control" />
                      
                    </div>

                    <div className="form-group">
                        <input {...register("price", { required: true })} placeholder="Kurs pris" className="form-control" />
                       
                    </div>
                    <div className="form-group">
                        <input {...register("email", { required: true })} placeholder="E-post" className="form-control" />
                      
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Boka Service</button>
                    </div>
                </form>
            </div>
        </div>


        {/* <div className="App mt-5 admin-form"> */}
            
          
            {/* <p>{_id}</p> */}
          {/* <h5>Namn: {service.name}</h5>
          <p><img src={service.imageURL} alt=""/></p>
          <p>Pris: <strong>{service.price}</strong> SEK</p> */}

          {/* <Button variant="primary" onClick={()=>handleOrder(_id)}>Visa orders</Button>{' '} */}
          {/* <Button variant="warning" href='https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/'>Payment/Betala nu</Button>{' '} */}
      {/* </div> */}
    </Container>
    );
};

export default CourseOrder;