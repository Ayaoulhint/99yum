import React, { useRef, useState } from 'react';
import topImage from '../assets/contact.jpg'; 
import sideImage from '../assets/contact.jpg'; // Add the side image here
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05fgxxg', 'template_58skt7k', form.current, 'ust93MYvgcaq42yKg')
      .then(() => {
        alert('Message Sent');
      }, (error) => {
        console.log('FAILED...', error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        <img src={topImage} alt="Contact Us" className="w-full h-80 object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-8 px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:pr-10 flex justify-center items-center">
          <img src={sideImage} alt="Side Image" className="rounded-lg shadow-md max-w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 text-start">
        <h1 className=" text-6xl md:text-7xl italic mt-10 underline bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text mx-auto p-4 font-extrabold mb-8">
      —— Want a recipe?</h1>          
      <p className="md:text-lg mb-3 mt-3 text-md">


          {/* class="text-center text-6xl md:text-7xl italic mt-10 underline bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text mx-auto p-4 font-extrabold mb-8" */}




            Have a question, suggestion, or just want to say hello? We'd love to hear from you! 
            Feel free to reach out to us using the form below, and we'll get back to you as soon as possible.
          </p>
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className="md:text-lg text-md font-medium mb-2">Name</label>
            <input type="text" id="name" name="user_name" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              value={name}
              onChange={(e) => setName(e.target.value)} required 
            />

            <label htmlFor="email" className="md:text-lg text-md font-medium mb-2">Email</label>
            <input type="email" id="email" name="user_email" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required
            />

            <label htmlFor="message" className="md:text-lg text-md font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)} required
            ></textarea>

            <button type="submit" value="send" className="bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 text-white rounded-md shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300 mb-10">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
