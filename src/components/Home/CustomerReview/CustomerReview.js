import React from 'react';
import Erik from '../../../images/Erik.png';
import Elsa from '../../../images/Elsa.png';
import Ema from '../../../images/Ema.png';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const reviewData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Erik Nilsson',
        from: 'Östersund',
        img: Erik
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Elsa Flemingsberg',
        from: 'Södertälje',
        img: Elsa
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus',
        name: 'Ema Eriksson',
        from: 'Stockholm',
        img: Ema
    }
]
const CustomerReview = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary uppercase">Customers' Reviews</h5>
                <h1>What's Our Satisfied Customers' <br/>Says</h1>
            </div>
            <div className="card mt-5">
                {
                    reviewData.map(review => <ReviewDetail review={review} key={review.name}></ReviewDetail>)
                }
            </div>
        </div>
        
    </section>
    );
};

export default CustomerReview;