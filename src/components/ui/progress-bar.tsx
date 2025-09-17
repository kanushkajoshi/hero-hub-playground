import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'info';
  showPercentage?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  size = 'md',
  variant = 'default',
  showPercentage = true,
  animated = true,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const variantClasses = {
    default: 'bg-gradient-primary',
    success: 'bg-gradient-success',
    warning: 'bg-gradient-warning',
    info: 'bg-gradient-secondary',
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && (
            <span className="text-sm text-muted-foreground">
              {value}/{max} ({Math.round(percentage)}%)
            </span>
          )}
        </div>
      )}
      <div className={cn(
        "w-full bg-muted rounded-full overflow-hidden",
        sizeClasses[size]
      )}>
        <div
          className={cn(
            "h-full transition-all duration-1000 ease-out rounded-full",
            variantClasses[variant],
            animated && "progress-fill"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};