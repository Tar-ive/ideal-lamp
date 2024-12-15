'use client'

import { useState } from 'react';
import ResultSlider from './ResultSlider';
import { SkeletonLoader } from './SkeletonLoader';
import { motion } from 'framer-motion';

interface LabResultsProps {
  condition: 'instant' | 'blind' | 'transparent';
}

const LabResults: React.FC<LabResultsProps> = ({ condition }) => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const lipidPanel = [
    { label: 'Cholesterol', min: 100, max: 199, value: 185, unit: 'mg/dl' },
    { label: 'Triglycerides', min: 0, max: 149, value: 70, unit: 'mg/dl' },
    { label: 'HDL Cholesterol', min: 150, max: 199, value: 124, unit: 'mg/dl' },
    { label: 'LDL Cholesterol', min: 0, max: 99, value: 56, unit: 'mg/dl' },
  ];

  const bloodCountPanel = [
    { label: 'Red Blood Count', min: 4, max: 11, value: 6.2, unit: 'mg/dl' },
    { label: 'White Blood Count', min: 3.9, max: 6.5, value: 5.1, unit: 'mg/dl' },
    { label: 'Hemoglobin', min: 115, max: 175, value: 140, unit: 'mg/dl' },
    { label: 'Hematocrit', min: 36, max: 50, value: 42, unit: 'mg/dl' },
  ];

  const handleViewResults = () => {
    if (condition === 'instant') {
      setShowResults(true);
    } else {
      setLoading(true);
      let progressValue = 0;
      const interval = setInterval(() => {
        if (progressValue >= 100) {
          clearInterval(interval);
          setShowResults(true);
          setLoading(false);
          return;
        }
        progressValue += 100 / 15; // ~15 seconds
        setProgress(progressValue);
      }, 1000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      {!showResults && !loading && (
        <button
          onClick={handleViewResults}
          className="w-full bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-600 transition-colors text-base md:text-lg"
        >
          View Lab Results
        </button>
      )}

      {loading && (
        <div className="space-y-4">
          {condition === 'transparent' ? (
            <SkeletonLoader />
          ) : (
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      )}

      {showResults && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Lipid Panel</h2>
            {lipidPanel.map((result, index) => (
              <ResultSlider key={index} {...result} />
            ))}
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Blood Count Panel</h2>
            {bloodCountPanel.map((result, index) => (
              <ResultSlider key={index} {...result} />
            ))}
          </div>
          <div className="text-center pt-2 md:pt-4">
            <a
              href="https://example.com/survey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-green-600 transition-colors text-sm md:text-base"
            >
              Proceed to Survey
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LabResults;
