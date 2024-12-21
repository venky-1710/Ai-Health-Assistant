import { useState } from 'react';
import SymptomInput from './components/SymptomInput';
import SymptomList from './components/SymptomList';
import HealthSummary from './components/HealthSummary';
import LoadingIndicator from './components/LoadingIndicator';
import { getGeminiResponse } from './config/gemini';
import './styles/animations.css';
import './styles/components.css';

function App() {
  const [symptoms, setSymptoms] = useState([]);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const addSymptom = (symptom) => {
    setSymptoms([...symptoms, symptom]);
  };

  const removeSymptom = (index) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) return;

    setLoading(true);
    try {
      const prompt = `As a medical AI assistant, analyze the following symptoms and provide a comprehensive health summary. Include potential conditions, recommendations, and when to seek medical attention. Be thorough but avoid causing unnecessary anxiety. Symptoms: ${symptoms.join(', ')}`;
      
      const response = await getGeminiResponse(prompt);
      setAnalysis(response);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setAnalysis('Error analyzing symptoms. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
          AI Health Assistant
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <SymptomInput onAddSymptom={addSymptom} />
            <SymptomList symptoms={symptoms} onRemoveSymptom={removeSymptom} />
            
            {symptoms.length > 0 && (
              <button
                onClick={analyzeSymptoms}
                disabled={loading}
                className="analyze-button w-full mt-6"
              >
                {loading ? 'Analyzing...' : 'Analyze Symptoms'}
              </button>
            )}
          </div>
        </div>

        {loading && <LoadingIndicator />}
        {analysis && <HealthSummary analysis={analysis} />}
      </div>
    </div>
  );
}

export default App;