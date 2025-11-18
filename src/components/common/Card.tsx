import { type ReactNode, type CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export const Card = ({ children, className = '', style, title }: CardProps) => {
  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        padding: '1.5rem',
        ...style,
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#111827',
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
