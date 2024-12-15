'use client'

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import LoadingState from './LoadingState';
import ResultsDisplay from './ResultsDisplay';

interface IntermediatePageProps {
  title: string;
  version: 'v1' | 'v2' | 'v3';
  children: React.ReactNode;
}

const IntermediatePage: React.FC<IntermediatePageProps> = ({ title, version, children }) => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleViewResults = useCallback(() => {
    if (version === 'v1') {
      setShowResults(true);
    } else {
      setLoading(true);
    }
  }, [version]);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
    setShowResults(true);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h1>
          {showResults ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsDisplay>{children}</ResultsDisplay>
            </motion.div>
          ) : loading ? (
            <LoadingState version={version} onLoadingComplete={handleLoadingComplete} />
          ) : null}
        </div>
      </div>
      {!showResults && !loading && (
        <div className="p-4">
          <button
            onClick={handleViewResults}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
          >
            View Lab Results
          </button>
        </div>
      )}
    </main>
  );
};

export default IntermediatePage;
