"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Sparkles, Calendar, MessageSquare } from "lucide-react";
import { NavBar } from "./NavBar";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* NavBar */}
      <NavBar />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Gradient Orbs - Dark Mode */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">

        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-sm mb-6 sm:mb-8 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-semibold text-white">Transformação digital para empresas</span>
          </motion.div>
          
          {/* Headline with Gradient Text */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight mb-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className="block">Transforme seu</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              negócio com
            </span>
            <span className="block">tecnologia e IA</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            Ganhe organização, automação e entregas encantadoras.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 gap-2 px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-105"
              style={{ borderRadius: '12px' }}
              onClick={() => window.open("https://cal.com/guilhermeboia/meet", "_blank")}
            >
              <Calendar className="w-5 h-5" />
              Agende sua call de 30min
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="gap-2 border-white/20 text-white hover:bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105"
              style={{ borderRadius: '12px' }}
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5583981416607", "_blank")}
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </motion.div>

          {/* Bottom Accent */}
          <motion.div 
            className="mt-16 text-gray-500 text-sm"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            Mostre inovação enquanto outros ainda estão no básico.{" "}
            <span className="hidden md:inline">E ganhe um diferencial para sua empresa.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}