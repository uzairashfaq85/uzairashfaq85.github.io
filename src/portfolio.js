/* ================================
   Uzair Ashfaq – Portfolio Config
   ================================ */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

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
  profileImage: require("./assets/images/formal_photo.png"),
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
    emoji("⚡ Secure embedded systems and hardware security evaluation (CPA, EMFI, DFA)"),
    emoji("⚡ FPGA & SoC design using VHDL/Verilog with AXI-based HW/SW co-design"),
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
      logo: require("./assets/images/esisar.png"),
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
      logo: require("./assets/images/comsats.png"),
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
      companylogo: require("./assets/images/acceliot_logo.png"),
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
      companylogo: require("./assets/images/lean_automation.png"),
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
  companylogo: require("./assets/images/codealpha.png"),
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
  subtitle: "Representative work in hardware security, RFID systems, and secure embedded platforms.",
  projects: [
    {
      image: require("./assets/images/aes_cpa.png"),
      projectName: "Side-Channel Analysis on AES-128 (CPA)",
      projectDesc:
        "Recovered the full 128-bit AES key from an STM32 implementation using oscilloscope-captured power traces and correlation power analysis.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/-Side-Channel-Analysis-on-AES-128" }]
    },
    {
      image: require("./assets/images/emfi_dfa.png"),
      projectName: "Fault Injection on AES-128 (EMFI & DFA)",
      projectDesc:
        "Executed EM fault injection and Differential Fault Analysis to recover cryptographic keys and study countermeasures.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/Fault-Injection-on-AES-128" }]
    },
    {
      image: require("./assets/images/zynq_aes.png"),
      projectName: "FPGA-Based Out-of-Band Encryption Module (Zynq)",
      projectDesc:
        "Designed a hardware-isolated AES encryption engine with secure key management on a Zynq SoC.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/-FPGA-Based-Out-of-Band-Encryption-Module-with-Key-Management-System" }]
    },
    {
      image: require("./assets/images/rfid_phase_loc.png"),
      projectName: "Phase-Based UHF RFID Localization (RTLS)",
      projectDesc:
        "Developed a phase-based RTLS pipeline achieving ~±30 cm localization accuracy using UHF RFID.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/Phase-for-UHF-RFID-Localization" }]
    }
  ],
  display: true
};

/* ================================
   Academic / Semester Projects
   ================================ */
const achievementSection = {
  title: emoji("Academic & Semester Projects 📚"),
  subtitle:
    "Selected academic projects demonstrating foundations in digital design, control systems, RF, and embedded programming.",
  achievementsCards: [
    {
      title: "8-bit Wallace Tree Multiplier (Cadence)",
      subtitle: "High-speed digital arithmetic design using CMOS and Wallace-tree architecture.",
      image: require("./assets/images/wallacetree.png"),
      footerLink: []
    },
    {
      title: "Closed-Loop Motor & Generator Control",
      subtitle: "PID-based control system implemented in MATLAB Simulink with Arduino integration.",
      image: require("./assets/images/closedloopmotor.png"),
      footerLink: []
    },
    {
      title: "PIC18F Coffee Machine Controller",
      subtitle: "Assembly-level embedded system using timers, GPIOs, and interrupts.",
      image: require("./assets/images/PIC18f.png"),
      imageAlt: "Embedded Project",
      footerLink: []
    },
    {
      title: "RF Transmitter & Receiver (ADS)",
      subtitle: "RF system design and simulation for reliable wireless communication.",
      image: require("./assets/images/rf.png"),
      footerLink: []
    },
    {
      title: "Buck-Boost Converter",
      subtitle: "Power electronics design for efficient DC voltage regulation.",
      image: require("./assets/images/buckboost.png"),
      footerLink: []
    },
    {
      title: "PLC-Based Burnt Fries Detection",
      subtitle: "Industrial automation system using PLC ladder logic.",
      image: require("./assets/images/plcproject.png"),
      footerLink: []
    }
  ],
  display: true
};


const certificationSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Professional and academic certifications supporting my technical background.",
  certifications: [
    {
      title: "IELTS (British Council)",
      subtitle: "English proficiency certification (valid until Jan 2027).",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Certification",
      footerLink: [] // add your credential URL later if you want
    },
    {
      title: "Primavera P6 – Advanced Scheduling & Optimization",
      subtitle: "Project scheduling and optimization (Packt).",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "Registered Electrical Engineer (Pakistan Engineering Council)",
      subtitle: "Professional engineering registration (PEC).",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Certification",
      footerLink: []
    },
    {
      title: "Blockchain & AI Fundamentals",
      subtitle: "Online Professional Certification",
      image: require("./assets/images/AI-and-Blockchain.png"),
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
  achievementSection,
  certificationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
