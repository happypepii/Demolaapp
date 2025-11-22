import { ArrowLeft, Send, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useState } from 'react';

interface StudentMentorChatProps {
  onBack: () => void;
  onViewOnboarding: () => void;
}

const mentors = [
  {
    id: '1',
    name: 'Sarah Chen',
    program: 'IR, 3rd Year',
    online: true,
    lastMessage: 'Happy to help! Feel free to ask anything.',
    unread: 2,
  },
  {
    id: '2',
    name: 'Marcus Berg',
    program: 'Economics, 2nd Year',
    online: false,
    lastMessage: 'The dorms are great, I can give you...',
    unread: 0,
  },
  {
    id: '3',
    name: 'Elena Popov',
    program: 'Computer Science, 4th Year',
    online: true,
    lastMessage: 'Sure! Let me know what you need.',
    unread: 0,
  },
];

const messages = [
  {
    id: '1',
    sender: 'sarah',
    text: 'Hi! Welcome to Charles University! 👋',
    time: '10:23 AM',
  },
  {
    id: '2',
    sender: 'sarah',
    text: "I'm Sarah, a 3rd year IR student. How can I help you today?",
    time: '10:23 AM',
  },
  {
    id: '3',
    sender: 'me',
    text: "Hi Sarah! I'm thinking about applying to the IR program. What's it really like?",
    time: '10:25 AM',
  },
  {
    id: '4',
    sender: 'sarah',
    text: "It's honestly amazing! The professors are incredible and many have real diplomatic experience. The coursework is challenging but super interesting.",
    time: '10:26 AM',
  },
  {
    id: '5',
    sender: 'sarah',
    text: 'Prague is also the perfect city to study international relations - lots of embassies and international organizations here.',
    time: '10:26 AM',
  },
  {
    id: '6',
    sender: 'me',
    text: 'That sounds great! What about housing? Is it hard to find a place?',
    time: '10:28 AM',
  },
  {
    id: '7',
    sender: 'sarah',
    text: "Apply early for dorms! They fill up quickly. I'd recommend Hlávkova or Větrník - they're close to campus and have great facilities.",
    time: '10:29 AM',
  },
];

export function StudentMentorChat({ onBack, onViewOnboarding }: StudentMentorChatProps) {
  const [newMessage, setNewMessage] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center justify-between">
            <h1>Student Mentors</h1>
            <Button variant="outline" onClick={onViewOnboarding}>
              <BookOpen className="w-4 h-4 mr-2" />
              Onboarding Tips
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex max-w-6xl mx-auto w-full bg-white">
        {/* Mentors List */}
        <div className="w-80 border-r">
          <div className="p-4 border-b">
            <h3>Available Mentors</h3>
          </div>
          <div className="overflow-y-auto">
            {mentors.map((mentor) => (
              <button
                key={mentor.id}
                onClick={() => setSelectedMentor(mentor)}
                className={`w-full p-4 border-b hover:bg-gray-50 transition-colors text-left ${
                  selectedMentor.id === mentor.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-blue-600 text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {mentor.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span>{mentor.name}</span>
                      {mentor.unread > 0 && (
                        <Badge className="bg-blue-600 text-white px-2 py-0">
                          {mentor.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-1">{mentor.program}</p>
                    <p className="text-gray-500 truncate">{mentor.lastMessage}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-blue-600 text-white">
                  {selectedMentor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3>{selectedMentor.name}</h3>
                <p className="text-gray-600">{selectedMentor.program}</p>
              </div>
              {selectedMentor.online && (
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Online
                </Badge>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-lg ${
                    message.sender === 'me'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className={message.sender === 'me' ? 'text-white' : ''}>{message.text}</p>
                  <p
                    className={`mt-1 ${
                      message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setNewMessage('');
                  }
                }}
              />
              <Button>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-500 mt-2">
              💡 Tip: Be respectful and specific with your questions to get the best advice!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
