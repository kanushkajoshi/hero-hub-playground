import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Gamepad2, 
  Star, 
  Clock, 
  Users, 
  Trophy,
  Play,
  Zap
} from 'lucide-react';

const GamesInterface: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Earthquake Escape",
      description: "Navigate through a shaking building and find the safest exit route",
      difficulty: "Easy",
      duration: "5-10 mins",
      players: "Single Player",
      category: "Action",
      image: "🏢",
      rating: 4.8,
      plays: 1250,
      unlocked: true
    },
    {
      id: 2,
      title: "Safety Kit Collector",
      description: "Drag and drop essential items to build the perfect emergency kit",
      difficulty: "Easy",
      duration: "3-7 mins", 
      players: "Single Player",
      category: "Puzzle",
      image: "🎒",
      rating: 4.6,
      plays: 980,
      unlocked: true
    },
    {
      id: 3,
      title: "Disaster Quiz Master",
      description: "Test your knowledge with interactive disaster preparedness questions",
      difficulty: "Medium",
      duration: "10-15 mins",
      players: "Single/Multi",
      category: "Quiz",
      image: "🧠",
      rating: 4.7,
      plays: 1100,
      unlocked: true
    },
    {
      id: 4,
      title: "Emergency Response Hero",
      description: "Make quick decisions during various disaster scenarios",
      difficulty: "Medium",
      duration: "8-12 mins",
      players: "Single Player", 
      category: "Strategy",
      image: "🚨",
      rating: 4.9,
      plays: 850,
      unlocked: true
    },
    {
      id: 5,
      title: "Community Safety Challenge",
      description: "Team up with classmates to solve neighborhood safety puzzles",
      difficulty: "Hard",
      duration: "15-20 mins",
      players: "Multiplayer",
      category: "Collaborative",
      image: "🏘️",
      rating: 4.5,
      plays: 650,
      unlocked: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success';
      case 'Medium': return 'bg-warning';
      case 'Hard': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  const handlePlayGame = (gameId: number) => {
    const game = games.find(g => g.id === gameId);
    if (game?.title === "Earthquake Escape") {
      window.open('src/pages/earthquake.html', '_blank');
    } else if (game?.title === "Safety Kit Collector") {
      window.open('src/pages/safetykit.html', '_blank');
    } else {
      alert(`Starting ${game?.title}! 🎮`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-secondary text-white p-6">
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
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Safety Games</h1>
              <p className="text-white/90">Learn through fun and interactive games</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Games Won</div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm text-muted-foreground">Streak Days</div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">7A</div>
              <div className="text-sm text-muted-foreground">Class Rank</div>
            </CardContent>
          </Card>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className={`card-hover ${!game.unlocked ? 'opacity-60' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{game.image}</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{game.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {/* Game Info */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getDifficultyColor(game.difficulty)}>
                      {game.difficulty}
                    </Badge>
                    <Badge variant="outline">{game.category}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {game.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {game.players}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    🎮 {game.plays.toLocaleString()} plays
                  </div>

                  {/* Play Button */}
                  <Button 
                    className="w-full"
                    disabled={!game.unlocked}
                    onClick={() => handlePlayGame(game.id)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {game.unlocked ? 'Play Game' : 'Locked'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Unlock */}
        <Card className="card-hover mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-warning" />
              How to Unlock Games
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <div className="font-medium">Complete Learning Modules</div>
                  <div className="text-sm text-muted-foreground">Finish earthquake safety lessons to unlock new games</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <div className="font-medium">Earn High Scores</div>
                  <div className="text-sm text-muted-foreground">Get 3 stars in current games to unlock advanced levels</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <div className="font-medium">Team Challenges</div>
                  <div className="text-sm text-muted-foreground">Join class competitions to unlock multiplayer games</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GamesInterface;