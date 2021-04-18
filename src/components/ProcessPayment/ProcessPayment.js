import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import { Button } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51IhKyVCvdh73TlL5Y5XOmngfJFPHjYyQ6WkbYXVczDjkd0Ha9FZGaoHuG7esZaXOje3UXowFDEI6B9r3UUWoE1ou00enAiLwBv');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>

            <SimpleCardForm></SimpleCardForm>
            <br/>
            <Button variant="warning" href='https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/'>Payment av Banken</Button>{' '}
        </Elements>

    );
};

export default ProcessPayment;