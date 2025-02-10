import React, { useState } from 'react';

import './auth.css';

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your sign-in logic here
    console.log('Sign In data:', formData);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-black mb-6 text-center">Bienvenue !</h2>

      {/* LinkedIn and Google Sign Up buttons with custom icons */}
      <div className="space-y-4">
        <button className="w-full border py-2 rounded-md flex items-center bg-blue-500 justify-center gap-2 hover:bg-[var(--bgColor)] mt-4 transition">
          <img src='/linkedin.png' alt="LinkedIn Icon" className="w-6 h-6   " />
          <span className="text-white">Se connecter avec LinkedIn</span>
        </button>
        <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-[var(--bgColor)] mt-4 transition">
          <img src='/google.png' alt="Google Icon" className="w-6 h-6" />
          <span className="text-black">Se connecter avec Google</span>
        </button>
      </div>

   {/* Divider with "ou" in the middle */}
   <div className="my-4 flex items-center justify-center space-x-4">
        <hr className="w-40 border-t-1 border-gray-300" />
        <span className="text-black">ou</span>
        <hr className="w-44 border-t-1  border-gray-300" />
      </div>

      {/* Sign up form */}
      <form className="space-y-4">
        <div>
          <label className="block text-black font-medium mb-2">Email</label>
          
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full border px-4 py-2 rounded-md bg-[var(--inputColor)] text-black placeholder-[var(--greyText)] focus:outline-none"
          />
        </div>
        <div>
        <label className="block text-black font-medium mb-2">Mot de passe</label>

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border px-4 py-2 rounded-md bg-[var(--inputColor)] text-black placeholder-[var(--greyText)] focus:outline-none"
          />
        </div>

        {/* Primary color button for sign-up */}
        <button
          type="button"
          className="w-full bg-[var(--primaryColor)] text-white py-2 rounded-md hover:bg-[var(--hoverColor)] transition"
        >
          Se Connecter
        </button>
      </form>

      

    </div>
  );
}

export default SignInForm;
