import { Topic } from './types';
import { reactQuestions } from './questions/react-questions';
import { nextjsQuestions } from './questions/nextjs-questions';
import { typescriptQuestions } from './questions/typescript-questions';
import { nodeQuestions } from './questions/node-questions';
import { tailwindQuestions } from './questions/tailwind-questions';

export const quizTopics: Topic[] = [
  {
    id: 'react',
    name: 'React',
    description: 'Test your knowledge of React fundamentals and advanced concepts',
    icon: 'react',
    questions: reactQuestions
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'Challenge yourself with Next.js concepts and best practices',
    icon: 'next',
    questions: nextjsQuestions
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Master TypeScript fundamentals and advanced types',
    icon: 'typescript',
    questions: typescriptQuestions
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'Test your Node.js and server-side JavaScript knowledge',
    icon: 'node',
    questions: nodeQuestions
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Learn about utility-first CSS and Tailwind concepts',
    icon: 'tailwind',
    questions: tailwindQuestions
  }
];