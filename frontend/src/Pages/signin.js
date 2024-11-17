import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

function SignIn() {
     return (
          <Box className="flex h-screen relative">
               {/* Background gradient taking up most of the screen */}
               <Box className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />
               
               {/* Login container - positioned absolutely */}
               <Box className="absolute top-1/2 right-[15%] transform -translate-y-1/2">
                    <Container 
                         maxWidth={false} 
                         className="flex flex-col items-center bg-white p-[69px] rounded-[50px] shadow-lg"
                         sx={{
                              width: 'fit-content',
                              height: 'fit-content',
                              fontFamily: 'Gantari, sans-serif',
                         }}
                    >
                         <Typography variant="h3" className="font-bold text-gray-800 !mb-[30px]" sx={{ fontFamily: 'Gantari, sans-serif' }}>
                              Sign In
                         </Typography>
                         
                         <TextField
                              fullWidth
                              variant="outlined"
                              label="Email Address"
                              type="email"
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
                              Sign In
                         </Button>
                         <Typography variant="body2" className="text-black-600" sx={{ fontFamily: 'Gantari, sans-serif' }}>
                              Don't have an account? <a href="/signup" className="text-[#40B7BA]">Sign up here!</a>
                         </Typography>
                    </Container>
               </Box>
          </Box>
     );
}

export default SignIn;
