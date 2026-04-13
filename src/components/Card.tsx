import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outline' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  sm: 'p-spacing-sm',
  md: 'p-spacing-md',
  lg: 'p-spacing-lg',
};

const variantStyles = {
  filled: 'bg-secondary border border-border',
  outline: 'border-2 border-border bg-white',
  elevated: 'bg-white shadow-lg',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'filled',
  padding = 'md',
}) => {
  const baseStyles = 'rounded-lg transition-all duration-200';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

Card.displayName = 'Card';

// Card Sub-components
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`border-b border-border pb-spacing-md mb-spacing-md ${className}`.trim()}>
    {children}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`${className}`.trim()}>{children}</div>;

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`border-t border-border pt-spacing-md mt-spacing-md flex justify-end gap-spacing-sm ${className}`.trim()}>
    {children}
  </div>
);

CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
