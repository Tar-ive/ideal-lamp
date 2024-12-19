'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressiveResultSlider from './ProgressiveResultSlider';

const lipidPanelData = [
  { label: 'Cholesterol', min: 100, max: 199, value: 185, unit: 'mg/dl' },
  { label: 'Triglycerides', min: 0, max: 149, value: 70, unit: 'mg/dl' },
  { label: 'HDL Cholesterol', min: 100, max: 199, value: 124, unit: 'mg/dl' },
  { label: 'LDL Cholesterol', min: 0, max: 99, value: 56, unit: 'mg/dl' },
];

interface ProgressiveLipidPanelProps {
  onComplete: () => void;
}

const ProgressiveLipidPanel: React.FC<ProgressiveLipidPanelProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = 16000; // 16 seconds
    const stepDuration = 4000; // 4 seconds per step

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / totalDuration) * 100;
      
      if (currentProgress >= 100) {
        setProgress(100);
        onComplete();
        return;
      }
      setProgress(Math.min(currentProgress, 100));
      setCurrentStep(Math.floor(elapsed / stepDuration));
      requestAnimationFrame(updateProgress);
    };

    const animation = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animation);
  }, [onComplete]);

  // New effect for animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentMessage = () => {
    switch (currentStep) {
      case 0:
        return `Analyzing cholesterol${dots}`;
      case 1:
        return `Analyzing triglycerides${dots}`;
      case 2:
        return `Analyzing HDL cholesterol${dots}`;
      case 3:
      default:
        return `Analyzing LDL cholesterol${dots}`;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <p className="text-gray-700 text-center">{getCurrentMessage()}</p>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{ 
              width: `${progress}%`,
              backgroundColor: 'rgb(239, 68, 68)'
            }}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {lipidPanelData.map((test, index) => (
          <ProgressiveResultSlider
            key={index}
            {...test}
            isVisible={index < currentStep}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressiveLipidPanel;