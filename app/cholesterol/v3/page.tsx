'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressiveLipidPanel from '../../../components/ProgressiveLipidPanel';
import ResultsDisplay from '../../../components/ResultsDisplay';
import LipidPanel from '../../../components/LipidPanel';

export default function LipidPanelV3() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleViewResults = () => {
    setLoading(true);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
    setShowResults(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Lipid Panel Results</h1>
        <div className="w-full flex flex-col items-center">
          {showResults ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ResultsDisplay>
                <LipidPanel />
              </ResultsDisplay>
            </motion.div>
          ) : loading ? (
            <ProgressiveLipidPanel onComplete={handleLoadingComplete} />
          ) : (
            <button
              onClick={handleViewResults}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              View Lab Results
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
