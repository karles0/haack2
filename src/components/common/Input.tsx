import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="input-wrapper" style={{ marginBottom: '1rem' }}>
        {label && (
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333',
            }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`input ${className}`}
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            border: error ? '2px solid #ef4444' : '1px solid #d1d5db',
            borderRadius: '0.375rem',
            outline: 'none',
            transition: 'border-color 0.2s',
            boxSizing: 'border-box',
          }}
          {...props}
        />
        {error && (
          <span
            style={{
              display: 'block',
              marginTop: '0.25rem',
              fontSize: '0.875rem',
              color: '#ef4444',
            }}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
