import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:club.neversoft@gmail.com?subject=Message%20de%20${encodeURIComponent(firstName)}%20${encodeURIComponent(lastName)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-center text-white w-full mt-24">
        <h1 className="text-4xl font-bold mb-8">Contactez-nous !</h1>
        <div className="mx-auto max-w-md">
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full px-4 py-2 rounded bg-gray-200 text-black mb-2"
          />
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full px-4 py-2 rounded bg-gray-200 text-black mb-2"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full px-4 py-2 rounded bg-gray-200 text-black mb-4"
            rows="4"
          ></textarea>
          <button onClick={handleSendEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Envoyer un e-mail</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
