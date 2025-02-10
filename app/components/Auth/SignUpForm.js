import React from 'react';

const SignUpForm = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-black mb-6 text-center">Inscrivez-vous en un clic !</h2>

      {/* LinkedIn and Google Sign Up buttons with custom icons */}
      <div className="space-y-4">
        <button className="w-full border py-2 rounded-md flex items-center  bg-blue-500 justify-center gap-2 hover:bg-[var(--bgColor)] mt-4 transition">
        <img src='/linkedin.png' alt="LinkedIn Icon" className="w-6 h-6" />
          <span className="text-white">S'inscrire avec LinkedIn</span>
        </button>
        <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-[var(--bgColor)] mt-4 transition">
        <img src='/google.png'alt="Google Icon" className="w-6 h-6" />
          <span className="text-black">S'inscrire avec Google</span>
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
          <label className="block text-black font-medium mb-1">Nom & Prenom</label>
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full border px-4 py-2 rounded-md bg-[var(--inputColor)] text-black placeholder-[var(--greyText)] focus:outline-none"
          />
        </div>
        <div>
        <label className="block text-black font-medium mb-1">Email</label>

          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full border px-4 py-2 rounded-md bg-[var(--inputColor)] text-black placeholder-[var(--greyText)] focus:outline-none"
          />
        </div>
        <p className="mt-1 text-xs text-black ">
        N'oubliez pas de valider votre adresse e-mail.
      </p>
        <div>
        <label className="block text-black font-medium mb-1">Mot de passe</label>
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
          S'inscrire
        </button>
      </form>

      

      <p className="mt-6 text-center text-black">
        <span className="text-[var(--primaryColor)] font-medium">
          Activité du profil, Nouvelles fonctionnalités et La newsletter qui fait le taf.
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
