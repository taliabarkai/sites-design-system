import React from 'react';

export type TextVariant =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'body1'
  | 'button1'
  | 'caption1';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<TextProps> = ({
  variant = 'text1',
  children,
  className = '',
  as: Component = 'p',
}) => {
  const typographyClass = `typography-${variant}`;

  return React.createElement(
    Component as any,
    { className: `${typographyClass} ${className}`.trim() },
    children
  );
};

Text.displayName = 'Text';
