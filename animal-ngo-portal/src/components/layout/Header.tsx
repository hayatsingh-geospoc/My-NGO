'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <span className='text-2xl font-bold text-green-600'>AnimalNGO</span>
            <span className='ml-1 text-slate-600 font-medium'>Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            <Link
              href='/'
              className='text-slate-600 hover:text-green-600 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/ngos'
              className='text-slate-600 hover:text-green-600 transition-colors'
            >
              NGOs
            </Link>
            <Link
              href='/contact'
              className='text-slate-600 hover:text-green-600 transition-colors'
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
              <Input
                type='text'
                placeholder='Search NGOs...'
                className='pl-10 w-64 h-9 rounded-full bg-slate-100 border-slate-200 focus:border-green-500'
              />
            </div>
            <Button className='bg-green-600 hover:bg-green-700 text-white rounded-full'>
              <Heart className='h-4 w-4 mr-2' />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6 text-slate-600' />
            ) : (
              <Menu className='h-6 w-6 text-slate-600' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4'>
            <nav className='flex flex-col space-y-4'>
              <Link
                href='/'
                className='text-slate-600 hover:text-green-600 transition-colors py-2 border-b border-slate-100'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/ngos'
                className='text-slate-600 hover:text-green-600 transition-colors py-2 border-b border-slate-100'
                onClick={() => setIsMenuOpen(false)}
              >
                NGOs
              </Link>
              <Link
                href='/contact'
                className='text-slate-600 hover:text-green-600 transition-colors py-2 border-b border-slate-100'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className='mt-4 space-y-4'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
                <Input
                  type='text'
                  placeholder='Search NGOs...'
                  className='pl-10 w-full h-9 rounded-full bg-slate-100 border-slate-200'
                />
              </div>
              <Button className='w-full bg-green-600 hover:bg-green-700 text-white rounded-full'>
                <Heart className='h-4 w-4 mr-2' />
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
