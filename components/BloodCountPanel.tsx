import ResultSlider from './ResultSlider';

const bloodCountPanelData = [
  { label: 'Red Blood Count', min: 4, max: 11, value: 6.2, unit: 'mg/dl' },
  { label: 'White Blood Count', min: 3.9, max: 6.5, value: 5.1, unit: 'mg/dl' },
  { label: 'Hemoglobin', min: 115, max: 175, value: 140, unit: 'mg/dl' },
  { label: 'Hematocrit', min: 36, max: 50, value: 42, unit: 'mg/dl' },
];

const BloodCountPanel: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Blood Count Panel</h2>
      {bloodCountPanelData.map((result, index) => (
        <ResultSlider key={index} {...result} />
      ))}
    </div>
  );
};

export default BloodCountPanel;
