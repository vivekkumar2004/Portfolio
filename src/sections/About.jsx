import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import vivek from "../assets/vivek.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "Fresher" },
    { label: "Speciality", value: "Full Stack" },
    { label: "Focus", value: "Performance-First" },
  ];

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPos({ x: clientX, y: clientY });
  };

  const glowX = useTransform(useMotionValue(pos.x), [0, window.innerWidth], [-40, 40]);
  const glowY = useTransform(useMotionValue(pos.y), [0, window.innerHeight], [-40, 40]);

  // Split Text Animation
  const sentence = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.45 },
    },
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full relative flex items-center bg-black text-white overflow-hidden"
    >
      {/* Parallax Glows */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[#00f0b5]/30 blur-[180px] -top-40 -left-40"
      ></motion.div>

      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#1cd8d2]/25 blur-[160px] bottom-0 right-0"
      ></motion.div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 800 }}
            animate={{
              opacity: [0, 1, 0],
              y: [Math.random() * 800, -100],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-[4px] h-[4px] bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 py-24 flex flex-col gap-20">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE — LIQUID GLOW BORDER + 3D TILT */}
          <motion.div
            whileHover={{ scale: 1.1, rotateX: 12, rotateY: -12 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-3xl 
                       bg-black border border-white/10 overflow-hidden shadow-[0_0_40px_#00ffd5]"
          >
            {/* Liquid Shine Moving Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[3px] border-transparent rounded-3xl"
              style={{
                borderImage:
                  "linear-gradient(45deg, #1cd8d2, #00ffcc, #0077ff, #1cd8d2) 1",
              }}
            ></motion.div>

            <img
              src={vivek}
              alt="profile"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <div className="flex-1 text-center md:text-left">

            {/* Split Text Reveal */}
            <motion.h1
              variants={sentence}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-[#00ffc6] via-[#00aaff] to-[#00ffc6]"
              style={{ lineHeight: "1.2" }}
            >
              {"Vivek Kumar Verma".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-3 text-xl text-white/80 font-semibold"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl md:max-w-3xl"
            >
              I build fast, modern and scalable digital experiences with clean
              architecture, delightful UX and high-performance engineering.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0"
            >
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-xl p-4 bg-white/5 border border-white/10 
                             backdrop-blur-xl text-center shadow-lg"
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-lg font-bold">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons with Shine Effect */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Button 1 */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#projects"
                className="relative px-6 py-3 rounded-xl bg-white text-black font-semibold overflow-hidden"
              >
                <span>View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-all"></span>
              </motion.a>

              {/* Button 2 */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#contact"
                className="relative px-6 py-3 rounded-xl border border-white/20 text-white bg-white/10 font-semibold overflow-hidden"
              >
                <span>Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-all"></span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* BOTTOM ABOUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-4xl"
        >
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a MERN stack developer obsessed with speed, smoothness, and
            crafting modern interfaces. I love turning ideas into polished,
            production-grade experiences that feel premium and intuitive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
