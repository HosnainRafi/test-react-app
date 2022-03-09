import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import MuiButton from '../../../StyledComponent/MuiButton';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {

  const { name, time } = booking;


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.serviceName = name;
    console.log(data);
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(dat => {
        if (dat.insertedId) {
          swal("Congratulation!", "You have added successfully", "success");
          handleBookingClose(true);
        }
      })

    

  }

  const { user } = useAuth();
  //console.log(user);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outline-required"
              label="time"
              defaultValue={time}
              {...register("time", {
                required: true,
              })}
            />

            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outline-required"
              label="name"
              defaultValue={user.displayName}
              {...register("name", {
                required: true,
                maxLength: 20,

              })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
              <p>Name cannot exceed 20 characters</p>
            )}



            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outline-required"
              label="email"
              type="email"
              defaultValue={user.email}
              {...register("email", {
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
              })}
            />
            {errors?.email?.type === "pattern" && (
              <p>Use the correct email</p>
            )}

            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outline-required"
              label="Phone number"
              {...register("phone", {
                required: true,
                pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
              })} />
            {errors?.phone?.type === "pattern" && (
              <p>Use the proper number</p>
            )}

            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outline-required"
              label="date"
              defaultValue={date.toLocaleDateString()}
              {...register("date", {
                required: true,
              })}
            />

            <div style={{ textAlign: 'end', marginRight: '7%' }}>
              <MuiButton type='submit'>Send</MuiButton>
            </div>

          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;

/*
<label>Name</label>
            <input
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: /^(\w\w+)\s(\w+)$/
              })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
              <p>Name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}

            <label>Phone no</label>a
            <input {...register("phone", {
              required: true,
              pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
            })} />
            {errors?.phone?.type === "pattern" && (
              <p>Use the proper number</p>
            )}
            <input type="submit" />


             <TextField
            sx={{ width: '90%' ,m:1}}
            id="outline-required"
            label="time"
            disabled
            defaultValue={time}
            >

            <div style={{ textAlign: 'end', marginRight: '7%' }}>
              <MuiButton type='submit'>Send</MuiButton>


            </div> 
            */