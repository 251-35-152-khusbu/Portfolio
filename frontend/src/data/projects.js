import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.svg";
import project4 from "../assets/projects/project4.svg";

const projects = [
  {
    id: 1,
    title: "DevConnect - Full-Stack Developer Network",
    image: project1,
    category: "Full-Stack Web App",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT"
    ],
    description:
      "A comprehensive developer collaboration platform enabling software engineers to showcase portfolios, share technical writeups, join discussions, and collaborate on open-source repositories. Features JWT authentication, real-time activity feeds, and profile markdown parsing.",
    live: "https://devconnect-demo.vercel.app",
    github: "https://github.com/251-35-152-khusbu/devconnect-fullstack",
    challenges: [
      "Designing a robust JWT authentication flow with refresh tokens and secure HTTP-only cookies",
      "Optimizing MongoDB aggregation queries for nested comments and multi-tag filtering",
      "Building a responsive markdown editor with instant preview and syntax highlighting"
    ],
    future: [
      "Direct peer-to-peer code snippet pairing using WebRTC",
      "GitHub OAuth integration to sync public repos directly into user profiles",
      "AI-driven semantic search for technical discussions using vector embeddings"
    ],
  },
  {
    id: 2,
    title: "CloudStore - High-Performance E-Commerce Platform",
    image: project2,
    category: "Full-Stack E-Commerce",
    technologies: [
      "React 19",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe API",
      "Context API"
    ],
    description:
      "A modern, full-featured electronics and tech gadgets web application. Includes instant product category filtering, price range slider, real-time shopping cart drawer with quantity adjustments, and simulated checkout flow.",
    live: "https://cloudstore-demo.vercel.app",
    github: "https://github.com/251-35-152-khusbu/cloudstore-ecommerce",
    challenges: [
      "Handling concurrent cart updates and database inventory deductions without race conditions",
      "Global cart state management with React Context without unnecessary parent re-renders",
      "Building a smooth slide-over modal drawer implementation for cart and mobile filters"
    ],
    future: [
      "Integration with live Stripe webhook event listeners for payment confirmation",
      "Automated order tracking updates sent via SendGrid transactional emails",
      "Customer wishlist system with persistent sync across devices"
    ],
  },
  {
    id: 3,
    title: "TaskFlow - Agile Kanban & Automation Workspace",
    image: project3,
    category: "Productivity & SaaS",
    technologies: [
      "React 19",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "WebSockets",
      "LocalStorage"
    ],
    description:
      "An intuitive task management and productivity dashboard inspired by Trello and Jira. Supports custom task creation, priority color-coding, multi-stage workflow columns (Backlog, In Progress, Completed), and search indexing.",
    live: "https://taskflow-kanban.vercel.app",
    github: "https://github.com/251-35-152-khusbu/taskflow-kanban",
    challenges: [
      "Seamless task state transitions across columns with proper data immutability",
      "Persistent state synchronization with browser LocalStorage and optimistic UI updates",
      "Clean UI component design adhering to accessibility standards (WCAG 2.1)"
    ],
    future: [
      "Full drag-and-drop reordering using @dnd-kit/core with smooth physics animations",
      "Firebase Firestore integration for multi-device real-time sync",
      "Subtasks checklist and due-date notification system"
    ],
  },
  {
    id: 4,
    title: "InsightOps - Real-Time System & API Telemetry",
    image: project4,
    category: "DevOps & Cloud Monitoring",
    technologies: [
      "React 19",
      "Python / FastAPI",
      "Docker",
      "Tailwind CSS",
      "WebSockets",
      "SVG Data Viz"
    ],
    description:
      "A real-time telemetry dashboard for monitoring microservices, API latency, container health, and traffic spikes. Features live area sparklines, microservice health badges, automated threshold alerts, and instant WebSocket event feeds.",
    live: "https://insightops-telemetry.vercel.app",
    github: "https://github.com/251-35-152-khusbu/insightops-telemetry",
    challenges: [
      "Streaming continuous 1-second WebSocket metric updates without dropping frontend frame rates",
      "Crafting responsive SVG data visualizations and sparklines without heavy external charting libraries",
      "Designing clear warning states when service throughput exceeds predetermined capacity limits"
    ],
    future: [
      "Prometheus & Grafana API exporter integration",
      "Slack and Discord webhook automated incident notifications",
      "Historical anomaly detection using lightweight machine learning models"
    ],
  },
];

export default projects;
