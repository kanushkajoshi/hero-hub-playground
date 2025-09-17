import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress-bar';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Backpack, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb,
  Plus,
  Minus,
  Package
} from 'lucide-react';

interface KitItem {
  id: string;
  name: string;
  category: string;
  importance: 'Essential' | 'Important' | 'Useful';
  description: string;
  emoji: string;
  quantity?: number;
  inKit: boolean;
}

const SafetyKitBuilder: React.FC = () => {
  const navigate = useNavigate();
  
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const kitItems: KitItem[] = [
    // Essential Items
    { id: 'water', name: 'Water (1 gallon per person)', category: 'Survival', importance: 'Essential', description: 'Clean drinking water for 3 days', emoji: '💧', inKit: false },
    { id: 'food', name: 'Non-perishable Food', category: 'Survival', importance: 'Essential', description: '3-day supply of canned/dried food', emoji: '🥫', inKit: false },
    { id: 'flashlight', name: 'Flashlight', category: 'Tools', importance: 'Essential', description: 'Battery-powered or hand crank', emoji: '🔦', inKit: false },
    { id: 'radio', name: 'Emergency Radio', category: 'Communication', importance: 'Essential', description: 'Battery/hand crank weather radio', emoji: '📻', inKit: false },
    { id: 'first-aid', name: 'First Aid Kit', category: 'Medical', importance: 'Essential', description: 'Bandages, medicines, antiseptic', emoji: '🩹', inKit: false },
    
    // Important Items
    { id: 'whistle', name: 'Whistle', category: 'Safety', importance: 'Important', description: 'Signal for help if trapped', emoji: '🟡', inKit: false },
    { id: 'mask', name: 'Dust Masks', category: 'Safety', importance: 'Important', description: 'Filter contaminated air', emoji: '😷', inKit: false },
    { id: 'wrench', name: 'Wrench/Pliers', category: 'Tools', importance: 'Important', description: 'Turn off gas and water', emoji: '🔧', inKit: false },
    { id: 'can-opener', name: 'Manual Can Opener', category: 'Tools', importance: 'Important', description: 'Open canned food without power', emoji: '🥫', inKit: false },
    { id: 'local-maps', name: 'Local Maps', category: 'Navigation', importance: 'Important', description: 'Paper maps of your area', emoji: '🗺️', inKit: false },
    { id: 'phone-charger', name: 'Phone Charger', category: 'Communication', importance: 'Important', description: 'Solar or battery-powered', emoji: '🔌', inKit: false },
    
    // Useful Items
    { id: 'cash', name: 'Cash in Small Bills', category: 'Financial', importance: 'Useful', description: 'ATMs may not work', emoji: '💵', inKit: false },
    { id: 'blankets', name: 'Emergency Blankets', category: 'Comfort', importance: 'Useful', description: 'Stay warm and dry', emoji: '🛏️', inKit: false },
    { id: 'clothes', name: 'Extra Clothing', category: 'Comfort', importance: 'Useful', description: 'Sturdy shoes and warm clothes', emoji: '👕', inKit: false },
    { id: 'hygiene', name: 'Personal Hygiene Items', category: 'Health', importance: 'Useful', description: 'Toothbrush, soap, sanitizer', emoji: '🧼', inKit: false },
    { id: 'games', name: 'Books/Games for Kids', category: 'Comfort', importance: 'Useful', description: 'Keep children calm and occupied', emoji: '🎲', inKit: false }
  ];

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Essential': return 'destructive';
      case 'Important': return 'default';
      case 'Useful': return 'secondary';
      default: return 'outline';
    }
  };

  const categories = ['Survival', 'Tools', 'Communication', 'Medical', 'Safety', 'Navigation', 'Financial', 'Comfort', 'Health'];
  
  const essentialCount = selectedItems.filter(id => 
    kitItems.find(item => item.id === id)?.importance === 'Essential'
  ).length;
  
  const totalEssential = kitItems.filter(item => item.importance === 'Essential').length;
  
  const kitCompleteness = (selectedItems.length / kitItems.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-warning text-white p-6">
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
              <Backpack className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Emergency Kit Builder</h1>
              <p className="text-white/90">Build your family's disaster preparedness kit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Instructions */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  How to Build Your Kit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <div className="font-medium text-destructive">Start with Essentials</div>
                      <div className="text-sm text-muted-foreground">These items are critical for survival in the first 72 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <div className="font-medium text-primary">Add Important Items</div>
                      <div className="text-sm text-muted-foreground">These help you stay safe and communicate during disasters</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <div className="font-medium text-secondary">Consider Useful Items</div>
                      <div className="text-sm text-muted-foreground">These provide comfort and convenience during extended emergencies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Items by Category */}
            {categories.map(category => {
              const categoryItems = kitItems.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;
              
              return (
                <Card key={category} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {categoryItems.map((item) => (
                        <div 
                          key={item.id}
                          className={`
                            p-4 rounded-lg border cursor-pointer transition-all duration-200
                            ${selectedItems.includes(item.id) 
                              ? 'border-primary bg-primary/10 shadow-md' 
                              : 'border-border hover:border-primary/50 hover:shadow-sm'
                            }
                          `}
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-2xl">{item.emoji}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-medium">{item.name}</h4>
                                <Badge variant={getImportanceColor(item.importance)}>
                                  {item.importance}
                                </Badge>
                                {selectedItems.includes(item.id) && (
                                  <CheckCircle className="w-5 h-5 text-success" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar - Kit Summary */}
          <div className="space-y-6">
            
            {/* Kit Progress */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Your Kit Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ProgressBar 
                  value={selectedItems.length} 
                  max={kitItems.length} 
                  label="Items Selected"
                  variant="success"
                />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Essential Items:</span>
                    <span className={essentialCount === totalEssential ? 'text-success font-bold' : 'text-destructive'}>
                      {essentialCount}/{totalEssential}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Items:</span>
                    <span>{selectedItems.length}/{kitItems.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Kit Completeness:</span>
                    <span>{Math.round(kitCompleteness)}%</span>
                  </div>
                </div>

                {essentialCount < totalEssential ? (
                  <div className="flex items-start gap-2 p-3 bg-destructive/10 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-destructive">Missing Essential Items</div>
                      <div className="text-muted-foreground">Add {totalEssential - essentialCount} more essential items</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-success">Essentials Complete!</div>
                      <div className="text-muted-foreground">You have all essential items</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Selected Items Summary */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Selected Items ({selectedItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedItems.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    <Backpack className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Start selecting items for your emergency kit!</p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {selectedItems.map(itemId => {
                      const item = kitItems.find(i => i.id === itemId);
                      if (!item) return null;
                      return (
                        <div key={itemId} className="flex items-center gap-2 p-2 bg-muted/30 rounded text-sm">
                          <span>{item.emoji}</span>
                          <span className="flex-1 truncate">{item.name}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleItem(itemId)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Kit Tips */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>🔄 <strong>Rotate supplies:</strong> Check expiration dates every 6 months</div>
                  <div>📍 <strong>Multiple locations:</strong> Keep kits at home, work, and in car</div>
                  <div>👨‍👩‍👧‍👦 <strong>Family specific:</strong> Include items for babies, elderly, pets</div>
                  <div>💊 <strong>Medications:</strong> Include prescriptions and medical devices</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyKitBuilder;