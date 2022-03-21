import React from 'react';
import { useState, useEffect } from 'react';
import { Container} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#19D3AE',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const MyAppointment = () => {

    const {user} = useAuth();
    const [appointments,setAppointments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myAppointment?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[user.email])

    return (
        <>
            <TableContainer component={Paper} sx={{mt: 5}}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Schedule</StyledTableCell>
                            <StyledTableCell align="left">Service</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Phone No</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.time}</StyledTableCell>
                                <StyledTableCell align="left">{row.serviceName}</StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                
                                
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyAppointment;