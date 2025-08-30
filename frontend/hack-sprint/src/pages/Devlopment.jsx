import React, { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Twitter, Facebook, Users, Trophy, Code, Zap, Clock, Star } from "lucide-react";

const socialLinks = [
  { name: 'GitHub', icon: <Github size={22} />, url: 'https://github.com/devlup-labs/HackSprint' },
  { name: 'Instagram', icon: <Instagram size={22} />, url: 'https://www.instagram.com/hack.sprint?igsh=MWN6bjlldTV2Z2Nqdg==' },
  { name: 'LinkedIn', icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/company/devlup-labs/' },
  { name: 'Twitter', icon: <Twitter size={22} />, url: 'https://x.com/devluplabs' },
  { name: 'Facebook', icon: <Facebook size={22} />, url: 'https://www.facebook.com/devluplabs/' }
];

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1c] text-white relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          33% { transform: translateY(-15px) translateX(10px) scale(1.1); opacity: 0.6; }
          66% { transform: translateY(-25px) translateX(-5px) scale(0.9); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
        }
        @keyframes glow {
          0% { filter: drop-shadow(0 0 15px rgba(22, 243, 110, 0.5)); }
          50% { filter: drop-shadow(0 0 35px rgba(22, 243, 110, 0.8)) drop-shadow(0 0 50px rgba(22, 243, 110, 0.3)); }
          100% { filter: drop-shadow(0 0 15px rgba(22, 243, 110, 0.5)); }
        }
        @keyframes fadeInUp {
          from { 
            transform: translateY(40px); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        @keyframes subtlePulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(22, 243, 110, 0.1), inset 0 0 20px rgba(22, 243, 110, 0.05); 
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(22, 243, 110, 0.2), inset 0 0 30px rgba(22, 243, 110, 0.1); 
            transform: scale(1.02);
          }
        }
        @keyframes progressGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(22, 243, 110, 0.3); }
          50% { box-shadow: 0 0 20px rgba(22, 243, 110, 0.6); }
        }
        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .glow-animation {
          animation: glow 4s ease-in-out infinite;
        }
        .subtle-pulse {
          animation: subtlePulse 3s ease-in-out infinite;
        }
        .progress-glow {
          animation: progressGlow 2s ease-in-out infinite;
        }
        .text-shimmer {
          background: linear-gradient(
            90deg,
            rgba(34, 197, 94, 0.8) 0%,
            rgba(22, 243, 110, 1) 50%,
            rgba(34, 197, 94, 0.8) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          animation: textShimmer 3s linear infinite;
        }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(22, 243, 110, 0.2);
        }
      `}</style>

      {/* <FloatingParticles /> */}

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(22, 243, 110, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 243, 110, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <div className="text-center mb-12 fade-in-up">
          <div className="relative inline-block mb-6">
            <img
              src="hackSprint.webp"
              alt="HackSprint Logo"
              className="w-48 md:w-64 glow-animation mx-auto hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-green-400/20 blur-xl rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl ZaptronFont text-shimmer tracking-wide leading-tight">
              UNDER DEVELOPMENT
            </h1>
            <div className="flex items-center justify-center gap-3 text-green-400">
              <Zap size={24}/>
              <p className="text-lg md:text-2xl font-light tracking-wider opacity-90">
                Crafting the Future of Hackathons
              </p>
              <Zap size={24} />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="relative group">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center hover-lift subtle-pulse">
              <Users size={40} className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">
                <AnimatedCounter end={300} />+
              </div>
              <p className="text-green-200 font-medium">Active Users</p>
              <p className="text-green-400/70 text-sm mt-1">Ready to innovate</p>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center hover-lift subtle-pulse" style={{animationDelay: '0.3s'}}>
              <Trophy size={40} className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">
                <AnimatedCounter end={150} />+
              </div>
              <p className="text-green-200 font-medium">Quiz Participations</p>
              <p className="text-green-400/70 text-sm mt-1">Knowledge tested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-up" style={{animationDelay: '1.5s'}}>
        <div className="flex items-center gap-6 bg-gradient-to-r from-green-900/40 to-green-800/30 backdrop-blur-sm border border-green-500/30 rounded-full px-8 py-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300"
              style={{animationDelay: `${1.8 + index * 0.1}s`}}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}