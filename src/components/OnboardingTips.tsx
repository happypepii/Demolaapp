import { ArrowLeft, CheckCircle2, AlertCircle, Calendar, FileText, Home, CreditCard, Users, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';

interface OnboardingTipsProps {
  onBack: () => void;
}

const timeline = [
  {
    title: '6-8 Months Before',
    tasks: [
      'Research universities and programs',
      'Check application deadlines',
      'Start preparing required documents',
      'Take language proficiency tests if needed',
    ],
    status: 'complete',
  },
  {
    title: '3-6 Months Before',
    tasks: [
      'Submit university applications',
      'Apply for student visa',
      'Look for housing options',
      'Apply for scholarships',
    ],
    status: 'complete',
  },
  {
    title: '1-3 Months Before',
    tasks: [
      'Book accommodation',
      'Arrange health insurance',
      'Book flights',
      'Open a bank account (if possible)',
    ],
    status: 'current',
  },
  {
    title: 'First Week',
    tasks: [
      'Attend orientation sessions',
      'Register at local authorities',
      'Set up utilities and internet',
      'Join student clubs',
    ],
    status: 'upcoming',
  },
];

export function OnboardingTips({ onBack }: OnboardingTipsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Chat
          </button>
          <h1 className="mb-3 text-white">Freshman Onboarding Guide</h1>
          <p className="text-white/90">
            Everything you need to know to start your university journey
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Timeline */}
        <div className="mb-12">
          <h2 className="mb-6">Your Timeline</h2>
          <div className="space-y-4">
            {timeline.map((phase, index) => (
              <TimelineCard key={index} phase={phase} />
            ))}
          </div>
        </div>

        {/* Essential Guides */}
        <div className="mb-12">
          <h2 className="mb-6">Essential Guides</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="documents">
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Required Documents</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>Passport (valid for at least 6 months)</span>
                      <p className="text-gray-600">Make copies and keep them separate from the original</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>University acceptance letter</span>
                      <p className="text-gray-600">Both physical and digital copies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>Proof of accommodation</span>
                      <p className="text-gray-600">Dorm confirmation or rental contract</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>Health insurance certificate</span>
                      <p className="text-gray-600">International coverage is essential</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>Bank statements</span>
                      <p className="text-gray-600">Proof of financial means (usually €5,000-10,000)</p>
                    </div>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="housing">
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-purple-600" />
                  <span>Housing Setup</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Moving In</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Check inventory list and document any damage</li>
                      <li>• Test all appliances and report issues immediately</li>
                      <li>• Take photos of the room condition</li>
                      <li>• Get keys and access cards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2">What to Bring</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bedding (sometimes provided, check first!)</li>
                      <li>• Basic kitchen utensils</li>
                      <li>• Laptop and chargers</li>
                      <li>• Clothes for all seasons</li>
                      <li>• Personal hygiene items</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="banking">
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span>Banking & Finances</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-900">
                      💡 Most Czech banks offer free student accounts. Bring your student ID!
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">Monthly Budget Estimate</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Accommodation: €200-400</li>
                      <li>• Food: €150-250</li>
                      <li>• Transport: €15-30 (student pass)</li>
                      <li>• Entertainment: €100-200</li>
                      <li>• Total: €500-900/month</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social">
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-pink-600" />
                  <span>Making Friends & Social Life</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Best Ways to Meet People</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Join student clubs and societies</li>
                      <li>• Attend orientation events</li>
                      <li>• Participate in buddy programs</li>
                      <li>• Join study groups</li>
                      <li>• Attend social events in your dorm</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-900">
                        Don't worry if you feel homesick at first - it's completely normal! Most students feel this way in the first few weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="career">
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <span>Career & Opportunities</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Getting Started</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Register with career services in your first semester</li>
                      <li>• Attend career fairs and networking events</li>
                      <li>• Look for internship opportunities early</li>
                      <li>• Build your LinkedIn profile</li>
                      <li>• Join professional student associations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2">Part-time Work</h4>
                    <p className="text-gray-700 mb-2">
                      International students can work up to 20 hours/week during term time.
                    </p>
                    <p className="text-gray-700">
                      Popular student jobs: tutoring, cafe work, campus jobs, research assistant
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-white">
          <h2 className="mb-4 text-white">Quick Survival Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="mb-2 text-white">Learn Basic Czech</h3>
              <p className="text-white/90">
                "Dobrý den" (hello), "Děkuji" (thank you), "Prosím" (please/you're welcome)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="mb-2 text-white">Get a Student Discount Card</h3>
              <p className="text-white/90">
                ISIC card gets you discounts on transport, museums, restaurants, and more
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="mb-2 text-white">Download Essential Apps</h3>
              <p className="text-white/90">
                PID Lítačka (transport), Bolt (taxi), Wolt (food delivery)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="mb-2 text-white">Emergency Numbers</h3>
              <p className="text-white/90">
                112 (Emergency), 155 (Ambulance), 158 (Police)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TimelineCardProps {
  phase: {
    title: string;
    tasks: string[];
    status: 'complete' | 'current' | 'upcoming';
  };
}

function TimelineCard({ phase }: TimelineCardProps) {
  const getStatusColor = () => {
    switch (phase.status) {
      case 'complete':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'current':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'upcoming':
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusBadge = () => {
    switch (phase.status) {
      case 'complete':
        return <Badge className="bg-green-600 text-white">Complete</Badge>;
      case 'current':
        return <Badge className="bg-blue-600 text-white">Current</Badge>;
      case 'upcoming':
        return <Badge variant="secondary">Upcoming</Badge>;
    }
  };

  return (
    <div className={`border rounded-lg p-5 ${getStatusColor()}`}>
      <div className="flex items-center justify-between mb-3">
        <h3>{phase.title}</h3>
        {getStatusBadge()}
      </div>
      <ul className="space-y-2">
        {phase.tasks.map((task, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                phase.status === 'complete'
                  ? 'text-green-600'
                  : phase.status === 'current'
                  ? 'text-blue-600'
                  : 'text-gray-400'
              }`}
            />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
