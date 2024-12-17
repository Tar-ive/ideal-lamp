'use client'

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  version: 'v2' | 'v3';
  onLoadingComplete: () => void;
  testType: 'lipid' | 'blood';
}

const LoadingState: React.FC<LoadingStateProps> = ({ version, onLoadingComplete, testType }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [dots, setDots] = useState('');

  const updateLoadingMessage = useCallback((time: number) => {
    if (testType === 'lipid') {
      if (time <= 4) {
        setLoadingMessage('Analyzing cholesterol');
      } else if (time <= 8) {
        setLoadingMessage('Analyzing triglycerides');
      } else if (time <= 12) {
        setLoadingMessage('Analyzing HDL cholesterol');
      } else {
        setLoadingMessage('Analyzing LDL cholesterol');
      }
    } else {
      if (time <= 4) {
        setLoadingMessage('Analyzing Red Blood Count');
      } else if (time <= 8) {
        setLoadingMessage('Analyzing White Blood Count');
      } else if (time <= 12) {
        setLoadingMessage('Analyzing Hemoglobin');
      } else {
        setLoadingMessage('Analyzing Hematocrit');
      }
    }
  }, [testType]);

  // Dots animation
  useEffect(() => {
    if (version === 'v3') {
      const dotsInterval = setInterval(() => {
        setDots(prev => {
          if (prev.length >= 3) return '';
          return prev + '.';
        });
      }, 1000);

      return () => clearInterval(dotsInterval);
    }
  }, [version]);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = (elapsed / 16) * 100;
      setProgress(Math.min(newProgress, 100));

      if (version === 'v3') {
        updateLoadingMessage(elapsed);
      }

      if (elapsed < 16) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onLoadingComplete();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [version, onLoadingComplete, updateLoadingMessage]);

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        {version === 'v3' && (
          <p className="text-gray-700 text-center">
            {loadingMessage}{dots}
          </p>
        )}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {version === 'v3' && (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 w-full rounded-lg bg-gradient-to-r from-gray-300 to-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingState;
