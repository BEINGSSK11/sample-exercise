import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AlertDialog from './AlertDialog';
import { Container } from '@mui/material';

const Signin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSignin = () => {
        if (formData.email && formData.password) {
            const storedUserData = JSON.parse(localStorage.getItem('userData'));

            if (storedUserData && storedUserData.email === formData.email && storedUserData.password === formData.password) {
                setShowAlert(true);
                setShowError(false);
                navigate('/Dashboard', { state: { username: storedUserData.name } });
            } else {
                setShowError(true);
                setShowAlert(false);
            }
        } else {
            setShowError(true);
            setShowAlert(false);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Fragment>
            <Container>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    sx={{ padding: 4 }}
                >
                    <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                        Sign In
                    </Typography>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleSignin} sx={{ mt: 3 }}>
                        Sign In
                    </Button>
                    <AlertDialog
                        open={showAlert || showError}
                        onClose={() => {
                            setShowAlert(false);
                            setShowError(false);
                        }}
                        title={showAlert ? "Sign In Successful" : "Sign In Failed"}
                        content={showAlert ? "User signed in successfully." : "Invalid email or password. Please try again."}
                    />
                </Box>
            </Container>
        </Fragment>
    );
};

export default Signin;
