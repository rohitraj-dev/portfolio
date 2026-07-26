const fs = require('fs');
const path = require('path');

const files = [
  'src/index.css',
  'src/components/Navbar.jsx',
  'src/components/Hero.jsx',
  'src/components/Skills.jsx',
  'src/components/Projects.jsx',
  'src/components/ProjectCard.jsx',
  'src/components/Timeline.jsx',
  'src/components/Certifications.jsx',
  'src/components/Contact.jsx',
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Education.jsx',
  'src/pages/AllProjects.jsx',
  'src/pages/ProjectDetail.jsx',
  'src/pages/Certifications.jsx',
  'src/data/timeline.js'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/#f59e0b/gi, '#5b8fa8');
    content = content.replace(/#d97706/gi, '#5b8fa8');
    
    content = content.replace(/amber-400/g, '[#5b8fa8]');
    content = content.replace(/amber-300/g, '[#5b8fa8]');
    content = content.replace(/amber-500/g, '[#5b8fa8]');
    
    if (file === 'src/data/timeline.js') {
       content = content.replace(/"amber"/g, '"#5b8fa8"');
    }
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
