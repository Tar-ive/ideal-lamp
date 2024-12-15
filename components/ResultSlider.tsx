'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ResultSliderProps {
  min: number;
  max: number;
  value: number;
  label: string;
  unit: string;
}

const ResultSlider: React.FC<ResultSliderProps> = ({ min, max, value, label, unit }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const percentage = ((value - min) / (max - min)) * 100;
    setWidth(percentage);
  }, [value, min, max]);

  return (
    <div className="mb-4 md:mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm md:text-base text-gray-900">{label}</span>
        <span className="text-sm md:text-base text-gray-900">{value} {unit}</span>
      </div>
      <div className="relative h-2 bg-gray-100 rounded-full">
        <motion.div 
          className="absolute h-2 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs md:text-sm text-gray-500">{min}</span>
        <span className="text-xs md:text-sm text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default ResultSlider;
