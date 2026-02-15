/* ================================
   Uzair Ashfaq – Portfolio Config
   ================================ */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import profilePhoto from "./assets/images/formal_photo.png";
import esisarLogo from "./assets/images/esisar.png";
import comsatsLogo from "./assets/images/comsats.png";
import acceliotLogo from "./assets/images/acceliot_logo.png";
import leanLogo from "./assets/images/lean_automation.png";
import codealphaLogo from "./assets/images/codealpha.png";

import zynqAES from "./assets/images/zynq_aes.png";
import emfiDfa from "./assets/images/emfi_dfa.png";
import aesCpa from "./assets/images/aes_cpa.png";
import rfidPhase from "./assets/images/rfid_phase_loc.png";

import wallaceTree from "./assets/images/wallacetree.png";
import closedLoopMotor from "./assets/images/closedloopmotor.png";
import picCoffee from "./assets/images/PIC18f.png";
import rfProject from "./assets/images/rf.png";
import buckBoost from "./assets/images/buckboost.png";
import plcProject from "./assets/images/plcproject.png";

import skillIcon from "./assets/images/skill.svg";
import aiBlockchain from "./assets/images/AI-and-Blockchain.png";

// Academic Projects Images
import enhancedCruiseControl from "./assets/images/Enhcancedcruisecontrol.png";
import automaticStreetlight from "./assets/images/AutomaticStreetlight.png";

// Certification Images
import primaveraP6 from "./assets/images/primavera-p6.png";
import ielts from "./assets/images/IELTS.png";
import googleSoftSkills from "./assets/images/GoogleSoftSkillsProgram.png";
import aspireLeaders from "./assets/images/2024AspireLeadersProgram.png";
import ibmAI from "./assets/images/IBM.png";
import linkedinProfile from "./assets/images/5waysbuildbetterlinkedinprofile.png";
import generativeAI from "./assets/images/IntroductiontoGenerativeAI.png";
import excel from "./assets/images/Excel.png";
import aiForEveryone from "./assets/images/AIforeveryone.png";
import encoderDecoder from "./assets/images/encoderdecoder.png";
import vertexAI from "./assets/images/VertexAI.png";
import fundamentalsManagement from "./assets/images/fundamentalsofmanagement.png";
import aiInsight from "./assets/images/ArtificialIntelligenceInsightforBeginners.png";
import pec from "./assets/images/PEC.png";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

/* Illustration */
const illustration = {
  animated: true
};

/* ================================
   Greeting / Hero Section
   ================================ */
const greeting = {
  username: "Uzair Ashfaq",
  title: "Hi, I’m Uzair",
  subTitle: emoji(
    "Embedded Systems Engineer 🔐 | RFID & RTLS Software • Secure Embedded Systems • FPGA & SoC Design • Hardware Security (SCA, EMFI, DFA) • RF Signal Processing"
  ),
  resumeLink: "",
  profileImage: profilePhoto,
  displayGreeting: true
};


/* ================================
   Social Links
   ================================ */
const socialMediaLinks = {
  github: "https://github.com/uzairashfaq85",
  linkedin: "https://www.linkedin.com/in/uzairashfaq85",
  gmail: "uzairashfaq85@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Designing, building, and securing embedded, FPGA, and RFID-based systems from hardware to software.",
  skills: [
    emoji("⚡ Embedded firmware development (STM32, PIC, ESP32) using interrupt-driven and RTOS-based architectures"),
    emoji("⚡ PCB Design (Altium) & System Bring-up"),
    emoji("⚡ Secure embedded systems and hardware security evaluation (CPA, EMFI, DFA)"),
    emoji("⚡ FPGA RTL Design & SoC design using VHDL/Verilog with AXI-based HW/SW co-design"),
    emoji("⚡ RFID & RTLS systems using phase-based localization and RF signal processing"),
    emoji("⚡ Digital signal processing and data analytics using Python"),
    emoji("⚡ Power electronics and control systems for industrial and embedded applications")
  ],
 softwareSkills: [
  { skillName: "C / C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "MATLAB", fontAwesomeClassname: "fas fa-chart-line" },

  // Embedded Systems
  { skillName: "STM32 ", fontAwesomeClassname: "fas fa-microchip" },
  { skillName: "Altium Designer", fontAwesomeClassname: "fas fa-layer-group" },
  { skillName: "FreeRTOS", fontAwesomeClassname: "fas fa-tasks" },
  { skillName: "UART / SPI / I2C / CAN", fontAwesomeClassname: "fas fa-exchange-alt" },
  { skillName: "Oscilloscope / Logic Analyzer", fontAwesomeClassname: "fas fa-wave-square" },

  // FPGA & HDL
  { skillName: "VHDL / Verilog", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Vivado / Vitis", fontAwesomeClassname: "fas fa-tools" },

  // RFID & Wireless
  { skillName: "RFID / RTLS / RF", fontAwesomeClassname: "fas fa-broadcast-tower" },

  // Security
  { skillName: "AES / Cryptography", fontAwesomeClassname: "fas fa-lock" },

  // Tools
  { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github" },
  { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
],
display: true
};


/* ================================
   Education
   ================================ */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Grenoble INP – Esisar (Université Grenoble Alpes)",
      logo: esisarLogo, 
      subHeader: "International Master in Embedded Systems Security (IMESS)",
      duration: "Sep 2025 – Sep2026",
      desc:
        "Advanced training in secure embedded systems, hardware security evaluation, cryptography, FPGA-based architectures, and RF/IoT systems.",
      descBullets: [
        "Side-channel analysis (CPA) and EM fault injection (DFA) on AES implementations",
        "Secure FPGA/SoC architectures with hardware-isolated key management",
        "RFID-based RTLS and phase-based localization systems"
      ]
    },
    {
      schoolName: "COMSATS University Islamabad",
      logo: comsatsLogo,
      subHeader: "BSc Electrical (Electronics) Engineering",
      duration: "Sep 2020 – Sep 2024",
      desc:
        "Embedded systems, digital design, control systems, RF fundamentals, and applied engineering projects.",
      descBullets: [
        "Final Year Project: Enhanced cruise control with hazardous road detection and driver alert",
        "Hands-on projects in embedded control, digital design, RF, and automation"
      ]
    }
  ]
};

/* ================================
   Technical Focus Bars
   ================================ */
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Embedded & RFID Software", progressPercentage: "90%" },
    { Stack: "Hardware Security & Cryptography", progressPercentage: "85%" },
    { Stack: "FPGA / SoC Design", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

/* ================================
   Work Experience
   ================================ */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Embedded Systems Engineer Intern – RFID & RTLS Software",
      company: "Acceliot",
      companylogo: acceliotLogo,
      date: "Feb 2026 – Present",
      desc:
        "Development of a standalone Software Service Platform (SSP) for UHF RFID-based RTLS and DSAI systems.",
      descBullets: [
        "Designed a vendor-agnostic data model and interfaces to ingest raw RFID reader data (RSSI, phase, timestamps, antenna IDs).",
        "Implemented phase calibration, unwrapping, and phase-difference feature extraction for AoA and positioning indicators.",
        "Built scalable Python pipelines using Pandas, NumPy, and SciPy for data cleaning, structuring, and feature engineering.",
        "Applied and validated ML models (scikit-learn) for detection and estimation with clear metrics and datasets.",
        "Delivered a reusable software package, documentation, and demonstrator targeting Linux-based deployment."
      ]
    },
    {
      role: "Embedded Systems Engineer",
      company: "Lean Automation",
      companylogo: leanLogo,
      date: "Sep 2024 – Aug2025",
      desc:
        "Embedded firmware and PCB design for industrial automation systems.",
      descBullets: [
        "Developed low-level embedded C firmware for STM32 and PIC microcontrollers using interrupt-driven architectures.",
        "Implemented UART, I2C, SPI communication drivers and real-time control loops.",
        "Designed, reviewed, and debugged 4-layer PCBs with attention to signal integrity and power distribution.",
        "Performed hardware bring-up, debugging, and system-level validation.",
        "Collaborated with cross-functional teams to integrate hardware and firmware into production-ready systems."
      ]
    },
    {
  role: "Artificial Intelligence Intern",
  company: "CodeAlpha",
  companylogo: codealphaLogo,
  date: "Aug 2024 – Sep 2024",
  desc:
    "Short-term internship focused on applied machine learning and neural network development.",
  descBullets: [
    "Developed and trained Convolutional Neural Networks (CNN) and Multi-Layer Perceptrons (MLP) using TensorFlow and PyTorch for image classification tasks.",
    "Performed dataset preprocessing, model evaluation, and performance analysis.",
    "Explored integration of machine learning models with constrained environments, forming a foundation for Edge AI and TinyML applications."
  ]
}

    
  ]
};

