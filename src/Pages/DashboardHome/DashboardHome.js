import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import DashboardAppointments from '../DashboardAppointments/DashboardAppointments';
import DashboardCalender from '../NewShared/DashboardCalender';
import Calender from '../NewShared/Calender/Calender';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid xs={12} md={4} sx={{ ml: 6 }}>
                        <Paper elevation={3}><Calender
                            date={date}
                            setDate={setDate}
                        ></Calender> </Paper>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ ml: 8 }}>
                        <DashboardAppointments
                            date={date}
                        ></DashboardAppointments>
                    </Grid>
                </Grid>
    );
};

export default DashboardHome;