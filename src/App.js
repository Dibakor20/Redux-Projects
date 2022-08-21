import React from 'react';
import './App.css';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <HookCounter/>
            </div>
        </div>
  );
}

export default App;
