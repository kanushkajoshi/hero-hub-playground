import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap, Flame, Droplets, Wind } from 'lucide-react';

interface DisasterModule {
  id: string;
  name: string;
  icon: React.ReactNode;
  completed: number;
  total: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  color: 'success' | 'warning' | 'info';
}

const modules: DisasterModule[] = [
  {
    id: 'earthquake',
    name: 'Earthquake Safety',
    icon: <Zap className="w-5 h-5" />,
    completed: 2,
    total: 3,
    difficulty: 'Beginner',
    color: 'warning',
  },
  {
    id: 'fire',
    name: 'Fire Emergency',
    icon: <Flame className="w-5 h-5" />,
    completed: 3,
    total: 4,
    difficulty: 'Intermediate',
    color: 'success',
  },
  {
    id: 'flood',
    name: 'Flood Preparedness',
    icon: <Droplets className="w-5 h-5" />,
    completed: 1,
    total: 3,
    difficulty: 'Beginner',
    color: 'info',
  },
  {
    id: 'cyclone',
    name: 'Cyclone Safety',
    icon: <Wind className="w-5 h-5" />,
    completed: 0,
    total: 4,
    difficulty: 'Advanced',
    color: 'warning',
  },
];

export const ProgressTracker: React.FC = () => {
  const totalCompleted = modules.reduce((sum, module) => sum + module.completed, 0);
  const totalLessons = modules.reduce((sum, module) => sum + module.total, 0);

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Learning Progress
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {totalCompleted} of {totalLessons} lessons completed
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Progress */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <ProgressBar
            value={totalCompleted}
            max={totalLessons}
            label="Overall Progress"
            variant="success"
            size="lg"
          />
        </div>

        {/* Individual Modules */}
        <div className="space-y-3">
          {modules.map((module) => (
            <div key={module.id} className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-muted/30 transition-colors">
              <div className={`p-2 rounded-full ${
                module.color === 'success' ? 'bg-success/20 text-success' :
                module.color === 'warning' ? 'bg-warning/20 text-warning' :
                'bg-info/20 text-info'
              }`}>
                {module.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium">{module.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    module.difficulty === 'Beginner' ? 'bg-success/20 text-success' :
                    module.difficulty === 'Intermediate' ? 'bg-warning/20 text-warning' :
                    'bg-destructive/20 text-destructive'
                  }`}>
                    {module.difficulty}
                  </span>
                </div>
                <ProgressBar
                  value={module.completed}
                  max={module.total}
                  variant={module.color}
                  size="sm"
                  showPercentage={false}
                />
              </div>
              
              <Button
                size="sm"
                variant={module.completed === module.total ? "secondary" : "default"}
                className="ml-2"
              >
                {module.completed === module.total ? 'Review' : 'Continue'}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};