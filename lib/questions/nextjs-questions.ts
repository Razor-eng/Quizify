import { Question } from '../types';

export const nextjsQuestions: Question[] = [
  {
    id: 1,
    question: "What is the difference between getStaticProps and getServerSideProps?",
    options: [
      "getStaticProps fetches data at build time, while getServerSideProps fetches data at request time",
      "getStaticProps fetches data at runtime, while getServerSideProps fetches data at build time",
      "getStaticProps is for static sites, while getServerSideProps is for dynamic sites",
      "getStaticProps handles client-side data fetching, while getServerSideProps handles server-side rendering"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "What is the purpose of getServerSideProps?",
    options: [
      "To fetch data at runtime and server-side render a page",
      "To fetch data during build time for static generation",
      "To handle client-side data fetching",
      "To perform background image optimization"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What does the 'next/link' component do?",
    options: [
      "It provides client-side navigation between pages",
      "It dynamically loads page components",
      "It pre-renders pages",
      "It handles server-side routing"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "What is the purpose of getStaticProps?",
    options: [
      "To fetch data at runtime",
      "To fetch data at build time",
      "To handle client-side data fetching",
      "To manage component state"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the purpose of middleware in Next.js?",
    options: [
      "To handle database operations",
      "To run code before a request is completed",
      "To optimize images",
      "To manage state"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What does the 'next/image' component optimize?",
    options: [
      "Image compression and lazy loading",
      "Font rendering",
      "CSS styles",
      "JavaScript execution"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "How can you configure Next.js to support custom error pages?",
    options: [
      "By creating a _error.js file in the pages directory",
      "By using the next/error module",
      "By configuring error pages in the next.config.js",
      "By defining a custom error handler in the server.js"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "What does the 'next/font' module provide in Next.js?",
    options: [
      "It automatically loads custom fonts in an optimized way",
      "It is used to style text elements",
      "It generates font icons for UI",
      "It manages font sizes dynamically"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What does the 'next/analytics' module track in Next.js?",
    options: [
      "User interactions with the app for analytics",
      "Page loading time and performance",
      "API request handling",
      "SEO optimization"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What is the default behavior for Next.js when you navigate between pages?",
    options: [
      "It does a full page reload",
      "It pre-fetches the linked page's content",
      "It only loads the JavaScript for the linked page",
      "It waits for a user to refresh the page"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What file is used to configure global settings in a Next.js app?",
    options: [
      "next.config.js",
      "_app.js",
      "server.js",
      "index.js"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "What is the purpose of the _document.js file in Next.js?",
    options: [
      "To customize the HTML document structure for the app",
      "To define global CSS for the application",
      "To define global JavaScript code",
      "To manage server-side rendering"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which of the following is required to use API routes in Next.js?",
    options: [
      "The pages/api directory",
      "A custom server.js file",
      "The use of middleware",
      "A separate database configuration"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "What does the 'next/router' module provide in Next.js?",
    options: [
      "It allows for programmatic navigation",
      "It is used to configure routes for a page",
      "It pre-fetches the next page's JavaScript",
      "It handles the app's state management"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which feature is used to improve the performance of Next.js pages?",
    options: [
      "Static Site Generation (SSG)",
      "Server-Side Rendering (SSR)",
      "Incremental Static Regeneration (ISR)",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "What is the main benefit of Incremental Static Regeneration (ISR)?",
    options: [
      "It allows for server-side rendering on every request",
      "It enables the regeneration of static pages after a certain time period without rebuilding the entire site",
      "It optimizes dynamic pages",
      "It stores static data locally"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the role of the 'next/head' component in Next.js?",
    options: [
      "To manage the head tag of the HTML document, including meta tags and title",
      "To handle dynamic data fetching",
      "To enable server-side rendering",
      "To manage JavaScript loading"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "What is the purpose of the 'next/script' component?",
    options: [
      "To include third-party scripts in your application",
      "To define inline scripts",
      "To load JavaScript files on demand",
      "To optimize CSS loading"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Which of the following is a feature of Next.js Image Optimization?",
    options: [
      "It automatically optimizes images based on the user's device",
      "It allows you to upload images directly to the server",
      "It only supports PNG images",
      "It automatically compresses SVG files"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "What is the significance of the 'getInitialProps' method in Next.js?",
    options: [
      "It is used to fetch data server-side before rendering",
      "It is used to configure the layout of pages",
      "It is used for client-side data fetching",
      "It allows dynamic imports of modules"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "What is the purpose of next/image?",
    options: [
      "To display images without optimization",
      "To automatically optimize and serve images in modern formats",
      "To create image galleries",
      "To edit images"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "What is the purpose of .env.local file in Next.js?",
    options: [
      "To store global variables",
      "To store environment-specific variables locally",
      "To configure build settings",
      "To store component styles"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What is the purpose of next/font?",
    options: [
      "To load custom fonts without performance impact",
      "To style text elements",
      "To manage font sizes",
      "To create text animations"
    ],
    correctAnswer: 0
  }
];
