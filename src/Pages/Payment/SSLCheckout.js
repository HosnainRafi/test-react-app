import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SSLCheckout = () => {


  const { appointmentId } = useParams();
  

  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then(res => res.json())
      .then(data => setAppointment(data));
  }, [appointmentId])

  //console.log(appointment);

  const handlePay = () => {
    const serviceDetails = {
      product_name: appointment?.serviceName,
      cus_name: appointment?.name,
      cus_email: appointment?.email,
      cus_phone: appointment?.phone,
      total_amount: appointment?.price*90,
    }

    const url = `http://localhost:5000/init/`
    fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceDetails)
    })
    .then(res => res.json())
    .then(data => window.location.replace(data));
  }


  return (
    <Box>
      <Card variant="outlined" sx={{ m: 8, border: 2, borderColor: 'goldenrod' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="#3f51b5" gutterBottom>
            Patient Name: {appointment.name}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="#3f51b5" gutterBottom>
            Patient Email: {appointment.email}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="#3f51b5" gutterBottom>
            Patient Phone: {appointment.phone}
          </Typography>
          <CardActions>
            <Button variant='contained' onClick={handlePay}>Pay {appointment.price}$</Button>
          </CardActions>
        </CardContent>

      </Card>
    </Box>
  );
};

export default SSLCheckout;