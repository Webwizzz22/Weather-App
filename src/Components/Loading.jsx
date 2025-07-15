export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-blue-500 to-white">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-bounce text-7xl drop-shadow-lg">
          <span role="img" aria-label="weather">❄️</span>
        </div>
        <div className="flex gap-2 text-3xl font-bold text-white tracking-widest">
          <span className="animate-pulse">L</span>
          <span className="animate-pulse [animation-delay:0.1s]">O</span>
          <span className="animate-pulse [animation-delay:0.2s]">A</span>
          <span className="animate-pulse [animation-delay:0.3s]">D</span>
          <span className="animate-pulse [animation-delay:0.4s]">I</span>
          <span className="animate-pulse [animation-delay:0.5s]">N</span>
          <span className="animate-pulse [animation-delay:0.6s]">G</span>
          <span className="animate-pulse [animation-delay:0.7s]">.</span>
          <span className="animate-pulse [animation-delay:0.8s]">.</span>
          <span className="animate-pulse [animation-delay:0.9s]">.</span>
        </div>
        <div className="text-white/80 text-lg mt-4 animate-fade-in">
          Bringing you the chillest weather vibes...
        </div>
      </div>
    </div>
  );
}