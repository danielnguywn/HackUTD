import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            className="fill-[#4285F4]"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            className="fill-[#34A853]"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            className="fill-[#FBBC05]"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            className="fill-[#EA4335]"
        />
    </svg>
);

const SignIn = () => {
    const navigate = useNavigate();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');

    const handleAuth = (userCredential) => {
        const user = userCredential.user;
        const userInfo = { uid: user.uid, email: user.email };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log("User signed in:", userInfo);
        navigate('/dashboard');
    };

    const handleSignIn = async () => {
        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
            handleAuth(userCredential);
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                setError("Incorrect email or password");
            } else {
                setError("Error signing in. Please try again.");
            }
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            handleAuth(userCredential);
        } catch (error) {
            setError("Error signing in with Google");
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600"></div>
            <div className="relative w-full max-w-md mx-4">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                        <p className="text-gray-500 mt-2">Sign in to your account</p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                placeholder="Enter your password"
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm text-center">
                                {error}
                            </div>
                        )}
                        <button
                            onClick={handleSignIn}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                        >
                            Sign in
                        </button>
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 text-gray-500 bg-white">Or continue with</span>
                            </div>
                        </div>
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 px-4 border border-gray-200 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                        >
                            <GoogleIcon />
                            Continue with Google
                        </button>
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-500">
                        <Link to="/forgot-password" className="text-purple-600 hover:text-purple-700">
                            Forgot password?
                        </Link>
                        <span className="mx-2">•</span>
                        <Link to="/signup" className="text-purple-600 hover:text-purple-700">
                            Sign up for an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;