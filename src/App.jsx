import React from 'react';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 className="text-2xl font-bold text-blue-500">Welcome to Electron + React! 🚀</h1>
      <p>Your Vite-powered desktop interface is ready.</p>
      <Button>Click</Button>
    </div>
  );
}