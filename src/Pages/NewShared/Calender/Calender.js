import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

function disableWeekends(date) {
    return date.getDay() === 5 || date.getDay() === 6;
  }

const Calender = ({date,setDate}) => {

    

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
            <StaticDatePicker
                disablePast
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

export default Calender;