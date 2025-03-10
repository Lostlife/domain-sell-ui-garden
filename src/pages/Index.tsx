
import { useEffect } from "react";
import DomainSale from "@/components/DomainSale";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Set the page title to match the domain for sale
    const hostname = window.location.hostname;
    const domain = hostname.replace(/^www\./i, "").split(':')[0];
    document.title = `${domain} - Premium Domain For Sale`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-indigo-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22a%22%20cx%3D%22500%22%20cy%3D%22500%22%20r%3D%22975%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%230066ff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230066ff%22%20stop-opacity%3D%22.03%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221000%22%20height%3D%221000%22%20fill%3D%22url(%23a)%22%2F%3E%3C%2Fsvg%3E')] opacity-40"></div>
      
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500 opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          ></div>
        ))}
      </div>
      
      <main className="container relative z-10 py-16">
        <DomainSale />
      </main>
      
      <footer className="w-full py-6 text-center text-gray-400 text-sm relative z-10">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} - aiagentshub.site - Premium Domain For Sale</p>
          <p className="mt-2 text-xs">All rights reserved</p>
        </div>
      </footer>
      
      <Toaster />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
          }
          33% {
            transform: translateY(-50px) translateX(100px) rotate(120deg);
          }
          66% {
            transform: translateY(50px) translateX(-50px) rotate(240deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
          }
        }
      `}} />
    </div>
  );
};

export default Index;
