
import Button from '@/components/Button';
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
        <div className="mb-12 space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm mb-2">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Next-generation interface
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E5DEFF] via-[#FFDEE2] to-[#FEC6A1] drop-shadow-lg">
            Emotion-Aware <br />
            <span className="relative">
              Chatbot
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full" height="8" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 4C25 4 25 7.5 50 7.5C75 7.5 75 4 99.5 4" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="4" x2="100" y2="4" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5DEFF" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="#FFDEE2"/>
                    <stop offset="1" stopColor="#FEC6A1" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm py-2 px-4 rounded-lg bg-white/5">
            Decode conversations with advanced emotional intelligence technology 
            that understands context, sentiment, and human interaction patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/10">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#E5DEFF] to-[#FFDEE2] flex items-center justify-center mb-4 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V22" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Emotion Analysis</h3>
            <p className="text-white/70 text-sm">Advanced algorithms to detect subtle emotional cues in conversations</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/10">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#FFDEE2] to-[#FEC6A1] flex items-center justify-center mb-4 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#1A1F2C" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Real-time Response</h3>
            <p className="text-white/70 text-sm">Immediate contextual understanding with millisecond processing time</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/10">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#FEC6A1] to-[#E5DEFF] flex items-center justify-center mb-4 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H19C20.1046 8 21 8.89543 21 10V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V10C3 8.89543 3.89543 8 5 8H6" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 5L12 2L9 5" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V14" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Smart Suggestions</h3>
            <p className="text-white/70 text-sm">Intelligent recommendation engine based on conversation context</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="w-full md:w-auto bg-gradient-to-r from-[#E5DEFF] to-[#FEC6A1] text-[#1A1F2C] hover:from-[#FFDEE2] hover:to-[#FDE1D3] group">
            Start Chatting
            <ArrowRight className="inline-block ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button className="w-full md:w-auto border-[#FFDEE2]/30 text-white hover:bg-[#FFDEE2]/20 backdrop-blur-sm">
            Learn More
          </Button>
        </div>
      </main>

      <footer className={`absolute bottom-6 w-full text-center text-white/50 text-sm z-10 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <p>© 2025 EmotionFlow AI • Powered by Three.js</p>
      </footer>
    </div>
  );
};

export default Index;
