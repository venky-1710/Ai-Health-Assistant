import { FaTimes } from 'react-icons/fa';

const SymptomList = ({ symptoms, onRemoveSymptom }) => {
  if (symptoms.length === 0) return null;

  return (
    <div className="mt-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">
        Current Symptoms:
      </h3>
      <div className="flex flex-wrap gap-2">
        {symptoms.map((symptom, index) => (
          <div
            key={index}
            className="symptom-tag"
          >
            <span>{symptom}</span>
            <button
              onClick={() => onRemoveSymptom(index)}
              className="ml-2 hover:text-red-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomList;