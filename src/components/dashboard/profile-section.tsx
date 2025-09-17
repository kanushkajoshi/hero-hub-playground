import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProgressBar } from '@/components/ui/progress-bar';
import studentAvatars from '@/assets/student-avatars.jpg';

interface ProfileSectionProps {
  student: {
    name: string;
    class: string;
    avatar?: string;
    level: number;
    totalLevels: number;
    xp: number;
    totalXp: number;
  };
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ student }) => {
  return (
    <Card className="p-6 bg-gradient-hero text-white card-hover">
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16 border-4 border-white/20">
          <AvatarImage 
            src={student.avatar || studentAvatars} 
            alt={`${student.name}'s avatar`}
          />
          <AvatarFallback className="bg-white/20 text-white text-lg font-bold">
            {student.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">
            Welcome back, {student.name}! 👋
          </h2>
          <p className="text-white/80 mb-3">
            Class {student.class} • Level {student.level} Safety Hero
          </p>
          
          <ProgressBar
            value={student.xp}
            max={student.totalXp}
            label="Progress to Next Level"
            variant="success"
            size="lg"
          />
        </div>
        
        <div className="text-center">
          <div className="bg-white/20 rounded-xl p-4">
            <div className="text-3xl font-bold">{student.level}</div>
            <div className="text-sm text-white/80">Level</div>
          </div>
        </div>
      </div>
    </Card>
  );
};