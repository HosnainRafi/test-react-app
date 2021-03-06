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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../../DashboardHome/DashboardHome';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import MyAppointment from '../../MyAppointment/MyAppointment';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddDoctors from '../../AddDoctors/AddDoctors';
import AllAppointment from '../../AllAppointment/AllAppointment';
import Payment from '../../Payment/Payment';
import SSLCheckout from '../../Payment/SSLCheckout';


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

    let { path, url } = useRouteMatch();


    const { logOut,admin } = useAuth();

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
                            {[{ text: 'Home', url: '/home' }, { text: 'Dashboard', url: '/dashboard' }, { text: 'Appointment', url: '/appointment' },{ text: 'My Appointment', url: `${url}/myAppointment` }].map((item, index) => (

                               !admin && <Link to={item.url} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
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
                                            {index === 0 && <HomeIcon></HomeIcon>}
                                            {index === 1 && <AppsIcon ></AppsIcon>}
                                            {index === 2 && <CalendarTodayTwoToneIcon ></CalendarTodayTwoToneIcon>}
                                            {index === 3 && <PeopleAltIcon></PeopleAltIcon>}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>

                        <List>
                            {[{ text: 'Home', url: '/home' },  { text: 'Dashboard', url: '/dashboard' },{ text: 'Make Admin', url: `${url}/makeAdmin` }, { text: 'All Appointment', url: `${url}/allAppointment` },{ text: 'Add Doctors', url: `${url}/addDoctors` }].map((item, index) => (

                             admin && <Link to={item.url} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                                <ListItemButton
                                    key={item.text}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5
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
                                        {index === 0 && <HomeIcon></HomeIcon>}
                                        {index === 2 && <AddModeratorIcon></AddModeratorIcon>}
                                        {index === 3 && <BusinessCenterIcon></BusinessCenterIcon> }
                                        {index === 4 && <AddBoxIcon></AddBoxIcon> }
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

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment/:appointmentId`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/sslPayment/:appointmentId`}>
                        <SSLCheckout></SSLCheckout>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctors`}>
                        <AddDoctors></AddDoctors>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allAppointment`}>
                        <AllAppointment></AllAppointment>
                    </AdminRoute>
                    <Route exact path={`${path}/myAppointment`}>
                        <MyAppointment></MyAppointment>
                    </Route>
                    
                </Switch>
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