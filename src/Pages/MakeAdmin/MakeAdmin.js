import { Container, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import MuiButton from '../../StyledComponent/MuiButton';

const MakeAdmin = () => {
    const {token} = useAuth();

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    swal("Congratulation!", "You have added successfully", "success");
                    reset();
                }
                console.log(data);
            })
      
    }

    return (
        <Container style={{ textAlign: 'center', marginTop: '5%' }}>
            <h3 style={{ color: "tomato" }}>Make an Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <TextField
                    sx={{ width: '60%', m: 1 }}
                    id="outline-required"
                    label="email"
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                    })}
                />

                {errors?.email?.type === "pattern" && (
                    <p>Use the correct email</p>
                )}
                <div style={{ textAlign: 'center' }}>
                    <MuiButton type='submit'>Make Admin</MuiButton>
                </div>
            </form>
        </Container>
    );
};

export default MakeAdmin;