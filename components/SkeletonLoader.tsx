import { motion } from 'framer-motion';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-gray-700">Analyzing blood results...</p>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-500"
            animate={{
              width: ["0%", "100%"]
            }}
            transition={{
              duration: 15,
              ease: "linear"
            }}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-16 rounded-lg bg-gradient-to-r from-gray-400 to-gray-100 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
