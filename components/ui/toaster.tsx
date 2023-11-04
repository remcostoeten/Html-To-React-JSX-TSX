"use client"
import React, { useEffect, useState } from 'react';
import { ToastTitle } from '@/components/ui/toast';
import SuccesIcon from '../core/icons/SuccesIcon';
import WarningIcon from '../core/icons/WarningIcon';

/**
 * Props for the Toaster component.
 */
interface ToasterProps {
  icon?: React.ReactNode;
  className?: string;
  text: string;
  subtext?: string;
  variant?: 'default' | 'success' | 'warning';
}

/**
 * A toast notification component.
 */
export function Toaster({
  icon,
  className,
  text,
  subtext,
  variant = 'default',
}: ToasterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (!isClosed) {
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      setTimeout(() => {
        setIsVisible(false);
      }, 80050);
    }
  }, [isClosed]);


  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  let variantClass = '';

  if (variant === 'success') {
    variantClass = 'toast--success';
  } else if (variant === 'warning') {
    variantClass = 'toast--warning';
  }

  return (
    <div
      className={`toast ${variantClass} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'opacity transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
        marginTop: '1rem',
      }}
    >
      <span className="block translate-y-1">{icon}</span>
      <div className="toast__inner">
        <ToastTitle>{text}</ToastTitle>
        <span className="toast__alternate-title">{subtext}</span>
      </div>
      <div className="toast__close" onClick={handleClose}>
        Close
      </div>
    </div>
  );
}

// Usage

/**
 * Example usage of the Toaster component.
 */
function ExampleToaster() {
  return (
    <>
      <Toaster
        variant="warning"
        text="This is not a production site"
        subtext="Strictly a testing site"
        icon={<WarningIcon fill="white" w="24" h="24" />}
      />
      <Toaster
        variant="success"
        text="This is not a production site"
        subtext="Strictly a testing site"
        icon={<SuccesIcon fill="white" w="24" h="24" />}
      />
    </>
  );
}