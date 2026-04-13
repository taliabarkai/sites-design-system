import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeStyles = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  return (
    <div className={`w-full mx-auto px-spacing-md ${sizeStyles[size]} ${className}`.trim()}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const gapStyles = {
  sm: 'gap-spacing-sm',
  md: 'gap-spacing-md',
  lg: 'gap-spacing-lg',
};

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 'md',
  className = '',
}) => {
  const gridColsClass = `grid-cols-${columns}`;
  return (
    <div
      className={`grid ${gridColsClass} ${gapStyles[gap]} ${className}`.trim()}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';

interface GridItemProps {
  children: React.ReactNode;
  colSpan?: number;
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  colSpan = 1,
  className = '',
}) => {
  return (
    <div className={className} style={{ gridColumn: `span ${colSpan}` }}>
      {children}
    </div>
  );
};

GridItem.displayName = 'GridItem';
