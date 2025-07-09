import { BrainCircuit, Bot, Workflow, Cloud, ServerCog } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              AI/ML Engineer | MLOps Specialist | LLM & Agentic Workflow Engineer
            </h3>

            <p className="text-muted-foreground">
              I build production-grade AI systems that integrate classical machine learning, MLOps, generative and agentic AI. From model development and deployment to orchestrating LangChain/LangGraph-based intelligent workflows, I bring together automation, scalability, and real-world impact.
            </p>

            <p className="text-muted-foreground">
              My strength lies in creating robust, modular, and cloud-ready ML pipelines using Python, Docker, LangGraph, and CI/CD practices. I value clean architecture, performance optimization, and continuous delivery — with a deep focus on translating research and prototypes into scalable systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & MLOps</h4>
                  <p className="text-muted-foreground">
                    Designing, training, and deploying ML models using Scikit-learn, PyTorch, MLflow, CI/CD, and containerized APIs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Generative & Agentic AI</h4>
                  <p className="text-muted-foreground">
                    Building LLM agents, RAG pipelines, and GenAI apps using LangChain, LangGraph, and HuggingFace.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">LangGraph Workflows</h4>
                  <p className="text-muted-foreground">
                    Crafting modular agentic architectures and stateful workflows with LangGraph Studio.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ServerCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Data Engineering</h4>
                  <p className="text-muted-foreground">
                    Experience with GCP, AWS, Docker, Kubernetes, ETL pipelines, and real-world data workflows.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
