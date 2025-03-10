import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe, DollarSign, CheckCircle } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import ContactButton from "./ContactButton";
import Domain3D from "./Domain3D";

const DomainSale = () => {
  const [domainName, setDomainName] = useState("aiagentshub.site");
  
  useEffect(() => {
    // Set domain name (overriding window.location.hostname detection)
    setDomainName("aiagentshub.site");
  }, []);

  const domainFeatures = [
    { icon: <Globe className="w-5 h-5 text-indigo-500" />, text: "Premium AI-related domain name" },
    { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Perfect for AI agencies and consultants" },
    { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Ready for immediate use" },
    { icon: <DollarSign className="w-5 h-5 text-yellow-500" />, text: "One-time purchase, no recurring fees" }
  ];

  return (
    <motion.div 
      className="flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-64 mb-12 rounded-lg shadow-xl overflow-hidden">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">Loading 3D Effect...</div>}>
          <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
            <Domain3D domainName={domainName} />
          </Canvas>
        </Suspense>
      </div>
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {domainName}
      </motion.h1>
      
      <motion.div 
        className="h-2 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      
      <motion.h2 
        className="text-xl md:text-3xl font-semibold mb-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        This Domain Is For Sale
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Secure this premium domain for your AI business today!
        Perfect for AI agencies, tools, and service providers.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {domainFeatures.map((feature, index) => (
          <motion.div 
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <div className="mr-3">
              {feature.icon}
            </div>
            <p className="text-gray-700">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <ContactButton email="akumflare@gmail.com" />
      
      <motion.div 
        className="mt-16 text-sm text-gray-400 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <ArrowRight className="w-4 h-4 mr-2" /> 
        Serious inquiries only
      </motion.div>
    </motion.div>
  );
};

export default DomainSale;
