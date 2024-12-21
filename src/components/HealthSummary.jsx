import ReactMarkdown from 'react-markdown';

const HealthSummary = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="health-summary animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Health Analysis
      </h2>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{analysis}</ReactMarkdown>
      </div>
    </div>
  );
};

export default HealthSummary;