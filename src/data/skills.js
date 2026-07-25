import { 
  SiPython, SiJavascript, SiC, 
  SiReact, SiTailwindcss, SiFramer, SiStreamlit,
  SiFastapi, SiScikitlearn,
  SiGit, SiGithub, SiVercel
} from 'react-icons/si';
import { 
  FaCode, FaDesktop, FaServer, FaBrain, FaWrench,
  FaTerminal, FaChartSimple 
} from 'react-icons/fa6';

export const skillsData = [
  {
    category: "Languages",
    categoryIcon: FaCode,
    items: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C", icon: SiC }
    ]
  },
  {
    category: "Frontend",
    categoryIcon: FaDesktop,
    items: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Streamlit", icon: SiStreamlit }
    ]
  },
  {
    category: "Backend & APIs",
    categoryIcon: FaServer,
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Claude API", icon: FaBrain },
      { name: "OpenAI API", icon: null }
    ]
  },
  {
    category: "AI/ML & Data",
    categoryIcon: FaBrain,
    items: [
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "LSTM", icon: FaChartSimple }, 
      { name: "XGBoost", icon: FaChartSimple },
      { name: "yfinance", icon: FaChartSimple }
    ]
  },
  {
    category: "Tools & Platforms",
    categoryIcon: FaWrench,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Cursor", icon: FaTerminal } 
    ]
  }
];

export const learningSkills = [
  { name: "French 🇫🇷" },
  { name: "German 🇩🇪" },
  { name: "Rust 🦀" },
  { name: "Three.js" }
];
