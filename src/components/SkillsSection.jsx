import { useState } from "react";
import {
  BarChart,
  Brain,
  Bot,
  ServerCog,
  DatabaseZap,
  Database,
  Cloud,
  Settings2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const categoryIcons = {
  "Data Analysis": <BarChart size={20} className="mr-2 text-primary" />,
  "Machine Learning & AI": <Brain size={20} className="mr-2 text-primary" />,
  "Generative AI & LLMs": <Bot size={20} className="mr-2 text-primary" />,
  MLOps: <ServerCog size={20} className="mr-2 text-primary" />,
  "Data Engineering": <DatabaseZap size={20} className="mr-2 text-primary" />,
  Databases: <Database size={20} className="mr-2 text-primary" />,
  Cloud: <Cloud size={20} className="mr-2 text-primary" />,
  Tools: <Settings2 size={20} className="mr-2 text-primary" />,
};

const skills = [
  { name: "EDA & Data Cleaning", level: 90, category: "Data Analysis" },
  { name: "Feature Engineering", level: 85, category: "Data Analysis" },
  { name: "Statistics & Probability", level: 85, category: "Data Analysis" },
  { name: "Hypothesis Testing", level: 80, category: "Data Analysis" },
  { name: "Tableau", level: 85, category: "Data Analysis" },
  { name: "Power BI", level: 78, category: "Data Analysis" },
  { name: "Pandas / NumPy", level: 90, category: "Data Analysis" },
  { name: "Matplotlib / Seaborn", level: 85, category: "Data Analysis" },

  { name: "Scikit-learn", level: 90, category: "Machine Learning & AI" },
  { name: "XGBoost", level: 75, category: "Machine Learning & AI" },
  { name: "PyTorch / TensorFlow", level: 70, category: "Machine Learning & AI" },
  { name: "CNN / RNN / LSTM", level: 75, category: "Machine Learning & AI" },
  { name: "Transformers", level: 75, category: "Machine Learning & AI" },
  { name: "NLP (TF-IDF / BOW / Word2Vec)", level: 85, category: "Machine Learning & AI" },
  { name: "Model Tuning (GridSearchCV / RandomSearch)", level: 70, category: "Machine Learning & AI" },
  { name: "Model Evaluation (AUC / Confusion Matrix)", level: 85, category: "Machine Learning & AI" },

  { name: "LangChain", level: 90, category: "Generative AI & LLMs" },
  { name: "LangGraph Studio", level: 90, category: "Generative AI & LLMs" },
  { name: "LangGraph Workflows", level: 90, category: "Generative AI & LLMs" },
  { name: "RAG Pipelines", level: 90, category: "Generative AI & LLMs" },
  { name: "Prompt Engineering", level: 90, category: "Generative AI & LLMs" },
  { name: "FAISS / ChromaDB / Pinecone", level: 80, category: "Generative AI & LLMs" },
  { name: "OpenAI / HuggingFace / Groq / Ollama", level: 85, category: "Generative AI & LLMs" },
  { name: "LLM Agents & Chains", level: 90, category: "Generative AI & LLMs" },
  { name: "Streamlit / Gradio (UI)", level: 85, category: "Generative AI & LLMs" },

  { name: "MLflow", level: 85, category: "MLOps" },
  { name: "DVC / Dagshub", level: 80, category: "MLOps" },
  { name: "Docker", level: 80, category: "MLOps" },
  { name: "Kubernetes", level: 70, category: "MLOps" },
  { name: "Jenkins", level: 70, category: "MLOps" },
  { name: "CI/CD (GitHub / GitLab / CircleCI)", level: 85, category: "MLOps" },
  { name: "Cloud Run / Flask / FastAPI", level: 85, category: "MLOps" },
  { name: "Monitoring (Grafana / Prometheus)", level: 70, category: "MLOps" },
  { name: "ArgoCD", level: 60, category: "MLOps" },
  { name: "Model Registry", level: 75, category: "MLOps" },
  { name: "Experiment Tracking", level: 85, category: "MLOps" },

  { name: "Airflow / Astro", level: 80, category: "Data Engineering" },
  { name: "ETL Pipelines", level: 85, category: "Data Engineering" },
  { name: "Apache Spark", level: 75, category: "Data Engineering" },
  { name: "Kafka", level: 70, category: "Data Engineering" },

  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "SQLite3", level: 85, category: "Databases" },
  { name: "MySQL", level: 85, category: "Databases" },
  { name: "AstraDB", level: 70, category: "Databases" },

  { name: "GCP (Cloud Run / GKE / Buckets)", level: 85, category: "Cloud" },
  { name: "AWS (EC2 / S3 / Lambda / Bedrock)", level: 70, category: "Cloud" },
  { name: "Azure Web Apps", level: 70, category: "Cloud" },
  { name: "IAM Roles & Service Accounts", level: 75, category: "Cloud" },
  { name: "Cloud Monitoring & Logging", level: 70, category: "Cloud" },

  { name: "Git & GitHub", level: 100, category: "Tools" },
  { name: "Postman / REST APIs", level: 95, category: "Tools" },
  { name: "VS Code / Cursor", level: 100, category: "Tools" },
  { name: "Jupyter / Colab", level: 100, category: "Tools" },
  { name: "Shell / Bash", level: 80, category: "Tools" },
  { name: "PyCharm", level: 85, category: "Tools" },
  { name: "Notion (Docs / Planning)", level: 100, category: "Tools" },
  { name: "Draw.io / Excalidraw", level: 70, category: "Tools" },
];

const categories = [
  "All",
  "Data Analysis",
  "Machine Learning & AI",
  "Generative AI & LLMs",
  "MLOps",
  "Data Engineering",
  "Databases",
  "Cloud",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Machine Learning & AI");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-2 flex items-center">
                {categoryIcons[skill.category]}
                <h3 className="font-semibold text-base">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
