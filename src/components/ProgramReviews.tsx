import { ArrowLeft, Star, ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { University } from '../App';
import { Avatar, AvatarFallback } from './ui/avatar';

interface ProgramReviewsProps {
  university: University;
  onBack: () => void;
}

const programs = [
  {
    id: '1',
    name: 'International Relations',
    rating: 4.8,
    reviewCount: 89,
    difficulty: 'Challenging',
    popular: true,
  },
  {
    id: '2',
    name: 'Computer Science',
    rating: 4.6,
    reviewCount: 142,
    difficulty: 'Very Challenging',
    popular: true,
  },
  {
    id: '3',
    name: 'Medicine',
    rating: 4.7,
    reviewCount: 76,
    difficulty: 'Very Challenging',
    popular: true,
  },
  {
    id: '4',
    name: 'Economics',
    rating: 4.5,
    reviewCount: 64,
    difficulty: 'Moderate',
    popular: false,
  },
];

const irReviews = [
  {
    id: '1',
    author: 'Anna K.',
    year: '3rd Year',
    rating: 5,
    date: 'November 2024',
    text: 'The IR program at Charles is absolutely fantastic! The professors are experts in their fields and many have real diplomatic experience. The curriculum is well-balanced between theory and practical applications. Prague is also an amazing city to study international relations.',
    helpful: 45,
  },
  {
    id: '2',
    author: 'Thomas M.',
    year: 'Graduate',
    rating: 4,
    date: 'October 2024',
    text: 'Great program overall. The coursework is challenging but rewarding. My only complaint is that some administrative processes were confusing for international students. The career services could be better, but the academic quality is top-notch.',
    helpful: 32,
  },
  {
    id: '3',
    author: 'Sofia R.',
    year: '2nd Year',
    rating: 5,
    date: 'September 2024',
    text: 'I chose this program over several Western European universities and I have zero regrets. The diversity of perspectives from students all over the world makes class discussions incredibly rich. Plus, the tuition is so much more affordable!',
    helpful: 28,
  },
];

export function ProgramReviews({ university, onBack }: ProgramReviewsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {university.name}
          </button>
          <h1>Program Reviews</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Programs List */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="mb-4">Popular Programs</h2>
          <div className="space-y-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3>{program.name}</h3>
                    {program.popular && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{program.rating}</span>
                    </div>
                    <span>{program.reviewCount} reviews</span>
                    <span>•</span>
                    <span>{program.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IR Program Detailed Reviews */}
        <div className="mb-6">
          <h2 className="mb-4">International Relations Reviews</h2>
          <p className="text-gray-600 mb-6">
            See what current students and alumni have to say about the IR program
          </p>
        </div>

        <div className="space-y-6">
          {irReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="w-full md:w-auto">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ReviewCardProps {
  review: {
    id: string;
    author: string;
    year: string;
    rating: number;
    date: string;
    text: string;
    helpful: number;
  };
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <Avatar>
          <AvatarFallback className="bg-blue-600 text-white">
            {review.author.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <span>{review.author}</span>
                <Badge variant="secondary">{review.year}</Badge>
              </div>
              <span className="text-gray-500">{review.date}</span>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{review.text}</p>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ThumbsUp className="w-4 h-4" />
              <span>Helpful ({review.helpful})</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="w-4 h-4" />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
