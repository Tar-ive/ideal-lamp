'use client'
import { motion } from 'framer-motion';
import ResultSlider from './ResultSlider';

interface ProgressiveResultSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  unit: string;
  isVisible: boolean;
}

const ProgressiveResultSlider: React.FC<ProgressiveResultSliderProps> = ({
  label,
  min,
  max,
  value,
  unit,
  isVisible
}) => {
  if (!isVisible) {
    return (
      <div className="h-16 w-full rounded-lg bg-gradient-to-r from-gray-300 to-gray-100 animate-pulse" />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResultSlider
        label={label}
        min={min}
        max={max}
        value={value}
        unit={unit}
      />
    </motion.div>
  );
};

export default ProgressiveResultSlider;