/* ================================
   Featured Projects
   ================================ */
const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Selected high-impact projects in hardware security, FPGA systems, and RFID-based localization.",
  projects: [
    {
      image: zynqAES,
      projectName: "FPGA-Based Out-of-Band AES Encryption (Zynq SoC)",
      projectDesc:
        "Hardware-isolated AES engine with secure key management implemented on Zynq SoC.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/uzairashfaq85/-FPGA-Based-Out-of-Band-Encryption-Module-with-Key-Management-System"
        }
      ]
    },
    {
      image: emfiDfa,
      projectName: "EM Fault Injection & DFA on AES-128",
      projectDesc:
        "Electromagnetic fault injection attack with differential fault analysis for cryptographic key recovery.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/uzairashfaq85/Fault-Injection-on-AES-128"
        }
      ]
    },
    {
      image: aesCpa,
      projectName: "Correlation Power Analysis (CPA) on AES-128",
      projectDesc:
        "Full 128-bit AES key recovery using oscilloscope power traces and statistical leakage analysis.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/uzairashfaq85/-Side-Channel-Analysis-on-AES-128"
        }
      ]
    },
    {
      image: rfidPhase,
      projectName: "Phase-Based UHF RFID Localization",
      projectDesc:
        "RF signal processing pipeline achieving ±30 cm indoor localization accuracy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/uzairashfaq85/Phase-for-UHF-RFID-Localization"
        }
      ]
    }
  ],
  display: true
};

/* ================================
   Academic / Semester Projects
   ================================ */
