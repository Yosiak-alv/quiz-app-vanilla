import './style.css';
import { initQuiz } from '@/components/quiz';
import { togglerTheme } from '@/components/themeSwitcher';

// Main entry point
document.addEventListener('DOMContentLoaded', () => {
  togglerTheme();
  initQuiz();
});
