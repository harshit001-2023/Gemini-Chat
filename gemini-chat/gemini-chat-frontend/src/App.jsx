import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ChatInput from './components/ChatInputs';
import ChatResponse from './components/ChatResponse';
import { fetchChatResponse } from './services/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <header className="bg-primary text-white text-center p-5">
          <h1>Ask Gemini | An AI ChatBot</h1>
        </header>
        <ChatInput onSubmit={handleQuestionSubmit} />
        {loading ? <h1>Loading...</h1> : <ChatResponse response={response} />}
      </div>
    </>
  );
}

export default App;
