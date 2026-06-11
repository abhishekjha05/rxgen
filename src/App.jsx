import React from 'react';
import Sidebar from './components/Sidebar';
import PreviewArea from './components/PreviewArea';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row print:bg-white print:block">
      <Sidebar />
      <PreviewArea />
    </div>
  );
}
