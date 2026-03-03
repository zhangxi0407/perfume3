'use client';

import { useState } from 'react';
import CoverPage from '@/components/CoverPage';
import QuizPage from '@/components/QuizPage';
import LoadingPage from '@/components/LoadingPage';
import ResultPage from '@/components/ResultPage';
import { Perfume } from '@/lib/perfumes';

type PageState = 'cover' | 'quiz' | 'loading' | 'result';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('cover');
  const [matchedPerfume, setMatchedPerfume] = useState<Perfume | null>(null);

  return (
    <main className="min-h-screen">
      {currentPage === 'cover' && (
        <CoverPage onStart={() => setCurrentPage('quiz')} />
      )}
      {currentPage === 'quiz' && (
        <QuizPage
          onComplete={(perfume) => {
            setMatchedPerfume(perfume);
            setCurrentPage('loading');
            setTimeout(() => setCurrentPage('result'), 3000);
          }}
        />
      )}
      {currentPage === 'loading' && <LoadingPage />}
      {currentPage === 'result' && matchedPerfume && (
        <ResultPage
          perfume={matchedPerfume}
          onRestart={() => {
            setCurrentPage('cover');
            setMatchedPerfume(null);
          }}
        />
      )}
    </main>
  );
}
