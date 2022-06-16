import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import MuiButton from '../../StyledComponent/MuiButton';


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

const DashboardAppointments = ({date}) => {

    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    //console.log(appointments);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Schedule</StyledTableCell>
                            <StyledTableCell align="left">Service</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                            
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
                                <StyledTableCell align="left">{row.payment ? 'Paid' :
                                <Link to={`/dashboard/payment/${row._id}`} style={{textDecoration: 'none'}}><Button variant='contained' color='primary' >Pay</Button></Link>
                                
                                }</StyledTableCell>
                                
                                
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashboardAppointments;