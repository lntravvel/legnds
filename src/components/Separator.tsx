import { motion } from 'motion/react';

export function Separator() {
  return (
    <div className="w-full flex justify-center py-4 relative z-10">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-3/4 max-w-sm h-px relative flex items-center justify-center"
      >
        {/* Subtle line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-brand-primary)]/40 to-transparent" />
        
        {/* Animated glowing center point */}
        <motion.div 
          animate={{ 
            boxShadow: [
              '0 0 5px rgba(0,243,255,0.2)', 
              '0 0 15px rgba(0,243,255,0.6)', 
              '0 0 5px rgba(0,243,255,0.2)'
            ],
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]"
        />
        
        {/* Extra glowing lines branching out subtly */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]"
        />
      </motion.div>
    </div>
  );
}
