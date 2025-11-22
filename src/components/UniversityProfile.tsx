import { ArrowLeft, Star, ThumbsUp, ThumbsDown, AlertCircle, BookOpen, Home, Users, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { University } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UniversityProfileProps {
  university: University;
  onBack: () => void;
  onViewPrograms: () => void;
  onFindDorm: () => void;
  onFindRoommate: () => void;
  onChatMentor: () => void;
}

export function UniversityProfile({
  university,
  onBack,
  onViewPrograms,
  onFindDorm,
  onFindRoommate,
  onChatMentor,
}: UniversityProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600">
        <ImageWithFallback
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <button
          onClick={onBack}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="mb-2">{university.name}</h1>
          <p className="text-white/90">{university.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Rating Overview */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="mb-2">Student Rating</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <span className="text-yellow-500">{university.rating}</span>
                </div>
                <span className="text-gray-600">based on 1,247 reviews</span>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              94% would recommend
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RatingCategory label="Academics" rating={4.8} />
            <RatingCategory label="Social Life" rating={4.5} />
            <RatingCategory label="Location" rating={4.9} />
            <RatingCategory label="Value" rating={4.3} />
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsUp className="w-5 h-5 text-green-600" />
              <h3>Pros</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>World-class academic reputation and research facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Beautiful historic campus in the heart of Prague</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Diverse international student community</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Affordable tuition compared to Western Europe</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsDown className="w-5 h-5 text-orange-600" />
              <h3>Cons</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Some administrative processes can be bureaucratic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Limited dorm space for international students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Language barrier if you don't speak Czech</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Winter weather can be quite cold</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What Students Wish They Knew */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-3">What Students Wish They Knew</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <span>"Start learning Czech before you arrive - it makes daily life so much easier!"</span>
                  <span className="text-gray-500"> - Sarah, 3rd year</span>
                </li>
                <li className="text-gray-700">
                  <span>"Apply for housing EARLY. The dorms fill up fast and private apartments are expensive."</span>
                  <span className="text-gray-500"> - Marcus, 2nd year</span>
                </li>
                <li className="text-gray-700">
                  <span>"Join student clubs in your first week - it's the best way to make friends!"</span>
                  <span className="text-gray-500"> - Elena, 4th year</span>
                </li>
                <li className="text-gray-700">
                  <span>"Budget for travel - Prague's location is perfect for exploring Europe on weekends."</span>
                  <span className="text-gray-500"> - Ahmed, Graduate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionCard
            icon={<BookOpen className="w-6 h-6 text-blue-600" />}
            title="Program Reviews"
            description="See what students say"
            onClick={onViewPrograms}
          />
          <ActionCard
            icon={<Home className="w-6 h-6 text-purple-600" />}
            title="Find a Dorm"
            description="Explore housing options"
            onClick={onFindDorm}
          />
          <ActionCard
            icon={<Users className="w-6 h-6 text-pink-600" />}
            title="Find Roommate"
            description="Match with students"
            onClick={onFindRoommate}
          />
          <ActionCard
            icon={<MessageCircle className="w-6 h-6 text-indigo-600" />}
            title="Ask a Mentor"
            description="Chat with students"
            onClick={onChatMentor}
          />
        </div>
      </div>
    </div>
  );
}

interface RatingCategoryProps {
  label: string;
  rating: number;
}

function RatingCategory({ label, rating }: RatingCategoryProps) {
  return (
    <div>
      <div className="text-gray-600 mb-1">{label}</div>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        <span>{rating}</span>
      </div>
    </div>
  );
}

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function ActionCard({ icon, title, description, onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </button>
  );
}
