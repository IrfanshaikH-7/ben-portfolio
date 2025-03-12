import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ben_img_1, ben_img_2, ben_img_23, ben_img_3, ben_img_34, ben_img_45, ben_img_46, ben_img_56, ben_img_6 } from '../../../assets';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen max-w-7xl mt-16 md:mt-0 mx-auto  md:gap-12 flex items-center relative flex-col justify-start md:justify-between md:flex-row  p-4 md:p-6">
        <div className='flex flex-col items-start justify-start max-w-xl' >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl font-bold  mb-8 text-start"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg mb-8 text-start"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet laborum possimus deserunt hic voluptates sapiente quod nisi, iusto, corrupti quam exercitationem provident deleniti!
        </motion.p>
        </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md  "
      >
      
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3  bg-white placeholder-gray-400 
                       border border-greeny focus:border-greeny focus:ring-2 focus:ring-greeny 
                       transition-all duration-300 outline-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3  bg-white placeholder-gray-400 
                       border border-greeny focus:border-greeny focus:ring-2 focus:ring-greeny 
                       transition-all duration-300 outline-none resize-none"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-greeny hover:bg-greeny  font-semibold py-3 px-6 
                      transition-colors duration-300 shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
