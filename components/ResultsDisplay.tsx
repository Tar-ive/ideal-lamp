import { ReactNode } from 'react';
import ProceedButton from './ProceedButton';

interface ResultsDisplayProps {
  children: ReactNode;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ children }) => {
  return (
    <div className="space-y-8">
      {children}
      <div className="text-center">
        <ProceedButton />
      </div>
    </div>
  );
};

export default ResultsDisplay;
