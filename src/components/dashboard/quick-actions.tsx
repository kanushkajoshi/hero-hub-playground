import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Gamepad2, 
  Backpack, 
  Users, 
  MessageCircle, 
  Download,
  Wifi,
  WifiOff
} from 'lucide-react';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  isPrimary?: boolean;
}

const quickActions: QuickAction[] = [
  {
    id: 'learn',
    title: 'Start Learning',
    description: 'Explore disaster safety modules',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    href: '/learn',
    isPrimary: true,
  },
  {
    id: 'play',
    title: 'Play Games',
    description: 'Fun safety challenges & quizzes',
    icon: <Gamepad2 className="w-6 h-6" />,
    color: 'bg-gradient-secondary',
    href: '/games',
    isPrimary: true,
  },
  {
    id: 'safety-kit',
    title: 'Safety Kit Builder',
    description: 'Build your emergency kit',
    icon: <Backpack className="w-6 h-6" />,
    color: 'bg-gradient-warning',
    href: '/safety-kit',
    isPrimary: true,
  },
  {
    id: 'community',
    title: 'Ask Friends',
    description: 'Get help from classmates',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-gradient-success',
    href: '/community',
  },
  {
    id: 'chat',
    title: 'Safety Bot',
    description: 'Chat with Raksha AI',
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'bg-gradient-gold',
    href: '/chat',
  },
  {
    id: 'offline',
    title: 'Offline Content',
    description: 'Download for offline use',
    icon: <Download className="w-6 h-6" />,
    color: 'bg-muted',
    href: '/offline',
  },
];

export const QuickActions: React.FC<{ isOffline?: boolean }> = ({ isOffline = false }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      {/* Offline Status */}
      <Card className={`p-4 ${isOffline ? 'border-warning bg-warning/10' : 'border-success bg-success/10'}`}>
        <div className="flex items-center gap-3">
          {isOffline ? (
            <WifiOff className="w-5 h-5 text-warning" />
          ) : (
            <Wifi className="w-5 h-5 text-success" />
          )}
          <div className="flex-1">
            <span className={`font-medium ${isOffline ? 'text-warning' : 'text-success'}`}>
              {isOffline ? 'Offline Mode' : 'Online'}
            </span>
            <p className="text-sm text-muted-foreground">
              {isOffline 
                ? 'Limited content available. Connect to internet for full experience.' 
                : 'All content and features available.'
              }
            </p>
          </div>
        </div>
      </Card>

      {/* Primary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.filter(action => action.isPrimary).map((action) => (
          <Button
            key={action.id}
            variant="outline"
            size="lg"
            className={`
              h-auto p-6 flex flex-col items-center space-y-3 
              ${action.color} text-white border-0 
              hover:scale-105 transition-all duration-300
              shadow-card hover:shadow-elevated
              shine
            `}
            onClick={() => navigate(action.href)}
          >
            <div className="p-3 bg-white/20 rounded-full">
              {action.icon}
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">{action.title}</h3>
              <p className="text-sm text-white/80 mt-1">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>

      {/* Secondary Actions */}
      <Card className="card-hover">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>More Activities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickActions.filter(action => !action.isPrimary).map((action) => (
              <Button
                key={action.id}
                variant="ghost"
                size="sm"
                className="flex flex-col items-center space-y-2 h-auto p-4 hover:bg-muted/50"
                onClick={() => navigate(action.href)}
              >
                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                  {action.icon}
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};