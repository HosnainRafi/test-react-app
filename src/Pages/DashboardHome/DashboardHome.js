import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import DashboardAppointments from '../DashboardAppointments/DashboardAppointments';
import DashboardCalender from '../NewShared/DashboardCalender';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid xs={12} md={4} sx={{ ml: 6 }}>
                        <Paper elevation={3}><DashboardCalender
                            date={date}
                            setDate={setDate}
                        ></DashboardCalender> </Paper>
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