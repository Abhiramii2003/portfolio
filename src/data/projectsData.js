export const projectsData = [
  {
    id: "trademind-ai",
    title: "TradeMind AI",
    category: "AI Developer | Full Stack AI Application | FinTech",
    description:
      "An AI-powered market intelligence platform for Indian traders and investors. It combines real-time stock market data, news sentiment analysis, and contextual AI assistance.",
    fullDescription: "TradeMind AI is an AI-powered market intelligence platform for Indian traders and investors. It combines real-time stock market data, news sentiment analysis, and contextual AI assistance to help users understand market movements and make informed decisions. This project was developed during the AMD Developer Hackathon and serves as a flagship AI project demonstrating skills in AI Integration, Full Stack Development, API Integration, Financial Data Processing, NLP, Docker, and Cloud Deployment.",
    features: [
      "Live NIFTY, SENSEX, BANKNIFTY, and India VIX tracking",
      "AI-powered market assistant with real-time market context",
      "News sentiment analysis using NLP",
      "Sector performance heatmaps & Market breadth analysis",
      "Top gainers and losers tracking",
      "Company fundamentals and stock search",
      "Dynamic watchlists",
      "Intraday charts and market visualization",
      "Responsive UI for desktop and mobile devices"
    ],
    techStack: ["React", "Vite", "FastAPI", "Python", "Fireworks AI", "DeepSeek V4 Pro", "GPT-OSS", "Yahoo Finance API", "NewsAPI", "Docker", "Vercel", "Render"],
    tech: "React, Vite, FastAPI, Python, Fireworks AI, DeepSeek V4 Pro, Docker, Vercel, Render",
    githubLink: "https://github.com/Abhiramii2003/TradeMind-AI",
    liveLink: "https://trade-mind-ai-xi.vercel.app/",
    videoLink: "https://youtu.be/Slj8KozRdbk",
    featured: true,
    screenshots: []
  },
  {
    id: "therabot",
    title: "TheraBot – AI Emotional Support App",
    description:
      "An AI-powered emotional support companion that provides empathetic conversations, mood tracking, diary writing, stress-relief games, and daily streak tracking.",
    fullDescription: "TheraBot is an advanced AI emotional support application designed to provide users with a compassionate companion available 24/7. It leverages cutting-edge NLP to understand user sentiments and offer personalized support, including mood tracking, interactive diary features, and stress-relief games.",
    features: [
      "Empathetic AI conversations",
      "Daily mood and streak tracking",
      "Interactive diary writing",
      "Stress-relief games"
    ],
    tech: "React, Node.js, MongoDB, Gemini API",
    githubLink: "#",
    liveLink: "#",
    screenshots: [
      // Add your local screenshot paths here, e.g., "/assets/therabot-1.png"
    ]

  },
  {
    id: "canteen-automation",
    title: "Canteen Automation System",
    description:
      "A full-stack web application for managing digital food orders, seat availability, real-time notifications, admin analytics, and digital receipts.",
    fullDescription: "The Canteen Automation System modernizes the traditional cafeteria experience by digitizing food ordering, seating, and payment processes. It features real-time notifications for order status and provides administrators with deep insights into sales and inventory through an interactive analytics dashboard.",
    features: [
      "Digital food ordering and receipts",
      "Real-time seat availability tracking",
      "Admin dashboard with sales analytics",
      "Live order notifications"
    ],
    tech: "React, Node.js, Express, MongoDB, Bootstrap",
    githubLink: "#",
    liveLink: "#",
    screenshots: []
  },
  {
    id: "meditrack",
    title: "MediTrack – Hospital Management System",
    description:
      "Role-based healthcare system with admin, doctor, patient, and pharmacist modules. Supports appointment booking, prescriptions, reminders, and billing.",
    fullDescription: "MediTrack is a comprehensive Hospital Management System with tailored portals for different user roles: Admins, Doctors, Patients, and Pharmacists. It streamlines hospital operations from appointment scheduling to digital prescriptions, automated patient reminders, and seamless billing.",
    features: [
      "Role-based access control (Admin, Doctor, Patient, Pharmacist)",
      "Online appointment booking",
      "Digital prescriptions and automated reminders",
      "Integrated billing system"
    ],
    tech: "React, Node.js, MongoDB",
    githubLink: "#",
    liveLink: "#",
    screenshots: []
  },
  {
    id: "ai-skin-disease",
    title: "DermaSense AI: An Integrated Healthcare Platform for AI-Driven Skin Disease Classification, Virtual Psychiatric Support, and Clinical Appointment Management",
    description:
      "A full-stack MERN web application designed to detect and raise awareness about bacterial and fungal skin diseases. The system integrates AI-powered image classification, symptom assessment, appointment booking, and educational content.",
    fullDescription: "DermaSense AI is a comprehensive full-stack MERN web application designed to detect and raise awareness about bacterial and fungal skin diseases. The system integrates AI-powered image classification (for cellulitis, impetigo, ringworm, and athlete’s foot), symptom assessment, appointment booking, and educational content. Users can securely log in using JWT authentication and quickly check their skin condition or schedule appointments with healthcare professionals.",
    features: [
      "QuickCheck: Users can upload a skin image for AI-based disease detection",
      "Symptom Checker: Simple form for symptom-based assessment",
      "Appointment Booking: Schedule appointments with healthcare professionals",
      "Educational Content: Learn about common skin diseases",
      "User Authentication: Secure login system using JWT"
    ],
    tech: "React, Node.js, Express.js, MongoDB, Python (.keras model)",
    githubLink: "#",
    liveLink: "#",
    screenshots: []
  },
  {
    id: "smart-food-distribution",
    title: "Smart Food Distribution",
    description:
      "A real-time web platform connecting businesses with surplus food directly to NGOs. Features role-based portals, live WebSocket notifications, volunteer logistics, visual analytics, and a premium Glassmorphism UI.",
    fullDescription: "Smart Food Distribution is a real-time web platform designed to bridge the gap between food waste and hunger. It connects businesses (like restaurants, hotels, and caterers) that have surplus food directly with non-profit organizations (NGOs) who have the means to distribute it to those in need.",
    features: [
      "Role-Based Architecture for Restaurants and NGOs",
      "Real-Time WebSockets for instant popup notifications",
      "Volunteer Logistics for tracking delivery lifecycles",
      "Visual Analytics using Chart.js and Leaflet Maps",
      "Premium Glassmorphism UI with dark theme and smooth animations"
    ],
    tech: "Python, Django, Django Channels, JavaScript, Bootstrap 5, SQLite, Docker",
    githubLink: "#",
    liveLink: "#",
    screenshots: [
      "/assets/smart_food-home.png",
      "/assets/smart_food-restaurant.png",
      "/assets/smart_food-ngo.png"

    ]
  },
  {
    id: "ai-desktop-agent",
    title: "AI Desktop Agent (ai-system-controller)",
    description:
      "An AI-powered desktop automation assistant featuring voice commands, smart intent routing, and productivity modes. Supports application control, system monitoring, and hands-free desktop automation.",
    fullDescription: "The AI Desktop Agent is a powerful automation assistant built to control desktop applications, execute voice commands, automate workflows, and monitor system activities. It features unique productivity modes (Coding, Study, Entertainment, Interview) that automatically configure the desktop environment based on the user's current task.",
    features: [
      "Voice Assistant with Wake word support (Hey Superman)",
      "Smart Command Processing and intent detection",
      "Opens Applications (Chrome, VS Code, Notepad, Spotify, etc.) and Websites",
      "Productivity Modes (Coding, Study, Entertainment, Interview)",
      "System Monitoring (CPU, RAM, Battery) and Screenshot Capture"
    ],
    tech: "React, Node.js, Express, Axios, annyang",
    githubLink: "#",
    liveLink: "#",
    screenshots: []
  },
];
