
import ThreeDBackground from '@/components/ThreeDBackground';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animation delay for content appearance
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative font-inter overflow-hidden">
      {/* 3D Background takes the full viewport */}
      <ThreeDBackground />
      
      <main className={`w-full max-w-5xl mx-auto text-center relative z-10 px-4 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to FutureVision
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Experience the next generation of web interfaces
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-white/90 transition-all flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2" size={18} />
          </button>
          <button className="px-6 py-3 rounded-lg font-medium border border-white/30 text-white hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </main>

      <footer className={`absolute bottom-6 w-full text-center text-white/50 text-sm z-10 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <p>© 2025 FutureVision • Powered by Three.js</p>
      </footer>
    </div>
  );
};

export default Index;
