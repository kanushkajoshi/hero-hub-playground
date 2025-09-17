import React from 'react';
import { ProfileSection } from '@/components/dashboard/profile-section';
import { BadgesSection } from '@/components/dashboard/badges-section';
import { ProgressTracker } from '@/components/dashboard/progress-tracker';
import { Leaderboard } from '@/components/dashboard/leaderboard';
import { QuickActions } from '@/components/dashboard/quick-actions';
import heroDashboard from '@/assets/hero-dashboard.jpg';

// Mock student data - in real app this would come from authentication/database
const studentData = {
  name: 'Priya',
  class: '7A',
  avatar: undefined,
  level: 4,
  totalLevels: 10,
  xp: 980,
  totalXp: 1200,
  classLevel: 7, // Numeric class level for leaderboard logic
};

const StudentDashboard: React.FC = () => {
  const [isOffline] = React.useState(false); // This would be determined by actual network status

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="h-32 bg-cover bg-center relative overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(59, 130, 246, 0.8)), url(${heroDashboard})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero/20" />
        <div className="absolute bottom-4 left-6 text-white">
          <h1 className="text-2xl font-bold">Raksha360 Dashboard</h1>
          <p className="text-white/90">Your journey to becoming a safety hero!</p>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 py-6 -mt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - Profile & Quick Actions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Profile Section */}
            <ProfileSection student={studentData} />
            
            {/* Quick Actions */}
            <QuickActions isOffline={isOffline} />
          </div>

          {/* Right Column - Progress & Social */}
          <div className="lg:col-span-4 space-y-6">
            {/* Progress Tracker */}
            <ProgressTracker />
            
            {/* Leaderboard (only for class 6+) */}
            <Leaderboard classLevel={studentData.classLevel} />
            
            {/* Badges Section */}
            <BadgesSection />
          </div>
        </div>

        {/* Footer Fun Facts */}
        <div className="mt-8 p-6 bg-muted/30 rounded-xl">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">💡 Safety Tip of the Day</h3>
            <p className="text-muted-foreground">
              Always remember the "Drop, Cover, and Hold On" technique during an earthquake! 
              Practice makes perfect - just like in your favorite games! 🎮
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;