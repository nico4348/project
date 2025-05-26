import { useState } from "react";

const APTtest = () => {
  const [result, setResult] = useState('');
  
  const testAPI = async () => {
    try {
      setResult('Fetching...');
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      
      const doctors = data.filter(user => user.rol === 'doctor');
      setResult(`Found ${doctors.length} doctors: ${JSON.stringify(doctors, null, 2)}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };
  
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>API Test</h1>
      <button onClick={testAPI} style={{ padding: '10px', margin: '10px', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '5px' }}>
        Test API
      </button>
      <pre style={{ background: '#f5f5f5', padding: '10px', whiteSpace: 'pre-wrap' }}>
        {result}
      </pre>
    </div>
  );
};

export default APTtest;
