import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BadgeDisplayProps {
  type: 'gold' | 'silver' | 'bronze';
  title: string;
  description?: string;
  icon?: React.ReactNode;
  earned?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BadgeDisplay: React.FC<BadgeDisplayProps> = ({
  type,
  title,
  description,
  icon,
  earned = true,
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-20 h-20 text-base',
  };

  const typeClasses = {
    gold: 'badge-gold',
    silver: 'badge-silver', 
    bronze: 'badge-bronze',
  };

  return (
    <div className={cn("text-center", className)}>
      <div className={cn(
        "rounded-full flex items-center justify-center mx-auto mb-2 relative",
        "transition-all duration-300 hover:scale-110",
        sizeClasses[size],
        earned ? typeClasses[type] : "bg-muted text-muted-foreground",
        earned && "shine animate-float"
      )}>
        {icon}
        {!earned && (
          <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-xs">🔒</span>
          </div>
        )}
      </div>
      <h4 className={cn(
        "font-semibold",
        size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base',
        earned ? 'text-foreground' : 'text-muted-foreground'
      )}>
        {title}
      </h4>
      {description && (
        <p className="text-xs text-muted-foreground mt-1 max-w-20 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};