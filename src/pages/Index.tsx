import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, BookOpen, Users, Gamepad2, Star } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with fun, age-appropriate disaster safety modules"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gamified Experience", 
      description: "Earn badges, level up, and compete with friends while learning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Learn essential skills for earthquake, fire, flood, and cyclone safety"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Learning",
      description: "Connect with classmates and learn together in a safe environment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.9)), url(${heroDashboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6 animate-bounce-in">
            <Shield className="w-16 h-16 text-white" />
            <h1 className="text-6xl font-bold">Raksha360</h1>
          </div>
          <h2 className="text-3xl font-semibold mb-6 animate-fade-in">
            Making Disaster Safety Fun for Students! 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Learn, play, and become a safety hero with our interactive disaster preparedness platform. 
            Designed for students to make safety education engaging and memorable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => navigate('/student-dashboard')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 animate-float"
            >
              <Star className="w-5 h-5 mr-2" />
              Enter Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-blue-400 hover:bg-white/10 hover:text-blue-300 text-lg px-8 py-4 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Raksha360?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines education with entertainment to create an engaging 
              disaster preparedness experience for students of all ages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Become a Safety Hero?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning essential disaster preparedness skills 
            through our fun and interactive platform.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/student-dashboard')}
            className="bg-gradient-primary text-lg px-8 py-4 shine"
          >
            <Shield className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Raksha360. Making disaster preparedness education fun and accessible for all students.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
