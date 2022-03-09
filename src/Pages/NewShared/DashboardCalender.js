import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

function disableWeekends(date) {
    return date.getDay() === 5 || date.getDay() === 6;
  }

const DashboardCalender = ({date,setDate}) => {
    
    return (
        <div style={{height: '60vh',fontSize: '36px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
            <StaticDatePicker
                shouldDisableDate={disableWeekends}
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        </div>
    );
};

export default DashboardCalender;