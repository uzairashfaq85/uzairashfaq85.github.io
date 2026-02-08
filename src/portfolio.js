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

/* ================================
   Skills Section
   ================================ */
const skillsSection = {
  title: "What I Do",
  subTitle:
    "I design, build, and secure embedded and RFID-based systems — from raw measurements to production-ready software platforms.",
  skills: [
    emoji("⚡ Embedded firmware development (STM32 / PIC / ESP32) using interrupt-driven, real-time architectures"),
    emoji("⚡ RFID & RTLS software platforms: phase-based processing, AoA indicators, and positioning pipelines"),
    emoji("⚡ Hardware security evaluation: CPA, EM fault injection, DFA on embedded cryptographic systems"),
    emoji("⚡ FPGA & SoC co-design: RTL (VHDL/Verilog), AXI integration, HW/SW partitioning on Zynq"),
    emoji("⚡ RF signal processing and data analytics using Python (NumPy, SciPy, Pandas)")
  ],
  softwareSkills: [
    { skillName: "C / C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "STM32", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "FreeRTOS", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "VHDL / Verilog", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Vivado / Vitis", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "RFID / RTLS", fontAwesomeClassname: "fas fa-broadcast-tower" },
    { skillName: "AES / Crypto", fontAwesomeClassname: "fas fa-lock" },
    { skillName: "Git / Linux", fontAwesomeClassname: "fab fa-github" }
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
      duration: "2025 – 2026",
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
      duration: "2020 – 2024",
      desc:
        "Strong foundation in embedded systems, digital design, control systems, RF, and power electronics."
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
      role: "Embedded Systems Engineer – RFID & RTLS Software",
      company: "Acceliot",
      companylogo: require("./assets/images/acceliot_logo.png"),
      date: "2026 – Present",
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
      date: "2024 – 2025",
      desc:
        "Embedded firmware and PCB design for industrial automation systems.",
      descBullets: [
        "Developed interrupt-driven embedded C firmware for STM32/PIC MCUs.",
        "Integrated UART/I2C drivers and real-time control loops.",
        "Designed and debugged 4-layer PCBs with SI/PI considerations.",
        "Reduced hardware bring-up time through structured HW/SW integration."
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
      image: require("./assets/images/projects/aes_cpa.png"),
      projectName: "Side-Channel Analysis on AES-128 (CPA)",
      projectDesc:
        "Recovered the full 128-bit AES key from an STM32 implementation using oscilloscope-captured power traces and correlation power analysis.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/-Side-Channel-Analysis-on-AES-128" }]
    },
    {
      image: require("./assets/images/projects/emfi_dfa.png"),
      projectName: "Fault Injection on AES-128 (EMFI & DFA)",
      projectDesc:
        "Executed EM fault injection and Differential Fault Analysis to recover cryptographic keys and study countermeasures.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/Fault-Injection-on-AES-128" }]
    },
    {
      image: require("./assets/images/projects/zynq_aes.png"),
      projectName: "FPGA-Based Out-of-Band Encryption Module (Zynq)",
      projectDesc:
        "Designed a hardware-isolated AES encryption engine with secure key management on a Zynq SoC.",
      footerLink: [{ name: "GitHub", url: "https://github.com/uzairashfaq85/-FPGA-Based-Out-of-Band-Encryption-Module-with-Key-Management-System" }]
    },
    {
      image: require("./assets/images/projects/rfid_phase_loc.png"),
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
    "Selected projects demonstrating foundations in digital design, control systems, RF, and embedded programming.",
  achievementsCards: [
    { title: "8-bit Wallace Tree Multiplier (Cadence)", subtitle: "High-speed digital arithmetic design using CMOS techniques." },
    { title: "Closed-Loop Motor & Generator Control", subtitle: "PID control in MATLAB Simulink with Arduino integration." },
    { title: "PIC18F Coffee Machine Controller", subtitle: "Assembly-level embedded control using timers and interrupts." },
    { title: "RF Transmitter & Receiver (ADS)", subtitle: "RF system design and simulation for reliable communication." },
    { title: "Buck-Boost Converter", subtitle: "Power electronics design for efficient DC voltage regulation." },
    { title: "PLC-Based Burnt Fries Detection", subtitle: "Industrial automation using PLC ladder logic." }
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
