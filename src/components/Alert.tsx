import React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; text: string }> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-info',
    text: 'text-info',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-success',
    text: 'text-success',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-warning',
    text: 'text-warning',
  },
  danger: {
    bg: 'bg-red-50',
    border: 'border-danger',
    text: 'text-danger',
  },
};

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  className = '',
}) => {
  const styles = variantStyles[variant];
  return (
    <div
      role="alert"
      className={`p-spacing-md border-l-4 ${styles.bg} ${styles.border} ${styles.text} rounded-md ${className}`.trim()}
    >
      {children}
    </div>
  );
};

Alert.displayName = 'Alert';

interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  className = '',
}) => (
  <h4 className={`font-semibold mb-spacing-xs ${className}`.trim()}>
    {children}
  </h4>
);

AlertTitle.displayName = 'AlertTitle';

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  className = '',
}) => (
  <p className={`text-sm ${className}`.trim()}>
    {children}
  </p>
);

AlertDescription.displayName = 'AlertDescription';
