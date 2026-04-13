import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const baseInputStyles = 'w-full px-spacing-md py-spacing-sm rounded-md border-2 border-border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:bg-secondary disabled:cursor-not-allowed';

  const inputClassName = error
    ? `${baseInputStyles} border-danger focus:ring-danger`
    : `${baseInputStyles} focus:border-primary focus:ring-primary ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold mb-spacing-xs text-primary"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={inputClassName}
        {...props}
      />
      {error && (
        <p className="text-sm text-danger mt-spacing-xs">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-textSecondary mt-spacing-xs">{helperText}</p>
      )}
    </div>
  );
};

Input.displayName = 'Input';

// Textarea Component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-spacing-md py-spacing-sm rounded-md border-2 border-border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:bg-secondary disabled:cursor-not-allowed resize-vertical';

  const textareaClassName = error
    ? `${baseStyles} border-danger focus:ring-danger`
    : `${baseStyles} focus:border-primary focus:ring-primary ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold mb-spacing-xs text-primary"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={textareaClassName}
        {...props}
      />
      {error && (
        <p className="text-sm text-danger mt-spacing-xs">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-textSecondary mt-spacing-xs">{helperText}</p>
      )}
    </div>
  );
};

Textarea.displayName = 'Textarea';

// Select Component
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  id,
  options,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-spacing-md py-spacing-sm rounded-md border-2 border-border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:bg-secondary disabled:cursor-not-allowed appearance-none';

  const selectClassName = error
    ? `${baseStyles} border-danger focus:ring-danger`
    : `${baseStyles} focus:border-primary focus:ring-primary ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold mb-spacing-xs text-primary"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={selectClassName}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-danger mt-spacing-xs">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-textSecondary mt-spacing-xs">{helperText}</p>
      )}
    </div>
  );
};

Select.displayName = 'Select';

// Checkbox Component
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center gap-spacing-sm">
      <input
        type="checkbox"
        id={id}
        className={`w-4 h-4 rounded border-border cursor-pointer accent-primary ${className}`.trim()}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-primary cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';

// Radio Component
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center gap-spacing-sm">
      <input
        type="radio"
        id={id}
        className={`w-4 h-4 cursor-pointer accent-primary ${className}`.trim()}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-primary cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

Radio.displayName = 'Radio';
