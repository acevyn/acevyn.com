"use client";

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ 
  variant = 'ghost', 
  size = 'sm', 
  className,
  showLabel = false 
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn(showLabel ? '' : 'h-8 w-8 p-0', className)}
        disabled
        aria-label="Tema değiştir"
      >
        <Sun className="h-4 w-4" />
        {showLabel && <span className="ml-2">Tema</span>}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(showLabel ? '' : 'h-8 w-8 p-0', className)}
      aria-label={`${theme === 'dark' ? 'Açık' : 'Koyu'} temaya geç`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {showLabel && (
        <span className="ml-2">
          {theme === 'dark' ? 'Açık Mod' : 'Koyu Mod'}
        </span>
      )}
    </Button>
  );
}