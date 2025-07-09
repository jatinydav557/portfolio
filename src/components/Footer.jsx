import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 text-purple-300 text-base flex flex-col sm:flex-row items-center justify-between border-t border-purple-400/30 bg-background">
      <p className="text-center sm:text-left font-medium text-purple-900">
        Didn’t hear back?{" "}
        <a
          href="https://linkedin.com/in/your-linkedin" // replace with your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          
        </a>{" "}
        {" "}
        <a
          href="tel:+917340386035"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          Call me 
        </a>
         📞
      </p>

      <a
        href="#hero"
        className="mt-4 sm:mt-0 flex items-center gap-2 px-3 py-2 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-900/20 hover:text-white transition-all"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
        <span className="text-sm font-medium text-purple-900">Go to Top</span>
      </a>
    </footer>
  );
};
