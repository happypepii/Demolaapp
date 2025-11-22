import { ArrowLeft, MapPin, Euro, Wifi, Utensils, Waves, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DormFinderProps {
  onBack: () => void;
  onFindRoommate: () => void;
}

const dorms = [
  {
    id: '1',
    name: 'Hlávkova Kolej',
    location: 'Prague 2',
    price: 250,
    distance: '15 min to campus',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1504390747618-f9ea2a96c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMHJvb218ZW58MXx8fHwxNzYzNzE4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'Kitchen', 'Laundry', 'Study Room'],
    availability: 'Available',
    popular: true,
  },
  {
    id: '2',
    name: 'Kolejní 4',
    location: 'Prague 6',
    price: 220,
    distance: '10 min to campus',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1504390747618-f9ea2a96c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMHJvb218ZW58MXx8fHwxNzYzNzE4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'Kitchen', 'Gym'],
    availability: 'Limited',
    popular: false,
  },
  {
    id: '3',
    name: 'Větrník',
    location: 'Prague 5',
    price: 280,
    distance: '20 min to campus',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1504390747618-f9ea2a96c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybSUyMHJvb218ZW58MXx8fHwxNzYzNzE4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'Kitchen', 'Laundry', 'Pool', 'Study Room'],
    availability: 'Waitlist',
    popular: true,
  },
];

export function DormFinder({ onBack, onFindRoommate }: DormFinderProps) {
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
          <h1 className="mb-2">Find Your Dorm</h1>
          <p className="text-gray-600">
            Explore housing options at Charles University
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Pro Tip */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-900">
            💡 <span>Pro tip: Apply early! Dorms fill up quickly, especially the popular ones.</span>
          </p>
        </div>

        {/* Dorms List */}
        <div className="space-y-6 mb-8">
          {dorms.map((dorm) => (
            <DormCard key={dorm.id} dorm={dorm} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center">
          <h2 className="mb-3 text-white">Found Your Dorm?</h2>
          <p className="mb-6 text-white/90">
            Now find the perfect roommate to share your university journey!
          </p>
          <Button
            onClick={onFindRoommate}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Find a Roommate
          </Button>
        </div>
      </div>
    </div>
  );
}

interface DormCardProps {
  dorm: {
    id: string;
    name: string;
    location: string;
    price: number;
    distance: string;
    rating: number;
    image: string;
    amenities: string[];
    availability: string;
    popular: boolean;
  };
}

function DormCard({ dorm }: DormCardProps) {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-700';
      case 'Waitlist':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'kitchen':
        return <Utensils className="w-4 h-4" />;
      case 'pool':
        return <Waves className="w-4 h-4" />;
      default:
        return <Check className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <ImageWithFallback
            src={dorm.image}
            alt={dorm.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3>{dorm.name}</h3>
                {dorm.popular && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 text-gray-600 mb-1">
                <MapPin className="w-4 h-4" />
                <span>{dorm.location} • {dorm.distance}</span>
              </div>
            </div>
            
            <Badge className={getAvailabilityColor(dorm.availability)}>
              {dorm.availability}
            </Badge>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Euro className="w-5 h-5 text-gray-600" />
              <span>€{dorm.price}/month</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {dorm.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button className="flex-1">
              View Details
            </Button>
            <Button variant="outline">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
