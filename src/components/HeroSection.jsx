import { ArrowDown, Download } from "lucide-react";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import wavingAnimation from "@/assets/animations/wave.json";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* 🌌 Particles BG */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: {
            color: { value: "#0f0f0f00" },
          },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#888", distance: 100 },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />

      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* 👤 Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center md:text-left space-y-6 md:max-w-xl md:ml-10"
          >



            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jatin</span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Yadav</span>
            </h1>

            {/* ✍️ Typing animation */}
            <div className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-1">
              <TypeAnimation
                sequence={[
                  "AI/ML Engineer 🚀",
                  2000,
                  "MLOps & CI/CD 🛠️⚙️",
                  2000,
                  "Data Scientist 🔬",
                  2000,
                  "LLM Developer (RAG/Agents) 🤖🧠",
                  2000,
                  "NLP & Transformers 🗣️📚",
                  2000
                ]}

                speed={60}
                deletionSpeed={40}
                repeat={Infinity}
                className="inline-block"
              />
            </div>

            {/* Buttons */}
            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="cosmic-button"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#skills"
                className="cosmic-button"
              >
                Explore My Skills
              </motion.a>
            </div>
          </motion.div>

          {/* 🤖 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
          >
            <Lottie animationData={wavingAnimation} loop autoplay />
          </motion.div>
        </div>
      </div>

      {/* ↓ Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10"
      >
        <span className="text-sm text-muted-foreground mb-3">Scroll Down !!!</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
