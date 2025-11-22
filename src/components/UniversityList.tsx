import { Search, MapPin, Star, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { University } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface UniversityListProps {
  onSelectUniversity: (university: University) => void;
}

const universities: University[] = [
  {
    id: '1',
    name: 'Charles University',
    location: 'Prague, Czech Republic',
    rating: 4.7,
    studentCount: '50,000+',
    image: 'https://images.unsplash.com/photo-1759862302173-2701550ffe11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcmFndWUlMjBDaGFybGVzJTIwVW5pdmVyc2l0eXxlbnwxfHx8fDE3NjM3MTg0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    name: 'University of Amsterdam',
    location: 'Amsterdam, Netherlands',
    rating: 4.6,
    studentCount: '42,000+',
    image: 'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNjYwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    name: 'Ludwig Maximilian University',
    location: 'Munich, Germany',
    rating: 4.5,
    studentCount: '52,000+',
    image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc2MzY5Njg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    name: 'Sciences Po',
    location: 'Paris, France',
    rating: 4.8,
    studentCount: '14,000+',
    image: 'https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYzNjQ1MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    name: 'University of Copenhagen',
    location: 'Copenhagen, Denmark',
    rating: 4.6,
    studentCount: '38,000+',
    image: 'https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNjYwNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    name: 'University of Edinburgh',
    location: 'Edinburgh, Scotland',
    rating: 4.7,
    studentCount: '35,000+',
    image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc2MzY5Njg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function UniversityList({ onSelectUniversity }: UniversityListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUniversities = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="mb-6">Choose Your University</h1>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search universities or locations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* University Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
              onClick={() => onSelectUniversity(university)}
            />
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No universities found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface UniversityCardProps {
  university: University;
  onClick: () => void;
}

function UniversityCard({ university, onClick }: UniversityCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative h-48">
        <ImageWithFallback
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="mb-2">{university.name}</h3>
        
        <div className="flex items-center gap-1 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{university.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{university.rating}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{university.studentCount} students</span>
          </div>
        </div>
        
        <Button className="w-full mt-4" variant="outline">
          View Profile
        </Button>
      </div>
    </div>
  );
}
