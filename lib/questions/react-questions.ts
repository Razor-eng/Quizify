import { Question } from '../types';

export const reactQuestions: Question[] = [
  {
    id: 1,
    question: "What is the virtual DOM in React?",
    options: [
      "A direct copy of the actual DOM",
      "A lightweight copy of the actual DOM used for performance optimization",
      "A virtual reality interface for DOM manipulation",
      "A DOM that only exists in memory"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is JSX in React?",
    options: [
      "A templating language used in React",
      "JavaScript syntax extension used to define elements",
      "A type of component in React",
      "A method to handle events in React"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the purpose of React.memo()?",
    options: [
      "To memorize React components",
      "To prevent unnecessary re-renders of functional components",
      "To store component state",
      "To cache API responses"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is the Context API used for?",
    options: [
      "To manage global state",
      "To handle routing",
      "To optimize performance",
      "To handle form validation"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "What is the difference between a class component and a functional component?",
    options: [
      "Class components can have state, functional components cannot",
      "Class components are only used in legacy React, functional components are modern",
      "Functional components are simpler, class components are more powerful",
      "Functional components are stateless, class components are stateful"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What does the 'useState' hook do in React?",
    options: [
      "It adds state to functional components",
      "It handles side-effects in components",
      "It updates the DOM directly",
      "It renders the component"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To enforce strict typing",
      "To identify potential problems in an application",
      "To prevent runtime errors",
      "To improve performance"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What is the purpose of the 'useEffect' hook in React?",
    options: [
      "To manage side effects like data fetching or subscriptions",
      "To update the state of a component",
      "To render JSX elements",
      "To handle form inputs"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components have internal state, uncontrolled don't",
      "Controlled components are managed by React state, uncontrolled use DOM refs",
      "Controlled components are faster",
      "There is no difference"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the purpose of React.Fragment?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To fragment large components into smaller ones",
      "To split code into multiple files",
      "To create reusable components"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To uniquely identify each list element for efficient re-rendering",
      "To define the structure of a list",
      "To handle the event binding",
      "To store state for each list element"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "What is the purpose of 'useReducer' in React?",
    options: [
      "It is an alternative to useState for handling more complex state logic",
      "It adds routing functionality to React",
      "It is used for fetching data",
      "It is used for side-effect management"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "How can you optimize performance in React?",
    options: [
      "By using React.memo and lazy loading components",
      "By avoiding the use of hooks",
      "By reducing the number of class components",
      "By minimizing the number of functional components"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "What is the purpose of the 'useRef' hook in React?",
    options: [
      "To persist values across renders without causing re-rendering",
      "To update the state of the component",
      "To handle side effects in a component",
      "To store CSS styles"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "What does the 'ReactDOM.render()' function do?",
    options: [
      "It renders the React component to the DOM",
      "It initializes the component's state",
      "It sends data to the server",
      "It compiles JSX into JavaScript"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript that looks similar to XML",
      "A type of JavaScript variable",
      "A method for optimizing React components",
      "A browser compatibility feature"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What is the 'useContext' hook used for in React?",
    options: [
      "To access the value of a context directly from a component",
      "To manage component state",
      "To handle form inputs",
      "To trigger side effects"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "What does the 'componentDidMount' lifecycle method do in React?",
    options: [
      "It is called after the component is rendered",
      "It is called before the component is rendered",
      "It is called every time the component updates",
      "It is called when the component is destroyed"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "What is the purpose of 'React.lazy()'?",
    options: [
      "To dynamically import components for code splitting",
      "To manage state in components",
      "To pre-fetch data before rendering",
      "To optimize images"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "What is 'PropTypes' used for in React?",
    options: [
      "To validate props passed to components",
      "To store the state of a component",
      "To handle side effects",
      "To create hooks"
    ],
    correctAnswer: 0
  }
];
