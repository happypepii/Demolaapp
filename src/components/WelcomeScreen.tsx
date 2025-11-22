import { GraduationCap, Users, MessageCircle, Home } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <GraduationCap className="w-16 h-16" />
            </div>
          </div>
          
          <h1 className="mb-6">
            Find Your Perfect University
          </h1>
          
          <p className="mb-12 max-w-2xl mx-auto text-white/90">
            Real reviews from real students. Connect with mentors, find roommates, and discover what life is really like at your dream university.
          </p>
          
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
              title="Honest Reviews"
              description="Read what students wish they knew before choosing their university"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="Find Roommates"
              description="Match with compatible roommates based on your lifestyle and interests"
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8 text-pink-600" />}
              title="Chat with Mentors"
              description="Ask real students your burning questions about university life"
            />
            <FeatureCard
              icon={<Home className="w-8 h-8 text-indigo-600" />}
              title="Dorm Finder"
              description="Explore dorm options and find the perfect place to call home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
