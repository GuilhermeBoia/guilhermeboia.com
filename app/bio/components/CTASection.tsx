"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function CTASection() {

  return (
    <section id="contato" className="relative py-16 md:py-24 px-6 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-white/3 to-white/5 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-white/2 to-white/4 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s' }} />
        
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pb-4 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">
            Vamos conversar?
          </h2>
          
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Agende uma <span className="text-white font-medium">call de 30min</span> para entendermos sobre como a tecnologia pode otimizar seus processos e fazer sua empresa crescer.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 gap-2"
              onClick={() => window.open("https://cal.com/guilhermeboia/meet", "_blank")}
              style={{ borderRadius: '12px' }}
            >
              <Calendar className="w-4 h-4" />
              Agendar call
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost"
              size="lg"
              className="gap-2 text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5583981416607", "_blank")}
              style={{ borderRadius: '12px' }}
            >
              <MessageSquare className="w-4 h-4" />
              Falar no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}