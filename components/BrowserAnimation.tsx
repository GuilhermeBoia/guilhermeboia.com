"use client";

import { motion } from "framer-motion";

export default function BrowserAnimation() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/30 p-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Container */}
      <motion.div 
        className="relative z-10 bg-black/40 rounded-lg border border-gray-600/20 p-6 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Browser Header */}
        <motion.div 
          className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-600/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-1.5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500/80"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500/80"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500/80"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
          <motion.div 
            className="flex-1 bg-gray-800/50 rounded px-3 py-1 text-xs text-gray-500 ml-4"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            localhost:3000
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <div className="grid grid-cols-3 gap-4">
          {/* Sidebar */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-6 h-6 rounded bg-blue-500/20 border border-blue-400/30 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </motion.div>
              <motion.div 
                className="h-2 bg-gray-600/40 rounded flex-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
            <div className="space-y-2 pl-8">
              {[100, 75, 50, 66, 33].map((width, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 rounded ${i === 0 ? 'bg-gray-700/60' : 'bg-gray-700/40'}`}
                  style={{ width: `${width}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Header */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="w-6 h-6 rounded-full bg-gray-600/40"></div>
              <motion.div 
                className="h-2 bg-blue-500/60 rounded w-16"
                animate={{ 
                  backgroundColor: ["rgba(59, 130, 246, 0.6)", "rgba(16, 185, 129, 0.6)", "rgba(59, 130, 246, 0.6)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Navigation */}
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div 
                className="h-1.5 bg-gray-600/40 rounded w-12"
                animate={{ width: [48, 56, 48] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="h-1.5 bg-gray-700/40 rounded flex-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 bg-gray-700/30 rounded border border-gray-600/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  whileHover={{ 
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    backgroundColor: "rgba(55, 65, 81, 0.4)"
                  }}
                />
              ))}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i + 3}
                  className="h-10 bg-gray-700/40 rounded border border-gray-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                  whileHover={{ 
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    backgroundColor: "rgba(55, 65, 81, 0.5)"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Streaming Lines - Melhoradas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Linha de conexão animada 1 */}
        <motion.div 
          className="absolute bottom-12 left-8 w-24 h-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        >
          <motion.div 
            className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>
        
        {/* Linha de conexão animada 2 */}
        <motion.div 
          className="absolute top-12 right-12 w-32 h-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 4 }}
        >
          <motion.div 
            className="w-full h-full bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"
            animate={{ x: [100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </motion.div>

        {/* Linha vertical de dados */}
        <motion.div 
          className="absolute right-16 top-8 w-0.5 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
        >
          <motion.div 
            className="w-full h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent rounded-full"
            animate={{ y: [-20, 20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
