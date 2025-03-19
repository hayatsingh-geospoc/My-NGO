'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

// Make sure the component is properly exported as a Client Component if needed
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-slate-50'>
      <div className='text-center max-w-md mx-auto'>
        <div className='relative w-48 h-48 mx-auto mb-8'>
          <Image
            src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=400&auto=format&fit=crop'
            alt='Lost animal'
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-full'
          />
        </div>
        <h1 className='text-4xl font-bold text-slate-800 mb-4'>
          404 - Lost in the Wild
        </h1>
        <p className='text-lg text-slate-600 mb-8'>
          Oops! It seems you've wandered off the trail. The page you're looking
          for seems to have gone extinct.
        </p>
        <Button asChild className='bg-green-600 hover:bg-green-700'>
          <Link href='/'>
            <Home className='mr-2 h-4 w-4' />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
