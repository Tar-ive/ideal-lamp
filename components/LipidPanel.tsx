import ResultSlider from './ResultSlider';

const lipidPanelData = [
  { label: 'Cholesterol', min: 100, max: 199, value: 185, unit: 'mg/dl' },
  { label: 'Triglycerides', min: 0, max: 149, value: 70, unit: 'mg/dl' },
  { label: 'HDL Cholesterol', min: 100, max: 199, value: 124, unit: 'mg/dl' },
  { label: 'LDL Cholesterol', min: 0, max: 99, value: 56, unit: 'mg/dl' },
];

const LipidPanel: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {lipidPanelData.map((result, index) => (
        <ResultSlider key={index} {...result} />
      ))}
    </div>
  );
};

export default LipidPanel;
