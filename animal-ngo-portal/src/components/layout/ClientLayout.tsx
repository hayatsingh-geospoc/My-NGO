'use client';

import AnimatedMessage from '../AnimatedMessage';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <AnimatedMessage message='Do good and expect nothing in return' />
      {children}
    </>
  );
}
