import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
      aria-label='Toggle dark mode'
    >
      {isDark ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
    </button>
  );
};

export default DarkMode;
