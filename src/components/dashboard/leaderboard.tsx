import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatar?: string;
  badgeCount: number;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'Arya Sharma', points: 1250, badgeCount: 8 },
  { rank: 2, name: 'Rohan Kumar', points: 1180, badgeCount: 7 },
  { rank: 3, name: 'Priya Patel', points: 1120, badgeCount: 6 },
  { rank: 4, name: 'You', points: 980, badgeCount: 3, isCurrentUser: true },
  { rank: 5, name: 'Ankit Singh', points: 920, badgeCount: 5 },
];

export const Leaderboard: React.FC<{ classLevel: number }> = ({ classLevel }) => {
  // Only show leaderboard for students above class 5
  if (classLevel <= 5) {
    return null;
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-gold" />;
      case 2:
        return <Medal className="w-5 h-5 text-silver" />;
      case 3:
        return <Award className="w-5 h-5 text-bronze" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'badge-gold';
      case 2: return 'badge-silver';
      case 3: return 'badge-bronze';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold" />
          Class Leaderboard
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Top safety heroes in your class
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {leaderboardData.map((entry, index) => (
          <div
            key={entry.rank}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
              entry.isCurrentUser 
                ? 'bg-primary/10 border-2 border-primary/30 animate-pulse-success' 
                : 'bg-muted/30 hover:bg-muted/50'
            }`}
          >
            {/* Rank */}
            <div className="flex items-center justify-center w-8">
              {getRankIcon(entry.rank)}
            </div>

            {/* Avatar */}
            <Avatar className="w-10 h-10">
              <AvatarImage src={entry.avatar} alt={entry.name} />
              <AvatarFallback className="text-sm font-medium">
                {entry.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* Name and Points */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-medium ${entry.isCurrentUser ? 'text-primary font-bold' : ''}`}>
                  {entry.name}
                </span>
                {entry.isCurrentUser && (
                  <Badge variant="secondary" className="text-xs">You</Badge>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {entry.points} points • {entry.badgeCount} badges
              </div>
            </div>

            {/* Rank Badge */}
            <Badge className={getRankBadgeColor(entry.rank)}>
              #{entry.rank}
            </Badge>
          </div>
        ))}

        <div className="text-center pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            Keep learning to climb the leaderboard! 🚀
          </p>
        </div>
      </CardContent>
    </Card>
  );
};