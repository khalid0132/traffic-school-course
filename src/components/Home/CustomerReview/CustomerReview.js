import React, { useEffect, useState } from 'react';
import Erik from '../../../images/Erik.png';
import Elsa from '../../../images/Elsa.png';
import Ema from '../../../images/Ema.png';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

// const reviewData = [
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
//         name: 'Erik Nilsson',
//         from: 'Östersund',
//         img: Erik
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
//         name: 'Elsa Flemingsberg',
//         from: 'Södertälje',
//         img: Elsa
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
//         name: 'Ema Eriksson',
//         from: 'Stockholm',
//         img: Ema
//     }
// ]
const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('https://lit-coast-55410.herokuapp.com/reviews')
        .then (res => res.json())
        .then (data => setReviews(data))
    }, [])
    return (
        <section style={{backgroundColor: 'lightgray'}} className="testimonials my-5 py-5 customer-review">
        <div className="container text-center">
         
           <h5 style={{color: 'red'}}>KUNDRECENSIONER / Customers' Reviews</h5>
            <h2>Våra nöjda kunder ger alltid bra feedback !!!</h2>
           </div>
        
           <div className="d-flex justify-content-center">
        <div className="w-75 row pt-5">
            {
                reviews.map(review => <ReviewDetail review={review} key={review.name}></ReviewDetail>)
            }
        </div>
       
    </div>
    </section>
    //     <section className="testimonials my-5 py-5">
    //     <div className="container">
    //         <div className="section-header">
    //             <h5 className="text-primary uppercase">Customers' Reviews</h5>
    //             <h1>What's Our Satisfied Customers' <br/>Says</h1>
    //         </div>
    //         <div className="card mt-5">
    //             {
    //                 reviewData.map(review => <ReviewDetail review={review} key={review.name}></ReviewDetail>)
    //             }
    //         </div>
    //     </div>
        
    // </section>
    );
};

export default CustomerReview;