'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quizTopics } from '@/lib/quiz-data';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { getRandomQuestions } from '@/lib/utils/quiz';
import { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { QuizAnswersModal } from './quiz-answers-modal';
import { QuizProgress } from './quiz-progress';
import { ConfettiExplosion } from './confetti-explosion';

interface QuizProps {
  topicId: string;
  onBack: () => void;
}

let questions: Question[] = [];

export function Quiz({ topicId, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; userAnswer: string; correct: boolean }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);

  const topicData = quizTopics.find((t) => t.id === topicId);

  useMemo(() => {
    if (currentQuestion === 0 && topicData) {
      questions = getRandomQuestions(topicData.questions, 10);
    }
  }, [currentQuestion, topicData]);

  if (!topicData) {
    return (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="p-6">
          <p className="text-center">Topic not found</p>
          <Button onClick={onBack} className="mt-4">
            Go Back
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const maxScore = questions.length * 10;

  const handleAnswer = (selectedIndex: number) => {
    if (isAnswerLocked) return;

    setSelectedAnswer(selectedIndex);
    setIsAnswerLocked(true);

    setTimeout(() => {
      const isCorrect = selectedIndex === question.correctAnswer;
      const newScore = score + (isCorrect ? 10 : -2);

      setScore(Math.max(0, newScore));
      setAnswers([
        ...answers,
        {
          question: question.question,
          userAnswer: question.options[selectedIndex],
          correct: isCorrect,
        },
      ]);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerLocked(false);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  if (showResults) {
    const correctAnswers = answers.filter((a) => a.correct).length;
    const showConfetti = correctAnswers >= 3;

    return (
      <Card className="max-w-2xl w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 mt-4">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">{score} points</p>
            <p className="text-muted-foreground">
              You answered {correctAnswers} out of {questions.length} correctly
            </p>
          </div>

          {showConfetti && <ConfettiExplosion />}

          <QuizAnswersModal answers={answers} />

          <div className="flex gap-4">
            <Button onClick={onBack} variant="secondary" className="w-full">
              Try Another Topic
            </Button>
            <Button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setAnswers([]);
                setShowResults(false);
                setSelectedAnswer(null);
                setIsAnswerLocked(false);
              }}
              className="w-full"
            >
              Retry This Topic
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Button>
      </div>

      <Card className='min-w-[800px]'>
        <div className="p-4">
          <QuizProgress
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            score={score}
            maxScore={maxScore}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "w-full justify-start h-auto p-4 text-left",
                  isAnswerLocked && (index === selectedAnswer) && (
                    index === question.correctAnswer
                      ? "bg-green-100 dark:bg-green-900 border-green-500"
                      : "bg-red-100 dark:bg-red-900 border-red-500"
                  ),
                  isAnswerLocked && (index === question.correctAnswer) &&
                  "bg-green-100 dark:bg-green-900 border-green-500"
                )}
                onClick={() => handleAnswer(index)}
                disabled={isAnswerLocked}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}