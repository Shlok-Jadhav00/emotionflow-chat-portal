
import Button from '@/components/Button';
import ThreeDBackground from '@/components/ThreeDBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative font-inter overflow-hidden">
      {/* 3D Background takes the full viewport */}
      <ThreeDBackground />
      
      <main className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Emotion-Aware Chatbot
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Decode conversations with advanced emotional intelligence technology
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="border-[#FFDEE2]/30 text-white hover:bg-[#FFDEE2]/20 backdrop-blur-sm">
            About Us
          </Button>
          <Button variant="primary" className="md:mx-4 bg-gradient-to-r from-[#E5DEFF] to-[#FEC6A1] text-[#1A1F2C] hover:from-[#FFDEE2] hover:to-[#FDE1D3]">
            Start Chatting
          </Button>
          <Button className="border-[#FFDEE2]/30 text-white hover:bg-[#FFDEE2]/20 backdrop-blur-sm">
            Libraries Used
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
