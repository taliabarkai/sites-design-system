import React from 'react';

export type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
}) => {
  const Tag = (`h${level}` as const) as 'h1' | 'h2' | 'h3';
  const typographyClass = `typography-headline${level}`;

  return (
    <Tag className={`${typographyClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';
