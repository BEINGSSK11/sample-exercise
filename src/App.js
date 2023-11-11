import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                height="100vh"
                            >
                                <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                                    Welcome to Sample Exercise
                                </Typography>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" component={Link} to="/Signin" startIcon={<PersonIcon />}>
                                        Sign in
                                    </Button>
                                    <Button variant="outlined" component={Link} to="/Signup" startIcon={<PersonAddIcon />}>
                                        Sign up
                                    </Button>
                                </Stack>
                            </Box>
                        }
                    />
                    <Route path="/Signin" element={<Outlet />}>
                        <Route index element={<Signin />} />
                    </Route>
                    <Route path="/Signup" element={<Outlet />}>
                        <Route index element={<Signup />} />
                    </Route>
                    <Route path="/Dashboard" element={<Outlet />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </Fragment>
    );
};

export default App;
