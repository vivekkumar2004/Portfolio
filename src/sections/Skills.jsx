import { FaJava, FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiAngular />, name: "Angular" },
  ];

  const repeated = [...skills, ...skills];

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(-500);

  const track1 = useRef(null);
  const track2 = useRef(null);

  // Row 1 → Left
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 130;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x1.get() - SPEED * dt;
      const loop = track1.current?.scrollWidth / 2 || 0;

      if (loop && next <= -loop) next += loop;
      x1.set(next);

      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  // Row 2 → Right
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 130;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x2.get() + SPEED * dt;
      const loop = track2.current?.scrollWidth / 2 || 0;

      if (loop && next >= 0) next -= loop;
      x2.set(next);

      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="skills"
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* PARALLAX GLOW LIKE ABOUT */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-40, 40, -40] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[600px] h-[600px] bg-[#00f0b5]/25 blur-[180px] rounded-full -top-40 -left-40"
      ></motion.div>

      <motion.div
        animate={{ x: [40, -40, 40], y: [40, -40, 40] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute w-[450px] h-[450px] bg-[#1cd8d2]/20 blur-[160px] rounded-full bottom-0 right-0"
      ></motion.div>

      {/* FLOATING PARTICLES LIKE ABOUT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 900 }}
            animate={{
              opacity: [0, 1, 0],
              y: [Math.random() * 900, -200],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-[4px] h-[4px] bg-white/30 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          ></motion.div>
        ))}
      </div>

      {/* HEADING */}
      <motion.h2
        className="text-6xl mb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc6] to-[#00aaff]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="text-lg text-white/70 mb-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Modern Tech Stack • Fast • Scalable • Powerful
      </motion.p>

      {/* ROW 1 - LEFT */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          ref={track1}
          className="flex gap-14"
          style={{ x: x1, whiteSpace: "nowrap" }}
        >
          {repeated.map((s, i) => (
            <SkillCard key={i} icon={s.icon} name={s.name} />
          ))}
        </motion.div>
      </div>

      {/* ROW 2 - RIGHT */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          ref={track2}
          className="flex gap-14"
          style={{ x: x2, whiteSpace: "nowrap" }}
        >
          {repeated.map((s, i) => (
            <SkillCard key={i} icon={s.icon} name={s.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotateX: 10,
        rotateY: -10,
        boxShadow: "0px 0px 40px rgba(0,255,255,0.4)",
      }}
      className="min-w-[160px] px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_45px_rgba(0,255,255,0.45)]
        flex flex-col items-center text-center transition-all duration-300"
    >
      <span className="text-6xl text-[#1cd8d2] drop-shadow-[0_0_15px_#1cd8d2]">
        {icon}
      </span>
      <p className="mt-3 text-white/85 text-sm font-medium tracking-wide">
        {name}
      </p>
    </motion.div>
  );
}
