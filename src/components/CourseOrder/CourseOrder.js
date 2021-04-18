// import React, { useEffect, useState } from 'react';
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
            <div  className="col-md-7 p-5 mt-5" style={{ position: "absolute", right: 0, backgroundColor: "#f9f9f9" }}>
                <h5 className="">Kund information</h5>
                 <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("Förenamn", { required: true })} placeholder="Förenamn" className="form-control" />
                       
                    </div>
                    <div className="form-group">
                        <input {...register("Efternamn", { required: true })} placeholder="Efternamn" className="form-control" />
                      
                    </div>

                    <div className="form-group">
                        <input {...register("address", { required: true })} placeholder="Adress" className="form-control" />
                       
                    </div>
                    <div className="form-group">
                        <input {...register("email", { required: true })} placeholder="E-post" className="form-control" />
                      
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Skicka vidare</button>
                    </div>
                </form>
            </div>
            <div className="col-md-5 mt-5">
            <h5 ClassName="mb-5 align-center font-w-bold">Payment av Stripe eller Banken</h5> <br/>
                <ProcessPayment></ProcessPayment>
            </div>
        </div>
    </Container>
    );
};

export default CourseOrder;