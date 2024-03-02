import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function Contact() {
  const [state, handleSubmit] = useForm("myyrjbvv");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Soumet les données du formulaire via Formspree
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return <div>
      <div>
        <NavBar />
      </div>
      <div className='flex justify-center items-center my-40'>
        <div>
          <p className='text-white text-4xl mb-4' id='contact'>Merci pour votre message !</p>
          <p className='text-white text-lg text-center'>Nous vous répondrons dès que possible.</p>
        </div>
      </div>
      <div>
        <Footer />
        </div>
      </div>
    
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[50%]'>
        <h1 className='text-5xl text-center text-white mb-16' id='contact'>Contact</h1>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleFormSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Adresse e-mail:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-orange-500 hover:bg-orange-400 flex items-center justify-center text-white font-semibold py-2 px-4 rounded-lg w-full">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default Contact;
