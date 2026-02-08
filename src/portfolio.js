/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Keep default splash animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1800 // ms
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Uzair Ashfaq",
  title: "Hi, I'm Uzair",
  subTitle: emoji(
    "Embedded Systems & Hardware Security Engineer 🔐 | Firmware (C/C++, STM32) • PCB Design • FPGA (VHDL/Verilog) • Side-Channel Analysis (CPA) • Fault Injection (EMFI/DFA) • RF/RFID Localization"
  ),
  resumeLink: "", // If you upload resume.pdf in src/containers/greeting/resume/, keep this empty to hide button OR put a public link here to show it.
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/uzairashfaq85",
  linkedin: "https://www.linkedin.com/in/uzairashfaq85",
  gmail: "uzairashfaq85@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "I build reliable embedded systems and evaluate their security at the hardware level.",
  skills: [
    emoji(
      "⚡ Embedded firmware development for STM32/PIC/ESP32: interrupts, timers, drivers, real-time control (bare-metal & FreeRTOS)"
    ),
    emoji(
      "⚡ PCB design and bring-up: 4-layer boards, SI/PI-aware routing, debugging with oscilloscope and logic analyzer"
    ),
    emoji(
      "⚡ Hardware security: Side-Channel Analysis (CPA), EM fault injection, Differential Fault Analysis (DFA) on AES implementations"
    ),
    emoji(
      "⚡ FPGA & SoC co-design: RTL (VHDL/Verilog), Vivado/Vitis, AXI integration, HW/SW partitioning on Zynq"
    ),
    emoji(
      "⚡ RF/RFID systems: phase-based UHF RFID localization (PDoA), signal processing and optimization in Python"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "C / C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "STM32", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "FreeRTOS", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "VHDL / Verilog", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Vivado / Vitis", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Altium Designer", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "UART / SPI / I2C / CAN", fontAwesomeClassname: "fas fa-exchange-alt" },
    { skillName: "Oscilloscope / LA", fontAwesomeClassname: "fas fa-wave-square" },
    { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "RFID / RF", fontAwesomeClassname: "fas fa-broadcast-tower" },
    { skillName: "AES / Crypto", fontAwesomeClassname: "fas fa-lock" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Grenoble INP – Esisar (Université Grenoble Alpes)",
      // Optional: add a logo in ./assets/images and update below
      // logo: require("./assets/images/grenobleINP.png"),
      subHeader: "International Master in Embedded Systems Security (IMESS)",
      duration: "Sep 2025 – Present",
      desc:
        "Focus: embedded security, secure firmware, hardware security evaluation, cryptography, FPGA/SoC systems.",
      descBullets: [
        "Hardware security labs: CPA on AES-128, EMFI and DFA-based key recovery on embedded targets",
        "SoC/FPGA work: cryptographic accelerators, AXI integration, HW/SW co-design on Zynq platforms",
        "RF/IoT systems: UHF RFID localization using phase-based measurements and Python processing"
      ]
    },
    {
      schoolName: "COMSATS University Islamabad",
      // Optional: add a logo in ./assets/images and update below
      // logo: require("./assets/images/comsats.png"),
      subHeader: "BS Electrical (Electronics) Engineering",
      duration: "Sep 2020 – Aug 2024",
      desc:
        "Digital design, embedded systems, control systems, and power electronics foundations.",
      descBullets: [
        "Final Year Project: Enhanced cruise control with hazardous road detection and driver alert",
        "RTL design/verification exposure and multiple embedded/control semester projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Embedded Firmware", progressPercentage: "90%" },
    { Stack: "Hardware / PCB & Bring-up", progressPercentage: "80%" },
    { Stack: "Hardware Security & FPGA", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Embedded Systems Engineer",
      company: "Lean Automation",
      // Optional: add a logo in ./assets/images and update below
      // companylogo: require("./assets/images/leanAutomation.png"),
      date: "Sep 2024 – Aug 2025",
      desc:
        "Embedded firmware development and 4-layer PCB design for industrial automation systems.",
      descBullets: [
        "Developed bare-metal embedded C firmware for STM32/PIC MCUs using interrupt-driven control loops, timers, and FSM-based real-time task management",
        "Integrated and debugged UART/I2C drivers with robust error handling and data validation for industrial sensor interfacing",
        "Designed and revised 4-layer PCBs in Altium Designer; optimized placement/routing for SI/PI and thermal considerations, reducing bring-up/debug time (~30%)",
        "Led hardware-software integration and timing validation using oscilloscopes and logic analyzers"
      ]
    },
    {
      role: "Research Assistant (Digital Design & Verification)",
      company: "COMSATS University Islamabad, Abbottabad Campus",
      // Optional: add a logo in ./assets/images and update below
      // companylogo: require("./assets/images/comsats.png"),
      date: "Jan 2024 – Aug 2024",
      desc:
        "RTL design and verification targeting FPGA platforms.",
      descBullets: [
        "Designed a Radix-4 Booth Multiplier in VHDL targeting Xilinx Artix-7, balancing area (LUTs) and critical path delay",
        "Built testbenches and performed RTL simulation/verification in ModelSim/QuestaSim, validating corner cases prior to synthesis",
        "Implemented a Verilog 7-segment display controller with timing-aware interfacing"
      ]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "CodeAlpha (Remote)",
      date: "Aug 2024 – Sep 2024",
      desc:
        "Introductory ML work supporting future Edge AI/TinyML interest.",
      descBullets: [
        "Trained CNN and MLP models in TensorFlow and PyTorch for image classification tasks",
        "Explored deployment constraints and practical ML workflows in Python"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Featured Projects (use this as your main portfolio projects section)
const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Flagship work across hardware security, FPGA/SoC cryptography, RF/RFID localization, and embedded systems.",
  projects: [
    {
      // Optional: add an image in ./assets/images and update below
      // image: require("./assets/images/aes_cpa.png"),
      projectName: "Side-Channel Analysis on AES-128 (CPA) — STM32",
      projectDesc:
        "Performed a practical Correlation Power Analysis (CPA) attack on AES-128 running on an STM32 Nucleo target. Modified the power delivery path to improve SNR, added a GPIO trigger for trace alignment, captured oscilloscope traces, and recovered the full 128-bit secret key using a Hamming-Weight leakage model and Pearson correlation.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/uzairashfaq85/-Side-Channel-Analysis-on-AES-128"
        }
      ]
    },
    {
      // Optional: add an image in ./assets/images and update below
      // image: require("./assets/images/emfi_dfa.png"),
      projectName: "Fault Injection on AES-128 (EMFI + DFA) — STM32",
      projectDesc:
        "Injected electromagnetic faults into an AES-128 engine on STM32 using precise triggering and probing to corrupt internal states. Targeted round-level operations and applied Differential Fault Analysis (DFA) to recover the last-round key and derive the master key via reverse key schedule. Studied countermeasures (redundancy, infection) and hardening concepts.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/uzairashfaq85/Fault-Injection-on-AES-128"
        }
      ]
    },
    {
      // Optional: add an image in ./assets/images and update below
      // image: require("./assets/images/zynq_aes.png"),
      projectName:
        "FPGA-Based Out-of-Band Encryption Module with Key Management (Zynq SoC)",
      projectDesc:
        "Designed a secure ‘black-box’ encryption module on Xilinx Zynq (Zybo) where encryption keys never leave the trusted SoC domain. Implemented an AES hardware IP in programmable logic, integrated via AXI, and built bare-metal firmware on the ARM PS for key management and control. Developed a UART command protocol and a PC-side C# control application.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/uzairashfaq85/-FPGA-Based-Out-of-Band-Encryption-Module-with-Key-Management-System"
        }
      ]
    },
    {
      // Optional: add an image in ./assets/images and update below
      // image: require("./assets/images/rfid_phase_loc.png"),
      projectName: "Phase-Based UHF RFID Localization (PDoA) — Phase-Loc",
      projectDesc:
        "Built an indoor RTLS pipeline using UHF RFID phase measurements (PDoA) instead of RSSI. Implemented phase unwrapping, multipath/noise mitigation, and localization using trilateration + non-linear optimization. Achieved ~±30 cm localization error in controlled experiments with 500+ phase readings per dataset.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/uzairashfaq85/Phase-for-UHF-RFID-Localization"
        }
      ]
    },
    {
      // Optional: add an image in ./assets/images and update below
      // image: require("./assets/images/flexural_machine.png"),
      projectName: "Flexural Testing Machine — Control PCB + Firmware",
      projectDesc:
        "Designed a 4-layer control PCB in Altium and developed STM32 firmware for automated catheter kink/flexural testing. Implemented stepper/servo control, load-cell acquisition, safety interlocks, and real-time result display via touch HMI (UART). Focused on reliable interrupt/timer scheduling and robust I/O integration.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements / Certifications (curated, no clutter)
const achievementSection = {
  title: emoji("Certifications & Professional Recognition 🏅"),
  subtitle:
    "Selected credentials that strengthen engineering credibility and international readiness.",
  achievementsCards: [
    {
      title: "Registered Electrical Engineer",
      subtitle: "Pakistan Engineering Council (Issued Dec 2024)",
      // Optional image
      // image: require("./assets/images/pec.png"),
      imageAlt: "Pakistan Engineering Council",
      footerLink: []
    },
    {
      title: "IELTS (Valid through Jan 2027)",
      subtitle: "British Council (Issued Jan 2025)",
      // Optional image
      // image: require("./assets/images/britishCouncil.png"),
      imageAlt: "British Council IELTS",
      footerLink: []
    },
    {
      title: "Advanced Scheduling & Project Optimization (Primavera P6)",
      subtitle: "Packt (Issued Jun 2025)",
      // Optional image
      // image: require("./assets/images/packt.png"),
      imageAlt: "Primavera P6",
      footerLink: []
    },
    {
      title: "Selected AI / ML Coursework",
      subtitle:
        "IBM, Google Cloud, DeepLearning.AI — Foundations in AI/ML and modern tooling",
      // Optional image
      // image: require("./assets/images/ai.png"),
      imageAlt: "AI/ML Coursework",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section (disabled)
const blogSection = {
  display: false
};

// Talks Section (disabled)
const talkSection = {
  display: false
};

// Podcast Section (disabled)
const podcastSection = {
  display: false
};

// Resume Section (enabled)
const resumeSection = {
  title: "Resume",
  subtitle: "You can download my resume for full details.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internship opportunities starting Feb/March 2026 in Embedded Firmware, Secure IoT, or Hardware Security.",
  number: "", // Optional: add phone if you want it displayed
  email_address: "uzairashfaq85@gmail.com"
};

// Twitter Section (disabled)
const twitterDetails = {
  display: false
};

const isHireable = true; // You are actively seeking an internship

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
