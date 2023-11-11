import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state && location.state.username;

    // Navigating to Signin page
    const handleLogout = () => {
        navigate('/Signin');
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome, {username}!
                    </Typography>
                    <Button
                        variant="outlined"
                        endIcon={<ExitToAppIcon />}
                        onClick={handleLogout}
                        sx={{ color: 'white', borderColor: 'white' }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    );
};

export default Dashboard;
