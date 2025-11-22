import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { UniversityList } from './components/UniversityList';
import { UniversityProfile } from './components/UniversityProfile';
import { ProgramReviews } from './components/ProgramReviews';
import { DormFinder } from './components/DormFinder';
import { RoommateMatching } from './components/RoommateMatching';
import { StudentMentorChat } from './components/StudentMentorChat';
import { OnboardingTips } from './components/OnboardingTips';

export type Screen = 
  | 'welcome'
  | 'university-list'
  | 'university-profile'
  | 'program-reviews'
  | 'dorm-finder'
  | 'roommate-matching'
  | 'mentor-chat'
  | 'onboarding-tips';

export type University = {
  id: string;
  name: string;
  location: string;
  rating: number;
  studentCount: string;
  image: string;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  const navigateToUniversityProfile = (university: University) => {
    setSelectedUniversity(university);
    setCurrentScreen('university-profile');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('university-list')} />;
      case 'university-list':
        return <UniversityList onSelectUniversity={navigateToUniversityProfile} />;
      case 'university-profile':
        return (
          <UniversityProfile
            university={selectedUniversity!}
            onBack={() => setCurrentScreen('university-list')}
            onViewPrograms={() => setCurrentScreen('program-reviews')}
            onFindDorm={() => setCurrentScreen('dorm-finder')}
            onFindRoommate={() => setCurrentScreen('roommate-matching')}
            onChatMentor={() => setCurrentScreen('mentor-chat')}
          />
        );
      case 'program-reviews':
        return (
          <ProgramReviews
            university={selectedUniversity!}
            onBack={() => setCurrentScreen('university-profile')}
          />
        );
      case 'dorm-finder':
        return (
          <DormFinder
            onBack={() => setCurrentScreen('university-profile')}
            onFindRoommate={() => setCurrentScreen('roommate-matching')}
          />
        );
      case 'roommate-matching':
        return (
          <RoommateMatching
            onBack={() => setCurrentScreen('dorm-finder')}
            onChatMentor={() => setCurrentScreen('mentor-chat')}
          />
        );
      case 'mentor-chat':
        return (
          <StudentMentorChat
            onBack={() => setCurrentScreen('university-profile')}
            onViewOnboarding={() => setCurrentScreen('onboarding-tips')}
          />
        );
      case 'onboarding-tips':
        return (
          <OnboardingTips
            onBack={() => setCurrentScreen('mentor-chat')}
          />
        );
      default:
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('university-list')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}
