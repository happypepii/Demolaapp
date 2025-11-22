import { ArrowLeft, Users, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';

interface RoommateMatchingProps {
  onBack: () => void;
  onChatMentor: () => void;
}

const matches = [
  {
    id: '1',
    name: 'Elena Martinez',
    program: 'Economics, 1st Year',
    country: 'Spain',
    matchScore: 95,
    bio: 'Looking for a clean, organized roommate who enjoys cooking and occasional movie nights!',
    interests: ['Cooking', 'Movies', 'Yoga', 'Travel'],
    sleepSchedule: 'Early Bird',
    cleanliness: 'Very Clean',
    topMatch: true,
  },
  {
    id: '2',
    name: 'James Wilson',
    program: 'Computer Science, 2nd Year',
    country: 'UK',
    matchScore: 88,
    bio: 'Chill guy looking for someone who respects quiet study time but also likes to explore Prague on weekends.',
    interests: ['Gaming', 'Hiking', 'Photography', 'Coffee'],
    sleepSchedule: 'Night Owl',
    cleanliness: 'Moderately Clean',
    topMatch: false,
  },
  {
    id: '3',
    name: 'Yuki Tanaka',
    program: 'International Relations, 1st Year',
    country: 'Japan',
    matchScore: 86,
    bio: 'Friendly and respectful. Love trying new restaurants and learning about different cultures!',
    interests: ['Food', 'Languages', 'Museums', 'Running'],
    sleepSchedule: 'Flexible',
    cleanliness: 'Very Clean',
    topMatch: false,
  },
];

export function RoommateMatching({ onBack, onChatMentor }: RoommateMatchingProps) {
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
            Back
          </button>
          <h1 className="mb-2">Find Your Roommate</h1>
          <p className="text-gray-600">
            Based on your preferences and lifestyle
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Your Profile Summary */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <div>
              <h2 className="text-white mb-1">Your Profile</h2>
              <p className="text-white/90">IR Student • Early Bird • Very Clean</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Reading', 'Coffee', 'Museums', 'Jogging'].map((interest, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* Matches */}
        <div className="mb-6">
          <h2 className="mb-4">Your Top Matches</h2>
        </div>

        <div className="space-y-6 mb-8">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="mb-2">Want to Know More?</h3>
          <p className="text-gray-600 mb-4">
            Chat with current students to learn about roommate experiences
          </p>
          <Button onClick={onChatMentor}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat with Mentors
          </Button>
        </div>
      </div>
    </div>
  );
}

interface MatchCardProps {
  match: {
    id: string;
    name: string;
    program: string;
    country: string;
    matchScore: number;
    bio: string;
    interests: string[];
    sleepSchedule: string;
    cleanliness: string;
    topMatch: boolean;
  };
}

function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
            {match.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3>{match.name}</h3>
                {match.topMatch && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Top Match
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 mb-1">{match.program}</p>
              <p className="text-gray-500">From {match.country}</p>
            </div>
            
            <div className="text-center">
              <div className="text-green-600 mb-1">{match.matchScore}%</div>
              <div className="text-gray-500">Match</div>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{match.bio}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{match.sleepSchedule}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Sparkles className="w-4 h-4" />
              <span>{match.cleanliness}</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-gray-600 mb-2">Interests:</div>
            <div className="flex flex-wrap gap-2">
              {match.interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline">
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
