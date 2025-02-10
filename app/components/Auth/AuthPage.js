import React, { useState } from 'react';
import SignUpForm from './SignUpForm'; // Adjust path as necessary
import SignInForm from './SignInForm'; // Adjust path as necessary

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="loginPage flex">
      <div className="container flex">
        {/* Left section with image */}
        <div className="VideoDiv">
          <img src="YOUR_IMAGE_PATH_HERE" alt="Carpooling" className="w-full h-full object-cover" />

          <div className="textDiv">
            {isSignIn ? (
              <>
                <h2 className="title">Welcome Back</h2>
                <p>Sign in to continue carpooling!</p>
              </>
            ) : (
              <>
                <h2 className="title">Revolutionize your commute with safer carpooling</h2>
                <p>Let's Ride together</p>
              </>
            )}
          </div>

          <div className="footerDiv flex">
            <span className="text">
              {isSignIn ? "Don’t have an account yet?" : "Already have an account?"}
            </span>
            <button onClick={() => setIsSignIn(!isSignIn)} className="btn">
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>

        {/* Right section with forms */}
        <div className="formDiv flex">
          {isSignIn ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
