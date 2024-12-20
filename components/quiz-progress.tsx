'use client';

import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  maxScore: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, score, maxScore }: QuizProgressProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const scorePercentage = (score / maxScore) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
        <span>Score: {score}/{maxScore}</span>
      </div>
      <div className="space-y-2">
        <Progress
          value={progressPercentage}
          className="h-2"
          color={
            scorePercentage >= 70 ? "bg-green-500" :
              scorePercentage >= 30 ? "bg-yellow-500" :
                "bg-red-500"
          }
        />
      </div>
    </div>
  );
}