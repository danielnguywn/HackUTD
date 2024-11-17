import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import Background from "../components/backround";

function SignIn() {
     // State to store input values
     const [formValues, setFormValues] = useState({
          username: '',
          email: '',
          password: ''
     });

     // Handle input change
     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormValues((prevValues) => ({
               ...prevValues,
               [name]: value
          }));
     };

     // Handle sign-in button click
     const handleSignIn = async (event) => {
          event.preventDefault();
          // Log the input values
          console.log(JSON.stringify(formValues));
          console.log(formValues);
          // You can replace the console.log with an API call or further logic
          // Example: send formValues to a server
     };

     return (
          <Box className="flex h-screen relative">
               <Background />
               <Box className="absolute top-1/2 right-[15%] transform -translate-y-1/2">
                    <Container 
                         maxWidth={false} 
                         className="flex flex-col items-center bg-white p-[69px] rounded-[50px] shadow-lg"
                         sx={{
                              fontFamily: 'Gantari, sans-serif',
                         }}
                    >
                         <Typography variant="h3" className="font-bold text-gray-800 !mb-[30px]" sx={{ fontFamily: 'Gantari, sans-serif' }}>
                              Sign Up
                         </Typography>

                         <TextField 
                              fullWidth
                              variant="outlined"
                              label="Username"
                              type="text"
                              name="username" // Added name for controlled input
                              value={formValues.username}
                              onChange={handleChange}
                              required
                              className="mb-[30px]"
                              sx={{
                                   '& .MuiOutlinedInput-root': {
                                        height: '40px',
                                        width: "351px",
                                        borderRadius: '20px',
                                        backgroundColor: '#E9E9E9',
                                        marginBottom: '30px',
                                        fontFamily: 'Gantari, sans-serif',
                                        '&:hover fieldset': {
                                             borderColor: '#3B82F6',
                                        },
                                   },
                                   '& .MuiInputLabel-outlined': {
                                        transform: 'translate(14px, 10px) scale(1)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                                   '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                              }}
                         />

                         <TextField
                              fullWidth
                              variant="outlined"
                              label="Email Address"
                              type="email"
                              name="email" // Added name for controlled input
                              value={formValues.email}
                              onChange={handleChange}
                              required
                              className="mb-[30px]"
                              sx={{
                                   '& .MuiOutlinedInput-root': {
                                        height: '40px',
                                        width: "351px",
                                        borderRadius: '20px',
                                        backgroundColor: '#E9E9E9',
                                        marginBottom: '30px',
                                        fontFamily: 'Gantari, sans-serif',
                                        '&:hover fieldset': {
                                             borderColor: '#3B82F6',
                                        },
                                   },
                                   '& .MuiInputLabel-outlined': {
                                        transform: 'translate(14px, 10px) scale(1)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                                   '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                              }}
                         />
                         
                         <TextField
                              fullWidth
                              variant="outlined"
                              label="Password"
                              type="password"
                              name="password" // Added name for controlled input
                              value={formValues.password}
                              onChange={handleChange}
                              required
                              className="mb-[30px]"
                              sx={{
                                   '& .MuiOutlinedInput-root': {
                                        height: '40px',
                                        width: "351px",
                                        borderRadius: '20px',
                                        backgroundColor: '#E9E9E9',
                                        marginBottom: '30px',
                                        fontFamily: 'Gantari, sans-serif',
                                        '&:hover fieldset': {
                                             borderColor: '#3B82F6',
                                        },
                                   },
                                   '& .MuiInputLabel-outlined': {
                                        transform: 'translate(14px, 10px) scale(1)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                                   '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                        fontFamily: 'Gantari, sans-serif',
                                   },
                              }}
                         />
                         
                         <Button 
                              variant="contained" 
                              fullWidth
                              className="text-white"
                              onClick={handleSignIn} // Updated handler
                              sx={{
                                   textTransform: 'none',
                                   boxShadow: 'none',
                                   backgroundColor: '#40B7BA',
                                   width: '351px',
                                   height: '40px',
                                   borderRadius: '20px',
                                   marginBottom: '30px',
                                   fontFamily: 'Gantari, sans-serif',
                                   '&:hover': {
                                        backgroundColor: '#40B7BA',
                                   }
                              }}
                         >
                              Sign Up
                         </Button>
                    </Container>
               </Box>
          </Box>
     );
}

export default SignIn;