const otherProjects = {
  title: emoji("Academic & Semester Projects 📚"),
  subtitle:
    "Selected academic projects demonstrating foundations in digital design, control systems, RF, and embedded programming.",
   
    display: true,

  // showLimit: 4, // ← ADD THIS LINE

    projects: [
    {
      title: "Enhanced Cruise Control with Driver Alert for Hazardous Road Conditions",
      subtitle: "Final-Year Project - Advanced cruise control system with sensor fusion and real-time hazard alerts.",
      description: "Developed an advanced cruise control system that leverages sensors to enhance road safety. The system dynamically adjusts vehicle speed and provides real-time hazard alerts. Designed system architecture, implemented sensor fusion, and conducted extensive testing for improved safety and reliability.",
      image: enhancedCruiseControl,
      footerLink: []
    },
    {
      title: "8-bit Wallace Tree Multiplier (Cadence)",
      subtitle: "High-speed digital arithmetic design using CMOS and Wallace-tree architecture.",
      image: wallaceTree,
      footerLink: []
    },
    {
      title: "Closed-Loop Motor & Generator Control",
      subtitle: "PID-based control system implemented in MATLAB Simulink with Arduino integration.",
      image: closedLoopMotor,
      footerLink: []
    },
    {
      title: "PIC18F Coffee Machine Controller",
      subtitle: "Assembly-level embedded system using timers, GPIOs, and interrupts.",
      image: picCoffee,
      imageAlt: "Embedded Project",
      footerLink: []
    },
    {
      title: "RF Transmitter & Receiver (ADS)",
      subtitle: "RF system design and simulation for reliable wireless communication.",
      image: rfProject,
      footerLink: []
    },
    {
      title: "Buck-Boost Converter",
      subtitle: "Power electronics design for efficient DC voltage regulation.",
      image: buckBoost,
      footerLink: []
    },
    {
      title: "PLC-Based Burnt Fries Detection",
      subtitle: "Industrial automation system using PLC ladder logic.",
      image: plcProject,
      footerLink: []
    },
    {
      title: "Automatic Street Lighting System",
      subtitle: "Energy-efficient automatic street lighting using infrared sensors and microcontrollers.",
      description: "Developed an energy-efficient automatic street lighting system using infrared sensors and microcontrollers. The system optimizes energy usage by dynamically controlling lighting based on real-time detection, ensuring effective and sustainable operation.",
      image: automaticStreetlight,
      footerLink: []
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji("Certifications & Professional Development 📜"),
  subtitle:
    "Professional certifications, workshops and technical achievements.",
  
    display: true,

  showLimit: 6, // Show 6 certifications initially

    achievementsCards: [
    {
      title: "Advanced Scheduling and Project Optimization in Primavera P6",
      subtitle: "Issued by Packt (Jun 2025) • Credential ID: WIMCN1MORG2T",
      image: primaveraP6,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/WIMCN1MORG2T"
        }
      ]
    },
    {
      title: "IELTS",
      subtitle: "British Council • Issued: Jan 2025 · Expires: Jan 2027 • Skills: Spoken English",
      image: ielts,
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "Google Soft Skills Program",
      subtitle: "Issued: Dec 2024",
      image: googleSoftSkills,
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "2024 Aspire Leaders Program",
      subtitle: "Aspire Institute • Issued: Nov 2024",
      image: aspireLeaders,
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      subtitle: "IBM • Issued: Sep 2023 • Credential ID: 456AFFCRZLF8",
      image: ibmAI,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/456AFFCRZLF8"
        }
      ]
    },
    {
      title: "5 Ways to Build a Better LinkedIn Profile",
      subtitle: "Coursera • Issued: Feb 2024 • Credential ID: H3V9Q6Y5PBM3",
      image: linkedinProfile,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/H3V9Q6Y5PBM3"
        }
      ]
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud Training Online • Issued: Oct 2023 • Credential ID: SKD88H2YU7TN",
      image: generativeAI,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/SKD88H2YU7TN"
        }
      ]
    },
    {
      title: "Getting Started with Microsoft Excel",
      subtitle: "Google Cloud Training Online • Issued: Aug 2023 • Credential ID: BVP2H2EY8J8L",
      image: excel,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/BVP2H2EY8J8L"
        }
      ]
    },
    {
      title: "Web3 and Blockchain Fundamentals",
      subtitle: "INSEAD • Issued: Oct 2023 • Credential ID: FN4ALBJA66FC",
      image: aiBlockchain,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/FN4ALBJA66FC"
        }
      ]
    },
    {
      title: "AI For Everyone",
      subtitle: "DeepLearning.AI • Issued: Jan 2024 • Credential ID: KBQDDBWQTL3N",
      image: aiForEveryone,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/KBQDDBWQTL3N"
        }
      ]
    },
    {
      title: "Encoder-Decoder Architecture",
      subtitle: "Google Cloud Training Online • Issued: Jan 2024 • Credential ID: GMSFGANL726Q",
      image: encoderDecoder,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/GMSFGANL726Q"
        }
      ]
    },
    {
      title: "Introduction to Vertex AI Studio",
      subtitle: "Google Cloud Training Online • Issued: Jan 2024 • Credential ID: WQ9ZTBK8VKQ7",
      image: vertexAI,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/WQ9ZTBK8VKQ7"
        }
      ]
    },
    {
      title: "Fundamentals of Management",
      subtitle: "UC Irvine • Issued: Mar 2025 • Credential ID: ZIK516F9S02W",
      image: fundamentalsManagement,
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/ZIK516F9S02W"
        }
      ]
    },
    {
      title: "Artificial Intelligence – Insight for Beginners",
      subtitle: "Microsoft Student Ambassadors – Imagine Cup",
      image: aiInsight,
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "Registered Electrical Engineer",
      subtitle: "Pakistan Engineering Council (PEC) • Issued: Dec 2024",
      image: pec,
      imageAlt: "Certification",
      footerLink: []
    }
  ],
  display: true
};

/* ================================
   Contact
   ================================ */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to permanent roles and long-term contracts in Embedded Systems, RFID/RTLS, Secure IoT, and Hardware Security.",
    email_address: "uzairashfaq85@gmail.com"
};


/* Disable unused sections */
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };
const resumeSection = { display: true };

const openSource = { showGithubProfile: "true", display: true };
const isHireable = true;

/* ================================
   Export
   ================================ */
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  otherProjects,
  achievementSection,
  // certificationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
