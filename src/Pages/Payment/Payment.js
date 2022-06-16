import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvwUbHaybpCvMFtJNxh0IMGIDjGrbVCVW4A7Jrvz17Tt2BYxVGKHpPACLnmgoVr8vWfz7vcfKNoCnIDdfPqpGYW00zB1bvFPb');


const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  };

const Payment = () => {

    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])

    return (
        <div style={{ marginTop: '5%' }}>
            <Typography variant="h5" gutterBottom component="div" style={{ color: "#0FCFEC", textAlign: 'center' }} sx={{ fontWeight: '600', }}>{appointment.name} Please pay for {appointment.serviceName} on {appointment.date}</Typography>

            <Typography variant="h6" gutterBottom component="div" style={{ color: "red", textAlign: 'center' }} sx={{ fontWeight: '400', }}>Payable amount is :${appointment.price}</Typography>

            {appointment?.price && <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm 
                appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/* 1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
5. Create payment method
6. server create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
 */   