'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TopicSelection } from '@/components/topic-selection';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';

export function WelcomeForm() {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setStarted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (started) {
    return <TopicSelection userName={name} />;
  }

  return (
    <Card className="lg:w-2/5 sm:w-4/5 xl:h-2/5 w-full mx-auto shadow-md dark:shadow-zinc-900">
      <CardHeader className="text-center">
        <div className='w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center'>
          <Image
            src={'/brain.png'}
            alt={'Logo'}
            width={1200}
            height={800}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
          />
        </div>
        <CardTitle className="text-2xl font-bold">Welcome to TechQuiz</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-lg"
              required
              aria-label="Name input"
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!name.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <Spinner className="w-5 h-5 text-white animate-spin" />
            ) : (
              'Continue'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}