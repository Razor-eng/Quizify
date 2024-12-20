import { ThemeToggle } from '@/components/theme-toggle';
import { WelcomeForm } from '@/components/welcome-form';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
      <ThemeToggle />
      <WelcomeForm />
    </div>
  );
}