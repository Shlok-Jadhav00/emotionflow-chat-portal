
import Background from '@/components/Background';
import Button from '@/components/Button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 font-inter bg-[#121317]">
      <Background />
      
      <main className="w-full max-w-4xl mx-auto text-center relative">
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#1A1F2C]">
            Emotion-Aware Chatbot
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Decode conversations with advanced emotional intelligence technology
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="border-[#403E43] text-gray-300 hover:bg-[#403E43]/30">
            About Us
          </Button>
          <Button variant="primary" className="md:mx-4 bg-gradient-to-r from-[#0EA5E9] to-[#1EAEDB]">
            Start Chatting
          </Button>
          <Button className="border-[#403E43] text-gray-300 hover:bg-[#403E43]/30">
            Libraries Used
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
