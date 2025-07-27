import { Github, Linkedin, Mail } from 'lucide-react';

import fraudDetectionImage from '@/assets/fraud-detection.avif';
import sentimentAnalysisImage from '@/assets/sentiment-analysis.avif';
import quantumstockpredictorImage from "@/assets/stock-predictor.avif"; // Correct; 

export const personalData = {
  name: "ShadowQuant",
  location: "Davanagere, Karnataka",
  bio: "Aspiring Data Scientist and AI Enthusiast, on a mission to decode the language of data and build intelligent systems that drive innovation.",
  roles: ["Data Scientist", "Machine Learning Engineer", "Python Developer", "AI Enthusiast"],
};

export const skills = [
  "Python", "SQL", "Machine Learning", "Deep Learning", "Data Analysis", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "AWS", "Docker"
];

export const projects = [
  {
    title: "AI-Powered Financial Fraud Detection",
    description: "Developed a machine learning model to detect fraudulent transactions with high accuracy.",
    tech: ["Python", "Scikit-learn", "TensorFlow"],
    link: "https://github.com/your-username/your-project-repo", // <-- IMPORTANT: CHANGE THIS
    image: fraudDetectionImage,
  },
  {
    title:"Quantum Stock Predictor",
    description: "Advanced ML model using LSTM networks to predict stock prices with 87% percent accuracy. Implemented real time data processing and sentiment analysis.",
    tech: ["Python", "TensorFlow", "LSTM"],
    link: "https://github.com/your-username/your-project-repo",
    image: quantumstockpredictorImage,
  },
  {
    title: "NLP-Based Sentiment Analysis",
    description: "Built a model to analyze and classify sentiment from customer feedback.",
    tech: ["Python", "NLTK", "TensorFlow"],
    link: "https://github.com/your-username/your-project-repo", // <-- IMPORTANT: CHANGE THIS
    image: sentimentAnalysisImage,
  },
  // ADD MORE OF YOUR PROJECTS HERE
  // Just copy and paste one of the blocks above and change the details.
];

export const contact = {
  email: "your-email@example.com", // <-- IMPORTANT: CHANGE THIS
  socials: [
    { name: "GitHub", url: "https://github.com/your-username", icon: Github }, // <-- IMPORTANT: CHANGE THIS
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lekhan-v-t-988680312/", icon: Linkedin }, // <-- IMPORTANT: CHANGE THIS
    { name: "Email", url: "shadowquant@proton.me", icon: Mail }, // <-- IMPORTANT: CHANGE THIS
  ],
};