'use client'

import { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LoadingStateProps {
  version: 'v2' | 'v3';
  onLoadingComplete: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({ version, onLoadingComplete }) => {
  const controls = useAnimation();

  const startLoading = useCallback(async () => {
    await controls.start({
      width: "100%",
      transition: { duration: 15, ease: "linear" }
    });
    onLoadingComplete();
  }, [controls, onLoadingComplete]);

  useEffect(() => {
    startLoading();
  }, [startLoading]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {version === 'v3' && (
          <p className="text-gray-700">Analyzing lab results...</p>
        )}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-500"
            initial={{ width: 0 }}
            animate={controls}
          />
        </div>
      </div>
      
      {version === 'v3' && (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 rounded-lg bg-gradient-to-r from-gray-400 to-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingState;
