import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const SymptomInput = ({ onAddSymptom }) => {
  const [symptom, setSymptom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptom.trim()) {
      onAddSymptom(symptom.trim());
      setSymptom('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="symptom-input">
      <div className="flex gap-2">
        <input
          type="text"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="Enter a symptom..."
          className="flex-1 p-3 border-2 border-gray-200 rounded-lg 
                   focus:outline-none focus:border-blue-400 
                   transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg 
                   hover:bg-blue-600 transition-colors duration-300
                   flex items-center justify-center"
        >
          <FaPlus className="text-lg" />
        </button>
      </div>
    </form>
  );
};

export default SymptomInput;