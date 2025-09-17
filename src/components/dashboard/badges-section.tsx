import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDisplay } from '@/components/ui/badge-display';
import { Trophy, Shield, Star, Heart, Flame, Zap } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  description: string;
  type: 'gold' | 'silver' | 'bronze';
  icon: React.ReactNode;
  earned: boolean;
}

const badges: Badge[] = [
  {
    id: 'earthquake-hero',
    title: 'Earthquake Hero',
    description: 'Mastered earthquake safety',
    type: 'gold',
    icon: <Zap className="w-6 h-6" />,
    earned: true,
  },
  {
    id: 'fire-drill-star',
    title: 'Fire Drill Star', 
    description: 'Completed fire safety training',
    type: 'gold',
    icon: <Flame className="w-6 h-6" />,
    earned: true,
  },
  {
    id: 'first-aid-champion',
    title: 'First Aid Champion',
    description: 'Basic first aid certified',
    type: 'silver',
    icon: <Heart className="w-6 h-6" />,
    earned: true,
  },
  {
    id: 'safety-guardian',
    title: 'Safety Guardian',
    description: 'Complete all safety modules',
    type: 'bronze',
    icon: <Shield className="w-6 h-6" />,
    earned: false,
  },
  {
    id: 'emergency-expert',
    title: 'Emergency Expert',
    description: 'Advanced emergency prep',
    type: 'gold',
    icon: <Trophy className="w-6 h-6" />,
    earned: false,
  },
  {
    id: 'community-helper',
    title: 'Community Helper',
    description: 'Helped classmates learn',
    type: 'silver',
    icon: <Star className="w-6 h-6" />,
    earned: false,
  },
];

export const BadgesSection: React.FC = () => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const nextBadges = badges.filter(badge => !badge.earned).slice(0, 2);

  return (
    <div className="space-y-6">
      {/* Earned Badges */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-gold" />
            Your Achievements ({earnedBadges.length}/{badges.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {earnedBadges.map((badge) => (
              <BadgeDisplay
                key={badge.id}
                type={badge.type}
                title={badge.title}
                description={badge.description}
                icon={badge.icon}
                earned={badge.earned}
                size="md"
                className="animate-bounce-in"
              />
            ))}
          </div>
          {earnedBadges.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Trophy className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Start learning to earn your first badge!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Next Badges to Earn */}
      {nextBadges.length > 0 && (
        <Card className="border-dashed border-2 border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <Star className="w-5 h-5" />
              Next Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {nextBadges.map((badge) => (
                <BadgeDisplay
                  key={badge.id}
                  type={badge.type}
                  title={badge.title}
                  description={badge.description}
                  icon={badge.icon}
                  earned={badge.earned}
                  size="md"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};