import Link from 'next/link';

interface ProceedButtonProps {
  className?: string;
}

const ProceedButton: React.FC<ProceedButtonProps> = ({ className = '' }) => {
  return (
    <Link
      href="https://example.com/qualtrics-survey"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-center ${className}`}
    >
      Proceed to Survey
    </Link>
  );
};

export default ProceedButton;
