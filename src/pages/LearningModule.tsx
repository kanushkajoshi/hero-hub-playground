import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress-bar';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  AlertTriangle, 
  Shield, 
  CheckCircle,
  Play,
  Clock
} from 'lucide-react';

const LearningModule: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const earthquakeFacts = [
    "🌍 Earthquakes happen when tectonic plates move suddenly",
    "📊 Over 500,000 earthquakes occur worldwide each year",
    "⚡ Most earthquakes last less than one minute",
    "🏠 'Drop, Cover, and Hold On' is the safest action during shaking",
    "📱 Early warning systems can give 10-60 seconds notice"
  ];

  const safetyTips = [
    {
      title: "Before an Earthquake",
      tips: [
        "Create a family emergency plan",
        "Secure heavy furniture to walls",
        "Keep emergency supplies ready",
        "Learn safe spots in each room"
      ]
    },
    {
      title: "During an Earthquake", 
      tips: [
        "Drop to hands and knees immediately",
        "Take cover under a sturdy table",
        "Hold on and protect your head",
        "Stay away from windows and mirrors"
      ]
    },
    {
      title: "After an Earthquake",
      tips: [
        "Check for injuries and hazards",
        "Turn off gas if you smell leaks",
        "Use stairs, never elevators",
        "Stay alert for aftershocks"
      ]
    }
  ];

  const levels = [
    {
      id: 1,
      title: "Decision-Making Scenarios",
      description: "Test your earthquake response skills",
      duration: "10 mins",
      difficulty: "Easy",
      completed: false,
      locked: false
    },
    {
      id: 2, 
      title: "Emergency Kit Collection",
      description: "Build your earthquake survival kit",
      duration: "15 mins",
      difficulty: "Medium",
      completed: false,
      locked: false
    },
    {
      id: 3,
      title: "Evacuation Master",
      description: "Plan safe evacuation routes",
      duration: "20 mins", 
      difficulty: "Hard",
      completed: false,
      locked: true
    }
  ];

  const handleStartLevel = (levelId: number) => {
    if (levelId === 1) {
      navigate('/learning/decision-making');
    } else if (levelId === 2) {
      navigate('/learning/emergency-kit');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/student-dashboard')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Earthquake Safety Module</h1>
              <p className="text-white/90">Learn essential earthquake preparedness skills</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Earthquake Facts */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Quick Earthquake Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {earthquakeFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{fact}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Essential Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {safetyTips.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg mb-3 text-primary">{section.title}</h3>
                      <div className="grid gap-2">
                        {section.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Learning Levels */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Learning Levels</CardTitle>
                <ProgressBar 
                  value={0} 
                  max={3} 
                  label="Module Progress"
                  variant="success"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                {levels.map((level) => (
                  <div key={level.id} className={`
                    p-4 rounded-lg border transition-all duration-200
                    ${level.locked 
                      ? 'bg-muted/30 border-muted' 
                      : 'bg-background border-border hover:border-primary hover:shadow-md cursor-pointer'
                    }
                  `}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className={`font-medium ${level.locked ? 'text-muted-foreground' : 'text-foreground'}`}>
                          Level {level.id}: {level.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                      </div>
                      {level.completed && (
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={level.difficulty === 'Easy' ? 'default' : level.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {level.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {level.duration}
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      className="w-full"
                      disabled={level.locked}
                      onClick={() => handleStartLevel(level.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {level.locked ? 'Locked' : 'Start Level'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement Preview */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Unlock Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium text-sm">Earthquake Hero</div>
                      <div className="text-xs text-muted-foreground">Complete all levels</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      🛡️
                    </div>
                    <div>
                      <div className="font-medium text-sm">Safety Expert</div>
                      <div className="text-xs text-muted-foreground">Perfect quiz scores</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;