import { Project } from "../types/project";

export const projects: Project[] = [
  // ─── SOFTWARE PROJECTS ────────────────────────────────────────
  {
    slug: "helpdesk-ai",
    title: "Helpdesk.ai",
    description:
      "Enterprise Neural Orchestrator — Categorizing tickets in milliseconds with DistilBERT and auto-resolving with Gemini.",
    image: "/images/landing.png",
    category: "Software Solutions",
    pinned: true,
    features: [
      "AI-powered ticket triage with DistilBERT classification",
      "NER metadata extraction from support tickets",
      "Duplicate detection via sentence transformers",
      "Gemini-powered auto-resolution suggestions",
      "4-layer enterprise permission architecture",
      "Supabase Row-Level Security (RLS) for multi-tenancy",
      "Stripe subscription integration for tiered billing",
      "Real-time notifications and dashboard analytics",
    ],
    techStack: [
      "Next.js 15",
      "FastAPI",
      "DistilBERT v3",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "Hugging Face",
    ],
    githubUrl: "https://github.com/ritesh-1918/HELPDESK.AI",
    demoUrl: "https://helpdeskaiv1.vercel.app",
    screenshots: [
      "/images/landing.png",
      "/images/login.png",
      "/images/dashboard.png",
    ],
    content: {
      overview:
        "Helpdesk.ai is an enterprise-grade B2B neural service orchestrator. It uses context-aware AI to categorize 100% of tickets in milliseconds, bypassing L1 support lines and using Gemini for proactive auto-resolutions.",
      challenges:
        "Designing a robust multi-tenant permission system and ensuring millisecond inference times for deep learning models.",
      solutions:
        "Used Supabase RLS for secure data isolation and deployed optimized DistilBERT models to Hugging Face for high-speed inference.",
      results:
        "Live platform handling complex enterprise support workflows with a native Android ecosystem and real-time telemetry.",
    },
    youtubeId: "Bj00LzeMylM",
    links: {
      presentation: "https://ritesh-1918.github.io/HELPDESK.AI/",
      apk: "https://github.com/ritesh-1918/HELPDESK.AI/raw/main/MobileApp/application-2d277b36-4dbd-41c8-806d-cb2f19acf38a.apk"
    },
  },
  {
    slug: "notiflow",
    title: "Notiflow",
    description:
      "Intelligent mobile notification management app — coming soon. Designed to help users take control of their digital attention.",
    image:
      "https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop",
    category: "Software Solutions",
    features: [
      "Smart notification filtering and prioritisation",
      "Focus mode with custom notification rules",
      "Analytics dashboard for attention patterns",
      "Cross-platform iOS and Android support",
    ],
    techStack: ["React Native", "Expo", "Node.js", "Supabase"],
    githubUrl: "https://github.com/ritesh-1918",
    demoUrl: "",
    screenshots: [
      "https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop",
    ],
    content: {
      overview:
        "Notiflow is a mobile application designed to give users intelligent control over their notification ecosystem — reducing digital noise while ensuring nothing important is missed. Currently in active development.",
      challenges: "Balancing notification intelligence with user privacy.",
      solutions:
        "On-device ML models to classify notification importance without sending data to external servers.",
      results: "Currently in development — launching soon.",
    },
  },

  // ─── HARDWARE / IoT PROJECTS ──────────────────────────────────
  {
    slug: "shem",
    title: "SHEM – Smart Home Energy Manager",
    description:
      "Precision IoT Ecosystem — Real-time mains monitoring with Gemini AI energy forecasting and remote Blynk control.",
    image: "/images/shem/main-thumbnail.jpg",
    category: "Hardware Solutions",
    pinned: true,
    features: [
      "Real-time RMS Voltage & Current computation (95%+ accuracy)",
      "Gemini AI-powered energy advisor and anomaly detection",
      "Interactive analytics dashboard with Recharts visualization",
      "Remote appliance switching via WebSocket & Blynk 2.0",
      "Predictive cost estimation based on consumption trends",
      "Multi-user authentication and secure session management",
      "MQTT-based real-time telemetry pipeline",
      "Native I2C LCD local status display",
    ],
    techStack: [
      "ESP32",
      "React (Vite)",
      "Node.js",
      "FastAPI",
      "Socket.io",
      "MQTT",
      "Gemini API",
      "Blynk 2.0",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/ritesh-1918/SHEM",
    demoUrl: "https://shem1918.vercel.app/",
    screenshots: [
      "/images/shem/main-thumbnail.jpg",
      "/images/shem/expo-team.jpg",
      "/images/shem/internals-real.jpg",
      "/images/shem/presentation-1.jpg",
      "/images/shem/presentation-2.jpg",
      "/images/shem/landing.png",
      "/images/shem/dashboard.png",
    ],
    content: {
      overview:
        "SHEM is an enterprise-grade IoT ecosystem designed for the next generation of smart homes. By combining custom-built hardware sensors with a high-performance React dashboard and Google's Gemini AI, it provides users with unprecedented transparency into their energy footprint. The system doesn't just monitor usage; it interprets it, offering predictive budgeting and real-time anomaly detection.",
      challenges:
        "Calibrating analog SCT-013 sensors for precise RMS computation and maintaining low-latency data streams between hardware and web clients.",
      solutions:
        "Developed optimized firmware for the ESP32 using hardware interrupts for sampling and implemented a Socket.io bridge for millisecond-latency UI updates.",
      results:
        "Successfully deployed as a full-stack working prototype. Presented at the college level and recognized for its blend of hardware precision and software intelligence. Awarded 1st Prize (₹10,000 cash) by the ECE Department.",
    },
  },
  {
    slug: "racexplorer",
    title: "RaceXplorer – Real-Time Race Tracking System",
    description:
      "Low-cost IoT race timing system with millisecond precision — eliminating manual errors using Arduino, IR sensors, and an I2C LCD. Won 1st Prize at college expo.",
    image: "/images/racexplorer/device-top.png",
    category: "Hardware Solutions",
    features: [
      "Millisecond-precision race timing via IR sensor interrupts",
      "Real-time I2C LCD display of race time and results",
      "Buzzer audio feedback for start and finish line crossing",
      "Software debouncing for consistent sensor readings",
      "Compact, portable, fully self-contained enclosure",
      "No external infrastructure required — runs on 5V USB power",
      "Eliminates manual human timing errors entirely",
      "Scalable to multi-lane or multi-participant configurations",
    ],
    techStack: [
      "Arduino Uno",
      "Embedded C",
      "IR Sensors",
      "I2C LCD",
      "Buzzer Module",
    ],
    githubUrl: "https://github.com/ritesh-1918/RaceXplorer",
    demoUrl: "",
    screenshots: [
      "/images/racexplorer/device-top.png",
      "/images/racexplorer/expo-team.jpg",
      "/images/racexplorer/device-lit.png",
      "/images/racexplorer/internals.png",
    ],
    content: {
      overview:
        "RaceXplorer is an embedded IoT race timing system built from the ground up for accuracy, portability, and zero human error. The system uses a pair of IR sensors to detect athlete crossing events, triggers a buzzer for start/finish confirmation, and displays millisecond-accurate race times on an I2C LCD module — all orchestrated by an Arduino Uno. Developed during the 2nd year of the ECE program at Sanketika Polytechnic College, Visakhapatnam.",
      challenges:
        "Achieving consistent IR detection accuracy despite ambient light interference and mechanical sensor alignment tolerances.",
      solutions:
        "Implemented software-level signal debouncing and a calibration routine in firmware to normalize sensor thresholds. The enclosure was custom-designed to provide consistent sensor-to-track alignment.",
      results:
        "Fully working prototype presented at the Kanchrpalem District-Level Project Expo at Sanketika Polytechnic College. The system successfully demonstrated real-time race timing with zero human error — recognized by the ECE Department for practical innovation.",
    },
    driveVideoId: "12NIe6jqCrdlE60x1_KKHmKQXbM2mcuYQ",
  },
  {
    slug: "iot-home-automation",
    title: "Futuristic IoT Home Automation",
    description:
      "ESP8266-based smart home automation system with remote device control, sensor integration, and real-time status monitoring.",
    image:
      "https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop",
    category: "Hardware Solutions",
    features: [
      "Remote appliance control via Wi-Fi",
      "Sensor integration (temperature, humidity, motion)",
      "Real-time status monitoring dashboard",
      "Mobile-accessible control interface",
      "Relay module for mains appliance switching",
      "MQTT-based messaging protocol",
    ],
    techStack: ["ESP8266", "Embedded C", "MQTT", "Arduino IDE", "Python"],
    githubUrl: "https://github.com/ritesh-1918",
    demoUrl: "",
    screenshots: [
      "https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop",
    ],
    content: {
      overview:
        "A comprehensive home automation system built on the ESP8266 microcontroller, enabling remote control of household appliances and real-time monitoring of environmental sensors over Wi-Fi. A foundational IoT project that demonstrated end-to-end hardware-to-cloud integration.",
      challenges:
        "Managing Wi-Fi connectivity stability and relay switching safety with mains voltage.",
      solutions:
        "Implemented robust reconnection logic and optocoupler isolation for safe relay control.",
      results:
        "Fully working prototype controlling multiple appliances with real-time monitoring interface.",
    },
  },
  {
    slug: "digital-door-lock",
    title: "Digital Password Door Lock",
    description:
      "Embedded security system implementing a password-based digital door locking mechanism with keypad input and LED/buzzer feedback.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    category: "Hardware Solutions",
    features: [
      "4x4 matrix keypad input",
      "Password verification and mismatch detection",
      "Servo motor controlled door locking mechanism",
      "LED and buzzer status feedback",
      "Wrong-attempt lockout logic",
      "LCD display for user prompts",
    ],
    techStack: ["Arduino", "Embedded C", "Servo Motor", "LCD", "Keypad"],
    githubUrl: "https://github.com/ritesh-1918",
    demoUrl: "",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    ],
    content: {
      overview:
        "A digital password-based door locking system built with Arduino, a 4x4 keypad, and a servo motor. Users enter a PIN via keypad; correct entry triggers the servo to unlock, while incorrect attempts trigger a buzzer alarm. Features an LCD display for real-time user feedback.",
      challenges:
        "Implementing secure password storage and reliable keypad debouncing in embedded firmware.",
      solutions:
        "Used EEPROM for persistent password storage and implemented software debouncing for reliable key detection.",
      results:
        "Fully functional hardware security prototype, demonstrating core embedded systems and electronics integration.",
    },
  },
];
