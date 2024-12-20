import { Question } from '../types';

export const tailwindQuestions: Question[] = [
  {
    id: 1,
    question: "What is Tailwind CSS?",
    options: [
      "A JavaScript framework",
      "A utility-first CSS framework",
      "A database system",
      "A testing framework"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the purpose of @apply in Tailwind?",
    options: [
      "To import JavaScript modules",
      "To extract utility classes into custom CSS",
      "To define variables",
      "To create animations"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "How does Tailwind handle responsive design?",
    options: [
      "It doesn't support responsive design",
      "Using media query syntax",
      "Using breakpoint prefixes like sm:, md:, lg:",
      "Using separate CSS files"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is the purpose of the 'text-center' class in Tailwind CSS?",
    options: [
      "To center the text horizontally",
      "To center the text vertically",
      "To change the font size",
      "To align the text to the left"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "How do you create a custom color in Tailwind CSS?",
    options: [
      "By modifying the global CSS file",
      "By using the 'colors' key in the tailwind.config.js file",
      "By using the 'color' property in the HTML file",
      "By applying a background color directly in the HTML file"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What is the default font family used in Tailwind CSS?",
    options: [
      "Helvetica, Arial, sans-serif",
      "Inter, sans-serif",
      "Times New Roman, serif",
      "Courier, monospace"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "How do you apply a margin in Tailwind CSS?",
    options: [
      "Using the 'm' class followed by the size (e.g., m-4)",
      "Using the 'ml' class for left margin only",
      "Using the 'mr' class for right margin only",
      "Using the 'margin' property in the CSS file"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "How can you create a grid layout in Tailwind CSS?",
    options: [
      "By using the 'grid' class",
      "By using the 'flex' class",
      "By using the 'block' class",
      "By using the 'columns' class"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What does the 'bg-red-500' class do in Tailwind CSS?",
    options: [
      "Sets the background color to red",
      "Sets the background color to light red",
      "Sets the text color to red",
      "Sets the border color to red"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "How do you hide an element on all screen sizes in Tailwind CSS?",
    options: [
      "Using the 'hidden' class",
      "Using the 'invisible' class",
      "Using the 'no-display' class",
      "Using the 'visibility-hidden' class"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "How do you apply padding in Tailwind CSS?",
    options: [
      "Using the 'p' class followed by the size (e.g., p-4)",
      "Using the 'pad' class",
      "Using the 'padding' class",
      "Using the 'pad-4' class"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "How do you customize the breakpoints in Tailwind CSS?",
    options: [
      "By modifying the 'screens' key in tailwind.config.js",
      "By adding media queries directly in the CSS file",
      "By using inline CSS in HTML",
      "By changing the default values in the 'tailwind.config.js'"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which class is used to create a flexbox container in Tailwind?",
    options: [
      "flex",
      "flex-box",
      "display-flex",
      "box-flex"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "How do you make an element responsive using Tailwind?",
    options: [
      "By using breakpoint prefixes like sm:, md:, lg:",
      "By using media queries in CSS files",
      "By adding responsive- to the class",
      "By modifying the global configuration file"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which utility class in Tailwind would you use to set the font size of an element?",
    options: [
      "text-xs, text-sm, text-lg, text-xl, etc.",
      "font-size-xs, font-size-sm, font-size-lg",
      "font-xs, font-sm, font-lg",
      "text-size-xs, text-size-sm"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which class would you use to center a div element vertically and horizontally in Tailwind?",
    options: [
      "flex items-center justify-center",
      "center-horizontal center-vertical",
      "align-center justify-center",
      "margin-center"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "How can you apply shadows to elements in Tailwind CSS?",
    options: [
      "Using the 'shadow' class followed by the size (e.g., shadow-md)",
      "Using the 'box-shadow' class",
      "Using the 'shadow' property in CSS",
      "Using the 'drop-shadow' class"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "What does the 'border' class do in Tailwind?",
    options: [
      "It applies a border around the element",
      "It adds a margin to the element",
      "It adds padding inside the element",
      "It defines the background color"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "How can you enable dark mode in Tailwind CSS?",
    options: [
      "By adding the 'dark' class",
      "By setting dark mode in the tailwind.config.js file",
      "By using the 'mode-dark' class",
      "By enabling the dark-mode attribute in the HTML"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What is the default configuration file used by Tailwind CSS?",
    options: [
      "tailwind.config.js",
      "tailwind.css",
      "config.tailwind.js",
      "tailwind-settings.js"
    ],
    correctAnswer: 0
  }
];
