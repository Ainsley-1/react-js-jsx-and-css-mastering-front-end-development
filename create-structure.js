const fs = require('fs');
const path = require('path');

const structure = [
  'src/components/ui/Button.jsx',
  'src/components/ui/Card.jsx',
  'src/components/ui/index.js',
  'src/components/layout/Navbar.jsx',
  'src/components/layout/Footer.jsx',
  'src/components/layout/Layout.jsx',
  'src/components/layout/index.js',
  'src/components/task/TaskManager.jsx',
  'src/components/task/TaskList.jsx',
  'src/components/task/TaskItem.jsx',
  'src/components/task/index.js',
  'src/pages/Home.jsx',
  'src/pages/Tasks.jsx',
  'src/pages/ApiDemo.jsx',
  'src/pages/index.js',
  'src/hooks/useLocalStorage.js',
  'src/hooks/useApi.js',
  'src/hooks/index.js',
  'src/contexts/ThemeContext.js',
  'src/contexts/index.js',
  'src/utils/constants.js',
  'src/utils/helpers.js',
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'tailwind.config.js',
  'postcss.config.js'
];

structure.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  const dir = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create empty file
  fs.writeFileSync(filePath, '');
});

console.log('Folder structure created successfully!');