import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
import MuiButton from '../../StyledComponent/MuiButton';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Success = () => {

    const [paymentDetails, setPaymentDetails] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/payment/${id}`)
            .then(res => res.json())
            .then(data => setPaymentDetails(data))
    }, [id]);

    const payment = {
        amount: paymentDetails.total_amount,
        tran_id: paymentDetails.tran_id,
        transaction: paymentDetails.transaction,
        currency: paymentDetails.currency,
    }

    const url = `http://localhost:3000/success/${id}`
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
    })
        .then(res => res.json())
        .then(data => console.log(data))

    return (
        <div>
            <Typography textAlign="center" color="goldenrod" variant="h3" >
                Payment Successful.your appointment is confirmed.
            </Typography>
            <Link to="/" style={{ textDecoration: "none", textAlign: "center", margin: "0 auto" }}><MuiButton>Go home</MuiButton></Link>
        </div>
    );
};

export default Success;