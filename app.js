const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Company Profile Data
const companyData = {
  name: "Ferrine",
  tagline: "Building reliable open-source solutions, empowering developers and technology education.",
  vision: "To be a leading driver of open-source technology and education in Indonesia, delivering impactful software and learning resources to empower future-ready developers.",
  mission: [
    "Provide robust, secure, and accessible open-source software solutions.",
    "Develop high-quality frameworks and tools to simplify learning and speed up software development.",
    "Empower students, developers, and communities by providing practical open-source tools and educational resources.",
    "Foster a collaborative developer community to drive digital innovation in Indonesia."
  ],
  coreValues: [
    { title: "Forward Thinking", desc: "Anticipating future trends and continuously innovating to stay ahead." },
    { title: "Excellence", desc: "Striving for the highest quality and outstanding performance in everything we do." },
    { title: "Reliability", desc: "Being a dependable partner by providing consistent, secure, and robust solutions." },
    { title: "Respect", desc: "Valuing diversity, fostering open collaboration, and treating everyone with dignity." },
    { title: "Integrity", desc: "Upholding honesty, ethical standards, and transparency in all business dealings." },
    { title: "Nusantara Impact", desc: "Contributing positively to society and empowering communities across Indonesia." },
    { title: "Empowerment", desc: "Enabling businesses and individuals to reach their full potential through technology." }
  ],
  products: [
    {
      id: "fgta5js",
      name: "fgta5js",
      url: "https://fgta5js.ferrine.com",
      description: "JavaScript-based open-source framework for rapid and efficient application development.",
      badge: "Open Source Framework",
      linkText: "Explore &rarr;"
    },
    {
      id: "fgta5framework",
      name: "fgta5framework",
      url: "https://github.com/agungdhewe/webapps",
      description: "Robust framework solution for standardizing information system development.",
      badge: "Open Source Framework",
      linkText: "Get Source Code &rarr;"
    },
    {
      id: "stock-opname-apps",
      name: "Stock Opname Apps (Android, Standalone)",
      url: "https://github.com/agungdhewe/ferrine-opname",
      description: "Standalone Android application for practical and hassle-free physical stock recording and management.",
      badge: "Free Android App",
      linkText: "Get Source Code &rarr;"
    },
    {
      id: "stock-opname-enterprise",
      name: "Stock Opname Enterprise Server",
      url: "https://github.com/agungdhewe/ferrine-opname-server",
      description: "Centralized enterprise-scale stock management system for real-time multi-warehouse data synchronization.",
      badge: "Open Source Server",
      linkText: "Get Source Code &rarr;"
    },
    {
      id: "sistem-antrian-tamu",
      name: "Sistem Antrian Tamu",
      url: "https://github.com/ferrinenusantara/antridong",
      description: "Digital guest queue management solution to improve service efficiency and customer comfort.",
      badge: "Open Source Web App",
      linkText: "Get Source Code &rarr;"
    }
  ]
};

// Main landing page route
app.get('/', (req, res) => {
  res.render('index', { company: companyData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
