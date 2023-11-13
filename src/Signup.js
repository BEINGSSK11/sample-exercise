import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AlertDialog from './AlertDialog';
import { Container } from '@mui/material';

const Signup = () => {
    // Storing form data and validation errors 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '',
        mobile: '',
        password: '',
    });

    const [showAlert, setShowAlert] = useState(false);

    // Form Submisson Handling
    const handleSignupClick = () => {
        if (validateForm()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUserIndex = users.findIndex(user => user.email === formData.email);

            if (existingUserIndex !== -1) {
                users[existingUserIndex] = formData;
            } else {
                users.push(formData);
            }
            localStorage.setItem('users', JSON.stringify(users));

            setShowAlert(true);
            setFormData({
                name: '',
                email: '',
                mobile: '',
                password: '',
            });
            setValidationErrors({
                email: '',
                mobile: '',
                password: '',
            });
        } else {
            alert('Please fix the validation errors.');
        }
    };

    // Input changes validations
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clearing onInput when user starts is typing
        setValidationErrors({
            ...validationErrors,
            [name]: '',
        });
    };

    // Basic validations
    const validateForm = () => {
        let isValid = true;

        // Validations for Email
        if (!formData.email) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required.',
            }));
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address.',
            }));
            isValid = false;
        }

        // Validations for mobile
        if (!formData.mobile) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                mobile: 'Mobile is required.',
            }));
            isValid = false;
        } else if (!isValidMobile(formData.mobile)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                mobile: 'Invalid mobile number.',
            }));
            isValid = false;
        }

        // Validations for password
        if (!formData.password) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required.',
            }));
            isValid = false;
        } else if (formData.password.length < 6) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 6 characters.',
            }));
            isValid = false;
        }

        return isValid;
    };

    // Basic Regex to check Email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Basic Regex to check Mobile number format
    const isValidMobile = (mobile) => {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
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
                >
                    <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                        Sign Up
                    </Typography>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                        error={!!validationErrors.email}
                        helperText={validationErrors.email}
                    />
                    <TextField
                        label="Mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                        error={!!validationErrors.mobile}
                        helperText={validationErrors.mobile}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                        error={!!validationErrors.password}
                        helperText={validationErrors.password}
                    />
                    <Button variant="contained" color="primary" onClick={handleSignupClick} sx={{ mt: 3 }}>
                        Sign Up
                    </Button>
                    <AlertDialog
                        open={showAlert}
                        onClose={() => setShowAlert(false)}
                        title="Sign Up Successful"
                        content="User signed up successfully."
                    />
                </Box>
            </Container>
        </Fragment>
    );
};

export default Signup;
