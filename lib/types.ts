export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: Question[];
}