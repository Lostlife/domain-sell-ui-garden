
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import ContactButton from "./ContactButton";

const DomainSale = () => {
  const [domainName, setDomainName] = useState("");
  
  useEffect(() => {
    // Get the current domain name from the window location
    const hostname = window.location.hostname;
    // Remove www. if present and any subdomain
    const domain = hostname.replace(/^www\./i, "").split(':')[0];
    setDomainName(domain);
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <Mail className="text-white w-10 h-10" />
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {domainName}
      </motion.h1>
      
      <motion.div 
        className="h-2 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      
      <motion.h2 
        className="text-xl md:text-3xl font-semibold mb-8 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        This Domain Is For Sale
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Are you interested in purchasing this domain name? 
        Please reach out via email to discuss acquisition details.
      </motion.p>
      
      <ContactButton email="akumflare@gmail.com" />
      
      <motion.div 
        className="mt-16 text-sm text-gray-400 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <ArrowRight className="w-4 h-4 mr-2" /> 
        Serious inquiries only
      </motion.div>
    </motion.div>
  );
};

export default DomainSale;
