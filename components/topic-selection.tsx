'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { quizTopics } from '@/lib/quiz-data';
import { Brain, Code, FileCode, Globe, Server, Palette } from 'lucide-react';
import { Quiz } from '@/components/quiz';
import { useState } from 'react';

const icons = {
  react: Code,
  nextjs: Globe,
  typescript: FileCode,
  node: Server,
  tailwind: Palette,
  default: Brain,
};

interface TopicSelectionProps {
  userName: string;
}

export function TopicSelection({ userName }: TopicSelectionProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  if (selectedTopic) {
    return (
      <Quiz
        topicId={selectedTopic}
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {userName}!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizTopics.map((topic) => {
          const Icon = icons[topic.id as keyof typeof icons] || icons.default;
          return (
            <Card
              key={topic.id}
              className="cursor-pointer hover:shadow-lg dark:shadow-zinc-800 transition-shadow"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{topic.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}