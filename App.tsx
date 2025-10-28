
import React, { Suspense } from 'react';
import SolarSystem from './components/SolarSystem';

const App: React.FC = () => {
  return (
    <main className="relative w-screen h-screen bg-black">
      <Suspense fallback={<Loading />}>
        <SolarSystem />
      </Suspense>
      <UI />
    </main>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-3xl font-bold animate-pulse">Loading Solar System...</h2>
        <p className="text-lg text-gray-400">Please wait while we chart the stars.</p>
      </div>
    </div>
  );
}

const UI: React.FC = () => {
  return (
    <>
      <header className="absolute top-0 left-0 w-full p-4 md:p-8 z-10 pointer-events-none">
        <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
                Interactive 3D Solar System
            </h1>
            <p className="text-sm md:text-base text-gray-300">Click & drag to orbit, scroll to zoom.</p>
        </div>
      </header>
      <footer className="absolute bottom-0 right-0 p-4 md:p-6 z-10 pointer-events-none">
        <p className="text-xs md:text-sm font-light text-gray-400">Powered by Zymzz</p>
      </footer>
    </>
  );
}

export default App;
