'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, XCircle, Search } from "lucide-react";

interface QuizAnswersModalProps {
  answers: {
    question: string;
    userAnswer: string;
    correct: boolean;
  }[];
}

export function QuizAnswersModal({ answers }: QuizAnswersModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Search className="w-4 h-4 mr-2" />
          Review Answers
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Your Quiz Answers</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            {answers.map((answer, index) => (
              <div
                key={index}
                className="p-4 bg-muted rounded-lg border transition-colors"
              >
                <div className="flex items-start gap-3">
                  {answer.correct ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-base">
                      Question {index + 1}: {answer.question}
                    </p>
                    <p className={`mt-1 ${
                      answer.correct 
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}>
                      Your answer: {answer.userAnswer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}