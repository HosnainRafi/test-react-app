import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Container, Grid, Paper } from '@mui/material';
import Calender from '../../NewShared/Calender/Calender';
import DashboardCalender from '../../NewShared/DashboardCalender';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardAppointments from '../../DashboardAppointments/DashboardAppointments';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Dashboard = () => {

    const [date, setDate] = useState(new Date());
    const {logOut} = useAuth();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#2E3B55' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <Drawer PaperProps={{
                    sx: {
                        background: "linear-gradient(to bottom,#19D3AE,#0FCFEC)",
                        color: "#FFFFFF",
                    }
                }} variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Box>
                        <List>
                            {[{ text: 'Home', url: '/home' }, { text: 'Dashboard', url: '/dashboard' }, { text: 'Appointment', url: '/appointment' }, { text: 'Patient', url: '/patient' }].map((item, index) => (

                                <Link to={item.url} style={{textDecoration: 'none',color: '#FFFFFF'}}>
                                    <ListItemButton
                                        key={item.text}
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            {index === 1 && <AppsIcon ></AppsIcon>}
                                            {index === 2 && <CalendarTodayTwoToneIcon ></CalendarTodayTwoToneIcon>}
                                            {index === 3 && <PeopleAltIcon ></PeopleAltIcon>}
                                            {index === 0 && <HomeIcon></HomeIcon>}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>
                        <List onClick={logOut}>
                            {['LogOut'].map((text, index) => (
                                
                                    <ListItemButton
                                    key={text}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        {index === 0 && <LogoutIcon ></LogoutIcon>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                               

                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
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

            </Box>
        </Box>
    );
};

export default Dashboard;

/*
<ListItemButton
                                    key={item.text}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        {index === 1 && <AppsIcon ></AppsIcon>}
                                        {index === 2 && <CalendarTodayTwoToneIcon ></CalendarTodayTwoToneIcon>}
                                        {index === 3 && <PeopleAltIcon ></PeopleAltIcon>}
                                        {index === 0 && <HomeIcon></HomeIcon>}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                                */