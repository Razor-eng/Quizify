import { Question } from '../types';

export function getRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function calculateScore(answers: { correct: boolean }[]): number {
  return answers.reduce((score, answer) => 
    score + (answer.correct ? 10 : -2), 0
  );
}