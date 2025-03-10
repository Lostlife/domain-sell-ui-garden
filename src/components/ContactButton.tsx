
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ContactButtonProps {
  email: string;
}

const ContactButton = ({ email }: ContactButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    toast({
      title: "Email Copied!",
      description: `${email} has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const openMailto = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=Domain%20Purchase%20Inquiry`;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a
        href={`mailto:${email}`}
        onClick={openMailto}
        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact Now
      </motion.a>
      
      <motion.button
        onClick={copyToClipboard}
        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {copied ? (
          <>
            <Check className="mr-2 h-5 w-5 text-green-500" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="mr-2 h-5 w-5" />
            Copy Email
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ContactButton;
