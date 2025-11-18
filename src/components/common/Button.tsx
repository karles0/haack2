import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  fullWidth = false,
  disabled,
  className = '',
  style,
  ...props
}: ButtonProps) => {
  const baseStyles = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    opacity: disabled || isLoading ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
    },
  };

  const hoverStyles =
    !disabled && !isLoading
      ? {
          primary: { backgroundColor: '#2563eb' },
          secondary: { backgroundColor: '#4b5563' },
          danger: { backgroundColor: '#dc2626' },
        }[variant]
      : {};

  return (
    <button
      className={`button ${className}`}
      disabled={disabled || isLoading}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled && !isLoading) {
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, variantStyles[variant]);
      }}
      {...props}
    >
      {isLoading && (
        <span
          style={{
            width: '1rem',
            height: '1rem',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderTopColor: '#ffffff',
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite',
          }}
        />
      )}
      {children}
    </button>
  );
};
