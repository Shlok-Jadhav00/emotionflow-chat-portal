
import Background from '@/components/Background';
import Button from '@/components/Button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 font-inter">
      <Background />
      
      <main className="w-full max-w-4xl mx-auto text-center relative">
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Emotion-Aware Chatbot
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience conversations that understand and respond to your emotions in real-time
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button>
            About Us
          </Button>
          <Button variant="primary" className="md:mx-4">
            Start Chatting
          </Button>
          <Button>
            Libraries Used
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
