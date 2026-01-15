"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6"; // React icons for arrow
import { CgCalendarDates } from "react-icons/cg";

const Hero = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#1c1c1c] text-white overflow-hidden px-4">
      {/* Top Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-12 flex items-center gap-3 rounded-full bg-white px-6 py-2 shadow-[0_0_25px_#71ddae]"
      >
        <Image
          src="/assets/2_Logo_Bulle.png"
          alt="Logo"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
        <span className="text-sm font-bold uppercase tracking-wider text-black">
          CRÉER UN SITE WEB <span className="underline decoration-2 underline-offset-4">VRAIMENT</span> UNIQUE
        </span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-4xl mx-auto z-10"
      >
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] font-medium leading-[1.2] mb-8 tracking-tight">
          <motion.span variants={itemVariants} className="block">
            Votre <span className="text-[#71ddae]">site</span> doit <span className="text-[#71ddae]">donner envie</span> de
          </motion.span>
          <motion.span variants={itemVariants} className="block relative">
            <span className="text-[#71ddae]">rester</span>, pas de{" "}
            <span className="relative inline-block text-[#71ddae]">
              revenir 
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#1c1c1c] -translate-y-1/2" /> <span className="text-white">en</span>
            </span>
          </motion.span>
          <motion.span variants={itemVariants} className="block relative text-[#71ddae]">
             <span className="relative inline-block">
              arrière.
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#1c1c1c] -translate-y-1/2" />
            </span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
        >
          Design moderne, SEO solide, Suivi complet :<br />
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 relative"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5fcca1] text-black font-bold py-3 px-8 rounded-md text-lg flex items-center gap-2 hover:bg-[#52b58e] transition-colors"
          >
            <span className="text-xl"><CgCalendarDates/></span> Prendre RDV
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-gray-600 text-white font-medium py-3 px-6 rounded-md text-lg flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            Découvrir nos projets <FaArrowDown className="rotate-45" />
          </motion.button>

          {/* Decorative Arrow (Desktop Only) */}
          <div className="hidden lg:block absolute -bottom-16 -left-12 pointer-events-none">
             <Image
              src="/assets/3_Un_Ptit_Click.png"
              alt="Un p'tit click ?"
              width={150}
              height={80}
              className="w-32 h-auto opacity-90 -rotate-12"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
