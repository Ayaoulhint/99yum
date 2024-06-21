import React from 'react';
import largeImage from '../assets/contact.jpg'; 

const ContactUs = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen mt-0">
      <div className="w-1/3 pr-10">
        <img src={largeImage} alt="Contact Us" className="rounded-lg shadow-md max-w-full h-auto"/>
      </div>
      <div className="w-1/2">
        <h1 className="text-7xl font-bold mb-5">Contact us</h1>
        <h1 className="text-orange-500 font-bold text-7xl ml-14">  —— Want a recipe?</h1>
        <p className="text-lg mb-3 mt-3">Have a question, suggestion, or just want to say hello? We'd love to hear from you! Feel free to reach out to us using the form below, and we'll get back to you as soon as possible.</p>
        <form className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

          <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

          <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="py-2 px-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>

          <button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 text-white rounded-md shadow-lg hover:from-red-500 hover:to-orange-500 transition-colors duration-300">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
